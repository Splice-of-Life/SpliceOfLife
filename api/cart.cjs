const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { requireUser } = require("./utils.cjs");

// Create a new cart in the database
async function getUserCart(user) {
  let userCart;
  userCart = await prisma.shoppingCart.findFirst({
    where: {
      user,
    },
    // include the list of cartCreatures in the response
    include: {
      cartCreature: true,
    },
  });
  if (!userCart) {
    userCart = await prisma.shoppingCart.create({
      data: {
        userId: user.id,
      }
    });
  }
  return userCart;
}

async function addCreatureToCart(shoppingCart, creature, quantity = 1) {
  // find the creature in the shopping cart
  let cartCreature = await prisma.cartCreature.findFirst({
    where: {
      shoppingCartId: shoppingCart.id,
      creatureId: creature.id,
    },
  });
  // if there's already a creature of that type in the cart
  if (cartCreature) {
    // add the quantity to the existing quantity
    cartCreature = await prisma.cartCreature.update({
      where: {
        id: cartCreature.id,
      },
      data: {
        quantity: cartCreature.quantity + quantity,
      }
    })
  } else {
    // create a new cart creature with the desired quantity
    cartCreature = await prisma.cartCreature.create({
      data: {
        shoppingCartId: shoppingCart.id,
        creatureId: creature.id,
        quantity,
      }
    })
  }
  return cartCreature;
}

// POST /api/cart/ //
router.post("/", requireUser, async (req, res, next) => {
  const { user } = req;

  try {
    const cart = await getUserCart(user);
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

// GET /api/cart //
router.post("/creature", requireUser, async (req, res, next) => {
  const { user, body: { creatureId } } = req;
  try {
    const cart = await getUserCart(user);
    const creature = await prisma.creature.findUnique({
      where: { id: creatureId },
    });
    const cartCreature = await addCreatureToCart(cart, creature);
    res.send(cartCreature)
  } catch (error) {
    next(error);
  }
});

module.exports = {
  router,
  getUserCart,
  addCreatureToCart,
};
