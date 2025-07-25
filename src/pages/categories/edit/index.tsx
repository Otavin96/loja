import { type SubmitHandler } from "react-hook-form";
import Button from "../../../componets/Button";
import Form from "../../../componets/Form";
import Input from "../../../componets/Input";
import type { Category } from "../../../models/Category/category-model";
import Alert from "../../../componets/Alert";
import { useCatrgoryFormZodSchema } from "./categoryFormZodSchema";
import React from "react";
import { useGetCategoryById } from "../../../hooks/useGetCategoryById";
import { useNavigate, useParams } from "react-router-dom";
import { useEditCategory } from "../../../hooks/useEditCategory";

export default function EditCategory() {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useCatrgoryFormZodSchema();

  const params = useParams();
  const { mutate, isSuccess } = useEditCategory();
  const { data: category } = useGetCategoryById(params.id || "");
  const nav = useNavigate();

  React.useEffect(() => {
    setValue("name", category?.name || "");
    setValue("description", category?.description || "");
  }, [category, setValue]);

  const handleEditCategory: SubmitHandler<Category> = (data) => {
    data.id = category?.id || "";
    mutate(data);
    setValue("name", "");
    setValue("description", "");
    nav("/admin/listar/categorias");
  };

  return (
    <>
      {isSuccess && (
        <Alert className="flex w-96 h-16 rounded-md justify-center items-center bg-green-700">
          <p className="font-bold text-gray-200 uppercase">
            Categoria Editada com sucesso!
          </p>
        </Alert>
      )}
      <Form
        onSubmit={handleSubmit(handleEditCategory)}
        className="flex flex-col w-96 gap-4 items-center px-6 py-6"
      >
        <h2 className="text-xl">Editar Categoria</h2>
        <Input
          label="Nome: "
          {...register("name")}
          placeholder="Digite a categoria..."
          error={errors.name?.message}
        />
        <Input
          label="Descrição: "
          {...register("description")}
          placeholder="Digite uma descrição..."
          error={errors.description?.message}
        />
        <Button
          type="submit"
          className="w-36 h-8 rounded-md text-white font-bold bg-blue-700 cursor-pointer hover:opacity-90"
        >
          Editar
        </Button>
      </Form>
    </>
  );
}
