const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

// set `req.user` if possible
router.use(async (req, res, next) => {
  const prefix = "Bearer ";
  const auth = req.header("Authorization");

  if (!auth) {
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);
    try {
      const { id } = jwt.verify(token, process.env.JWT_SECRET);

      if (id) {
        const user = await prisma.user.findUnique({
          where: { id },
        });
        req.user = user;
        next();
      } else {
        next({
          name: "AuthorizationHeaderError",
          message: "Authorization token malformed",
        });
      }
    } catch ({ name, message }) {
      next({ name, message });
    }
  } else {
    next({
      name: "AuthorizationHeaderError",
      message: `Authorization token must start with ${prefix}`,
    });
  }
});

router.use("/users", require("./users.cjs"));
router.use("/creatures", require("./creatures.cjs"));
router.use("/test", require("./test.cjs"));
router.use("/cart", require("./cart.cjs"));

// send error if no routes matched
router.use((error, req, res, next) => {
  res.send(error);
});

module.exports = router;
