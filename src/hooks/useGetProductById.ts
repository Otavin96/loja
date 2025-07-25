import { useQuery } from "@tanstack/react-query";
import { api } from "../helpers/api";
import type { Product } from "../models/Product/product-model";



export async function getProductById(productId: string): Promise<Product | undefined> {
    try {
        
        const response = await api.get(`/products/${productId}`);
        return response.data;

    } catch (error) {
        console.error("Erro ao obter produto:", error);
    }
}

export function useGetProductById(id: string) {
    
    return useQuery({
        queryKey: ["product"],
        queryFn: () => getProductById(id)
    });  
    
    
}