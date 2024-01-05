import { PrismaClient } from "@prisma/client";
import { addCreatureToCart, getUserCart } from "./api/cart.cjs";
const prisma = new PrismaClient();

async function seed() {
  // Seed creatures
  await prisma.creature.createMany({
    data: [
      {
        breed: `Elephox`,
        temperment: "Friendly",
        lab: `Why Not Labs`,
        food: `squirrels and bananas`,
        price: 599,
        imageUrl: "/images/Elephox.jpg",
        inStock: true,
        recommended: true,
      },
      {
        breed: `Dolphant`,
        temperment: "Friendly",
        lab: `Dumbo on Porpoise Labs`,
        food: `bananas and shrimp`,
        price: 1199,
        imageUrl: "/images/dolphant.jpg",
        inStock: true,
        recommended: false,
      },
      {
        breed: `Foxfish`,
        temperment: "Deadly",
        lab: `Very Sly Labs`,
        food: `squirrels and worms`,
        price: 799,
        imageUrl: "/images/foxfish.jpg",
        inStock: false,
        recommended: true,
      },
      {
        breed: `Hippobat`,
        temperment: "Clumsy",
        lab: `What Did We Do Labs`,
        food: `watermelons and mosquitoes`,
        price: 475,
        imageUrl: "/images/hippobat.jpg",
        inStock: true,
        recommended: true,
      },
      {
        breed: `Sharkbeaver`,
        temperment: "Leathal",
        lab: `Big Teeth Labs`,
        food: `Pine trees and swimmers`,
        price: 999,
        imageUrl: "/images/shark-beaver.jpg",
        inStock: true,
        recommended: false,
      },
      {
        breed: `Tigerturtle`,
        temperment: "Faster than you think",
        lab: `Hare Loses Labs`,
        food: `Lettuce and raw meat`,
        price: 850,
        imageUrl: "/images/tigerturtle.jpg",
        inStock: true,
        recommended: true,
      },
      {
        breed: `Walrant`,
        temperment: "Fast Breeder",
        lab: `Blue Moon Labs`,
        food: `Picnic baskets and fish`,
        price: 399,
        imageUrl: "/images/walrant.jpg",
        inStock: true,
        recommended: false,
      },
      {
        breed: `Dogduck`,
        temperment: "Retrieves himself",
        lab: `K-9 Quackers`,
        food: `Bread and Bones`,
        price: 599,
        imageUrl: "/images/dogduck.jpg",
        inStock: true,
        recommended: false,
      },
      {
        breed: `Pigeonkey`,
        temperment: "Angry Scavenger",
        lab: `Dirty Apes Labs`,
        food: `Bread and Bananas`,
        price: 675,
        imageUrl: "/images/pigeonmonkey.jpg",
        inStock: false,
        recommended: false,
      },
      {
        breed: `Sharse`,
        temperment: "Rideable",
        lab: `Bigger Boat Labs`,
        food: `Hay and License Plates`,
        price: 1275,
        imageUrl: "/images/sharse.jpg",
        inStock: false,
        recommended: false,
      },
      {
        breed: `Lippocroc`,
        temperment: "Voracious Appetite",
        lab: `Because We Could Labs`,
        food: `Gazelles, watermelons, and small dogs`,
        price: 1475,
        imageUrl: "/images/lionhippocroc.jpg",
        inStock: true,
        recommended: false,
      },
      {
        breed: `Pithorse`,
        temperment: "Strong Vegetarian",
        lab: `Best of Both Labs`,
        food: `Hay, Oats`,
        price: 475,
        imageUrl: "/images/pithorse.jpg",
        inStock: true,
        recommended: true,
      },
    ]
  });
  const creatures = await prisma.creature.findMany();

  // Seed users
  for (let username of ["Johnny", "Jennifer", "Jamie", "Jordan", "Jackie", "Jimmy"]) {
    const user = await prisma.user.create({
      data: {
        username,
        password: `${username}pass`, // need to update this to be hashed
        email: `${username}@gmail.com`,
      },
    });

    // Seed shopping carts

    const userCart = await getUserCart(user);

    for (let i = 0; i < creatures.length; i++) {
      if (Math.random() < 0.5) continue; // 50% chance of adding a creature to the shopping cart
      const creature = creatures[i];
      for (let j = 0; j < 2; j++) {
        await addCreatureToCart(userCart, creature);
      }
    }
  }

  console.log("Seed data added successfully.");
  await prisma.$disconnect();
}
// Call the seed function to execute the seeding process
seed()
