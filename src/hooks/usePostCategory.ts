import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../helpers/api";
import type { Category } from "../models/Category/category-model";

async function postCategory(data: Category): Promise<void> {
  try {
    await api.post("/category", data);
  } catch (error) {
    console.error(error);
  }
}

export function usePostCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}
