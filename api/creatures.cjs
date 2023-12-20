const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// GET /api/creatures //
router.get("/", async (req, res, next) => {
  try {
    const creatures = await prisma.creature.findMany();
    res.send(creatures);
  } catch (error) {
    next(error);
  }
});

// GET /api/creatures/:id //
router.get("/:id", async (req, res, next) => {
  // grab the id from the url
  const { id } = req.params;
  try {
    const creature = await prisma.creature.findUnique({
      where: +id,
    });
    res.send(creature);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
