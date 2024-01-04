const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// POST /api/cart/ //
// Create a new cart in the database

router.post("/", async (req, res, next) => {
  const { userId, cartCreature } = req.body;

  try{
    const cart = await prisma.shoppingCart.create({
      data: {
        userId,
        cartCreature,
      },
    });
    res.send(cart);
  }catch (error) {
    next(error);
  }});



// GET /api/cart //
router.get("/", async (req, res, next) => {
  try {
    const cart = await prisma.ShoppingCart.findMany();
    // res.send(`Here is your shopping cart:`);
    res.send(ShoppingCart);


  } catch (error) {
    next(error);
  }
});

// GET /api/users/:id //
// router.get("/:id", async (req, res, next) => {
//   // grab the id from the url
//   const { id } = req.params;
//   try {
//     const user = await prisma.user.findUnique({
//       where: { id: +id },
//     });
//     res.send(user);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
