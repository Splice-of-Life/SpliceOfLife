const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");


router.post("/register", async (req, res, next) => {
  // this route registers a new user
  const { username, password, email } = req.body;
  if (!(username && password && email)) {
    res.status(400).send("Username, password, and email are required");
    return next()
  }
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  try {
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
      },
    });
    delete user.password;
    res.send(user);
  } catch (error) {
    // TODO: i think it could be something else that we could handle
    res.status(400).send("Username or email already exists")
    next();
  }
});

router.post("/login", async (req, res, next) => {
  // this route takes a username and password and returns a JWT
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) {
      res.status(401).send("User not found");
    } else {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        res.status(401).send("Incorrect password");
      } else {
        const token = jwt.sign({
          id: user.id,
          username: user.username
        }, process.env.JWT_SECRET, {
          expiresIn: '1w'
        });

        res.send({
          message: "you're logged in!",
          token
        });
      }
    }
    // return jwt token
  } catch (error) {
    next(error);
  }
});

// GET /api/users //
router.get("/", async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

// GET /api/users/:id //
router.get("/:id", async (req, res, next) => {
  // grab the id from the url
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: +id },
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
