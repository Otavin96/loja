import type { Category } from "../Category/category-model";

export interface ProductResponse {
  items: Product[];
  total: number;
  current_page: number;
  per_page: number;
  last_page: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category_id: string;
  images: FileList; // ou File[]
}

