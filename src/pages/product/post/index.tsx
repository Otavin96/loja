import { useForm, type SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import Button from "../../../componets/Button";
import Form from "../../../componets/Form";
import Input from "../../../componets/Input";
import Select from "../../../componets/Select";
import { useFecthCategories } from "../../../hooks/useFecthCategories";
import { usePostProduct } from "../../../hooks/usePostProduct";
import type { Product } from "../../../models/Product/product-model";

export default function PostProduct() {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<Product>();

  const { mutate, isSuccess } = usePostProduct();

  // Registrar manualmente o campo "images"
  useEffect(() => {
    register("images", { required: true });
  }, [register]);

  const handlePostProduct: SubmitHandler<Product> = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", String(data.price));
    formData.append("quantity", String(data.quantity));
    formData.append("category_id", data.category_id);

    if (data.images) {
      Array.from(data.images).forEach((file) => {
        formData.append("images", file);
      });
    }

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    mutate(formData);
  };

  const { data: categories } = useFecthCategories();

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Form
        onSubmit={handleSubmit(handlePostProduct)}
        className="flex flex-col w-96 gap-4 items-center px-6 py-6"
      >
        <h2 className="text-xl">Cadastrar Produto</h2>

        <Input
          {...register("name", { required: true })}
          label="Nome: "
          placeholder="Digite o produto..."
        />
        <Input
          {...register("description", { required: true })}
          label="Descrição: "
          placeholder="Digite uma descrição..."
        />
        <Input
          {...register("price", { valueAsNumber: true })}
          type="number"
          label="Preço: "
          placeholder="Digite o valor..."
        />
        <Input
          {...register("quantity", { valueAsNumber: true })}
          type="number"
          label="Quantidade: "
          placeholder="Digite a quantidade..."
        />

        <Select
          {...register("category_id", { required: true })}
          label="Categorias: "
          data={categories}
        />

        {/* Campo de imagem tratado manualmente */}
        <label className="w-full">
          Foto dos produtos:
          <input
            type="file"
            multiple
            onChange={(e) => {
              if (e.target.files) {
                setValue("images", e.target.files);
              }
            }}
            className="w-full border px-2 py-1 mt-1"
          />
        </label>

        <Button
          type="submit"
          className="w-36 h-8 rounded-md text-white font-bold bg-blue-600 cursor-pointer"
        >
          Cadastrar
        </Button>
      </Form>
    </div>
  );
}
