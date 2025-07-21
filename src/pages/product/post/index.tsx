import { type SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import Button from "../../../componets/Button";
import Form from "../../../componets/Form";
import Input from "../../../componets/Input";
import Select from "../../../componets/Select";
import { useFecthCategories } from "../../../hooks/useFecthCategories";
import { usePostProduct } from "../../../hooks/usePostProduct";
import type { Product } from "../../../models/Product/product-model";
import Alert from "../../../componets/Alert";
import { useProductFormZodSchema } from "./productFormZodSchema";

export default function PostProduct() {
  const { mutate, isSuccess } = usePostProduct();

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useProductFormZodSchema();


  console.log(errors)

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

    mutate(formData);
  };

  const { data: categories } = useFecthCategories();

  return (
    <>
      {isSuccess && (
        <Alert className="flex w-96 h-16 rounded-md justify-center items-center bg-green-700">
          <p className="font-bold text-gray-200 uppercase">
            Produto cadastrado com sucesso!
          </p>
        </Alert>
      )}

      <Form
        onSubmit={handleSubmit(handlePostProduct)}
        className="flex flex-col w-96 gap-4 items-center px-6 py-6"
      >
        <h2 className="text-xl">Cadastrar Produto</h2>

        <Input
          {...register("name", { required: true })}
          label="Nome: "
          placeholder="Digite o produto..."
          error={errors.name?.message}
        />

        <div className="flex flex-col w-full gap-1">
          <label htmlFor="" className="font-extralight text-sm">
            Descrição:{" "}
          </label>
          <textarea
            rows={5}
            className="border rounded-md indent-2 placeholder:text-gray-600 font-extralight italic text-sm
                    font-extralight"
            {...register("description", { required: true })}
            placeholder="Digite uma descrição..."
          ></textarea>
          <p className="font-extralight text-sm text-red-600">{errors.description?.message}</p>
        </div>

        <Input
          {...register("price")}
          type="number"
          label="Preço: "
          placeholder="Digite o valor..."
          error={errors.price?.message}
        />

        <Input
          {...register("quantity", { valueAsNumber: true })}
          type="number"
          label="Quantidade: "
          placeholder="Digite a quantidade..."
          error={errors.quantity?.message}
        />

        <Select
          {...register("category_id", { required: true })}
          label="Categorias: "
          data={categories}
          error={errors.category_id?.message}
        />

        {/* Campo de imagem tratado manualmente */}
        <label className="w-full">
          Foto dos produto:
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
        <p className="font-extralight text-sm text-red-600">{errors.images?.message}</p>

        <Button
          type="submit"
          className="w-36 h-8 rounded-md text-white font-bold bg-blue-700 cursor-pointer hover:opacity-90"
        >
          Cadastrar
        </Button>
      </Form>
    </>
  );
}
