import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const productsCount = 5;

for (let i = 0; i < productsCount; i++) {
  const createdProduct = await prisma.product.create({
    data: {
      name: faker.commerce.productName(),
      category: faker.commerce.department(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price()) * 100,
      coverImgUrl: faker.image.url(),
    },
  });
  console.log(`Created product with id: ${createdProduct.id}`);
}