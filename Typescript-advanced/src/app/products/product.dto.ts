import { Product } from './product.model';

export interface ProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

export interface updatedProductDto extends Partial<ProductDto> {}

export interface findProductDto extends Partial<Product> {}
