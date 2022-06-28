export let productName: string = "Product";

export let productPrice: number = 100;

export const otherPrice: number = 200;

export const total: number = productPrice + otherPrice;

const addNumber = (a: number, b: number): number => {
  return a + b;
};

addNumber(1, 2);
