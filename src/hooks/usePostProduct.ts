import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../helpers/api";
import type { Product } from "../models/Product/product-model";

async function postProduct(data: Product): Promise<void> {
  try {
    await api.post("/product", data);
  } catch (error) {
    console.error(error);
  }
}

export function usePostProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
