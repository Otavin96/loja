import { useQuery } from "@tanstack/react-query";
import { api } from "../helpers/api";
import type { Category } from "../models/Category/category-model";



export async function getCategoryById(categoryId: string): Promise<Category | undefined> {
    try {
        
        const response = await api.get(`/category/${categoryId}`);
        return response.data;

    } catch (error) {
        console.error("Erro ao obter categoria:", error);
    }
}

export function useGetCategoryById(id: string) {
    
    return useQuery({
        queryKey: ["category"],
        queryFn: () => getCategoryById(id)
    });  
    
    
}