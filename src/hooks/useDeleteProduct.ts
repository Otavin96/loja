import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../helpers/api";



async function deleteProduct(id:string): Promise<void> {
  try {
    await api.delete(`/product/${id}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
    
}

export function useDeleteProduct() {
    const queryClient = useQueryClient();

    return useMutation<void, unknown, string>({
        mutationFn: deleteProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
    });
}