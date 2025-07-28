import z from "zod/v3";
import { useZodForm } from "../../../hooks/useZodForm";

export const productFormZodSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1, "Nome é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  price: z
    .coerce.number({ invalid_type_error: "Preço inválido" })
    .positive("Preço deve ser positivo"),
  quantity: z.number({ invalid_type_error: "Precisa ser um numero" }).nonnegative("Quantidade inválida"),
  category_id: z.string().min(1, "Categoria é obrigatória"),

  // Validação de imagens usando custom
  images: z.custom<FileList>(
    (files) => files instanceof FileList && files.length > 0,
    {
      message: "Pelo menos uma imagem é obrigatória",
    }
  ).optional(),
});

export const useProductFormZodSchema = () => {
  return useZodForm(productFormZodSchema);
};
