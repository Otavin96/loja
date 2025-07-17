import Button from "../../../componets/Button";
import Form from "../../../componets/Form";
import Input from "../../../componets/Input";
import Select from "../../../componets/Select";
import { useFecthCategories } from "../../../hooks/useFecthCategories";

export default function PostProduct() {

  const { data: categories, isLoading } = useFecthCategories();

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Form className="flex flex-col w-96 gap-4 items-center px-6 py-6">
        <h2 className="text-xl">Cadastrar Produto</h2>
        <Input label="Nome: " placeholder="Digite o produto..." />
        <Input label="Descrição: " placeholder="Digite uma descrição..." />
        <Input label="Preço: " placeholder="Digite o valor..." />
        <Input label="Quantidade: " placeholder="Digite a quantidade..." />

        <Select
          label="Categorias: "
          data={categories}
        />

        <Input type="file" multiple label="Foto dos produtos" src="" />
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
