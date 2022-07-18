import { BaseModel } from '../base.model';
import { Category } from '../categories/category.model';

export enum Sizes {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}
