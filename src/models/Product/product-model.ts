import * as zod from "zod/v3"
import type { categoryFormZodSchema } from "../../pages/categories/post/categoryFormZodSchema";

export type ProductResponse = {
  items: Product[];
  total: number;
  current_page: number;
  per_page: number;
  last_page: number;
}

// export type Product = zod.infer<typeof productFormZodSchema>

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity?: number;
  category_id: zod.infer<typeof categoryFormZodSchema>;
  images?: FileList; // Assuming images are optional and can be a FileList
};
