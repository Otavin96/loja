import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../helpers/api";

async function editProduto(data: FormData): Promise<void> {
  const id = data.get("id");

  try {
    await api.put(`/product/${id}`, data);
  } catch (error) {
    console.error(error);
  }
}

export function useEditProduct() {
  const queryClient = useQueryClient();

  return useMutation<void, unknown, FormData>({
    mutationFn: editProduto,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
