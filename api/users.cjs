const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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
