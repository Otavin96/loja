import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "../../../componets/Button";
import Form from "../../../componets/Form";
import Input from "../../../componets/Input";
import type { Category } from "../../../models/Category/category-model";
import { usePostCategory } from "../../../hooks/usePostCategory";
import Alert from "../../../componets/Alert";
import NavLink from "../../../componets/NavLink";

export default function PostCategory() {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<Category>();

  const { mutate, isSuccess } = usePostCategory();

  const handlePostCategory: SubmitHandler<Category> = (data) => {
    mutate(data);
    setValue("name", "");
    setValue("description", "");
  };

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      {isSuccess && (
        <Alert className="flex w-96 h-16 rounded-md justify-center items-center bg-green-700">
          <p className="font-bold text-gray-200 uppercase">
            Categoria cadastrada com sucesso!
          </p>
        </Alert>
      )}
      <Form
        onSubmit={handleSubmit(handlePostCategory)}
        className="flex flex-col w-96 gap-4 items-center px-6 py-6"
      >
        <h2 className="text-xl">Cadastrar Categoria</h2>
        <Input
          label="Nome: "
          {...register("name")}
          placeholder="Digite a categoria..."
        />
        <Input
          label="Descrição: "
          {...register("description")}
          placeholder="Digite uma descrição..."
        />
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
