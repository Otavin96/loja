import { useQuery } from "@tanstack/react-query";
import { api } from "../helpers/api";
import type { ProductResponse } from "../models/Product/product-model";

async function fetchProducts(): Promise<ProductResponse | undefined> {
  try {
    const response = await api.get("/product");
    const data = response.data;

    return data;
  } catch (error) {
    console.error(error);
  }
}

export function useFetchProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}
