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
  sku: string;
  description: string;
  price: number;
  quantity: number;
  images: string[];
}
