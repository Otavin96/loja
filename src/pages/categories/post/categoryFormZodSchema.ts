import z from "zod/v3";
import { useZodForm } from "../../../hooks/useZodForm";



export const categoryFormZodSchema = z.object({
    id: z.string().uuid().optional(),
    name: z.string().min(1, "Nome da categoria é obrigatorio!"),
    description: z.string().min(1, "A descrição da categoria é obrigatorio!"),
})


export const useCatrgoryFormZodSchema = () => {
    return useZodForm(categoryFormZodSchema)
}