import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../helpers/api";



async function deleteCategory(id:string): Promise<void> {
  try {
    await api.delete(`/category/${id}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
    
}

export function useDeleteCategory() {
    const queryClient = useQueryClient();

    return useMutation<void, unknown, string>({
        mutationFn: deleteCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
    });
}