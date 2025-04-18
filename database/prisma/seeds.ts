import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';

const prisma = new PrismaClient();
// Para desarrollo o pruebas, configure SEED=true en .env para ejecutar este script
// Los datos de prueba se cargan desde `/database/prisma/seed-data.json` y pueden ajustarse

async function main() {
  if (process.env.SEED !== 'true') {
    console.log('Saltando seeds: SEED no está habilitado.');
    return;
  }

  const rawData = fs.readFileSync(
    __dirname + '/seed-data.json',
    'utf-8'
  );
  const { ingredients = [], menuItems = [], tables = [] } = JSON.parse(rawData);

  // Ingredientes
  for (const ing of ingredients) {
    await prisma.ingredient.upsert({
      where: { name: ing.name },
      update: { stock: ing.stock },
      create: { name: ing.name, stock: ing.stock },
    });
  }

  // Ítems de menú
  for (const item of menuItems) {
    const record = await prisma.menuItem.upsert({
      where: { name: item.name },
      update: {
        price: item.price,
        description: item.description,
        category: item.category,
      },
      create: {
        name: item.name,
        description: item.description,
        price: item.price,
        category: item.category,
      },
    });
    // Asocia ingredientes si existen
    if (item.ingredientNames?.length) {
      const existing = await prisma.ingredient.findMany({
        where: { name: { in: item.ingredientNames } }
      });
      await prisma.menuItem.update({
        where: { id: record.id },
        data: {
          ingredients: { connect: existing.map(i => ({ id: i.id })) }
        }
      });
    }
  }

  // Mesas
  for (const num of tables) {
    await prisma.table.upsert({
      where: { number: num },
      update: {},
      create: { number: num }
    });
  }

  console.log('Seeds completadas.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });