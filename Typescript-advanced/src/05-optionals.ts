export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};

const p1 = createProduct(1, true, 12);
const p2 = createProduct(1);
const p3 = createProduct(1, false, 0);
