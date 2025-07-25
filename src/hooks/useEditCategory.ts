import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../helpers/api";
import type { Category } from "../models/Category/category-model";

async function editarCategory(data: Category): Promise<void> {
  try {
    await api.put(`/category/${data.id}`, data);
  } catch (error) {
    console.error(error);
  }
}

export function useEditCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editarCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}
