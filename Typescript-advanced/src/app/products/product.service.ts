import { Product } from './product.model';
import { findProductDto, ProductDto, updatedProductDto } from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (product: ProductDto): Product => {
  const newProduct = {
    ...product,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };

  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (
  id: Product['id'],
  changes: updatedProductDto
): Product => {
  const product = products.find((p) => p.id === id);
  if (!product) {
    throw new Error(`Product with id ${id} not found`);
  }

  const updatedProduct = {
    ...product,
    ...changes,
    updatedAt: faker.date.recent(),
  } as Product;

  const index = products.findIndex((p) => p.id === id);
  products[index] = updatedProduct;
  console.log({ updatedProduct });
  return updatedProduct;
};

export const findProducts = (dto: findProductDto): Product[] => {
  return products;
};
