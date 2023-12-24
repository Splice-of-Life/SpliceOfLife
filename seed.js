import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  // Seed creatures
  const creatures = [];
  for (let i = 0; i < 9; i++) {
    creatures.push(
      await prisma.creature.create({
        data: {
          breed: `Breed${i + 1}`,
          temperment: "Friendly",
          lab: `Lab${i + 1}`,
          food: `Food${i + 1}`,
          price: 1.23,
          // imageUrl: `image${i + 1}.jpg`,
          imageUrl: "/images/Elephox.jpg",
          inStock: true,
          recommended: i % 2 === 0, // will alternate between true and false
        },
      })
    );
  }

  // Seed users
  for (let username of ["user1", "user2", "user3"]) {
    const user = await prisma.user.create({
      data: {
        username,
        password: `${username}pass`, // need to update this to be hashed
        email: `${username}@gmail.com`,
      },
    });

    // Seed shopping carts
    const shoppingCart = await prisma.shoppingCart.create({
      data: {
        userId: user.id,
      },
    });
    for (let i = 0; i < creatures.length; i++) {
      if (Math.random() < 0.5) continue; // 50% chance of adding a creature to the shopping cart
      await prisma.cartCreature.create({
        data: {
          creatureId: creatures[i].id,
          shoppingCartId: shoppingCart.id,
        },
      });
    }
  }

  console.log("Seed data added successfully.");
  await prisma.$disconnect();
}

// Call the seed function to execute the seeding process
seed();
