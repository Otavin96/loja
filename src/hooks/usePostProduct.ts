import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../helpers/api";

async function postProduct(data: FormData): Promise<void> {
  try {
    await api.post("/product", data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function usePostProduct() {
  const queryClient = useQueryClient();

  return useMutation<void, unknown, FormData>({
    mutationFn: postProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
