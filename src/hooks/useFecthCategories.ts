import { useQuery } from "@tanstack/react-query";
import { api } from "../helpers/api";
import type { Category } from "../models/Category/category-model";

async function FecthCategories(): Promise<Category[] | undefined> {
  const response = await api.get("/category");
  const data = response.data;

  return data;
}

export function useFecthCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: FecthCategories,
  });
}
