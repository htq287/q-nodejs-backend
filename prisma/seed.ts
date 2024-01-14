import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  try {} catch (e) {
    console.error(e);
  }
};

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
