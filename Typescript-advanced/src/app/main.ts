import { Sizes } from './products/product.model';

import { faker } from '@faker-js/faker';

import {
  addProduct,
  findProducts,
  products,
  updateProduct,
} from './products/product.service';

for (let i = 0; i < 30; i++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price()),
    size: Sizes.L,
    isNew: faker.datatype.boolean(),
    tags: [faker.commerce.productAdjective(), faker.commerce.productMaterial()],
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
  });
}

const product = products[0];
console.log({ product });

updateProduct(product.id, {
  title: 'Updated title',
  description: 'Updated description',
});

findProducts({
  stock: 10,
  color: 'red',
});
