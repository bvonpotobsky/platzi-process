type Sizes = 'S' | 'M' | 'L' | 'XL';

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

// 100% ---- 100
// 35% ----  35
