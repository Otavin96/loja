import * as zod from "zod/v3"
import type { productFormZodSchema } from "../../pages/product/post/productFormZodSchema";

export type ProductResponse = {
  items: Product[];
  total: number;
  current_page: number;
  per_page: number;
  last_page: number;
}

export type Product = zod.infer<typeof productFormZodSchema>
