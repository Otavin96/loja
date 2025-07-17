import Button from "../../../componets/Button";
import Form from "../../../componets/Form";
import Input from "../../../componets/Input";

export default function PostCategory() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Form className="flex flex-col w-96 gap-4 items-center px-6 py-6">
        <h2 className="text-xl">Cadastrar Categoria</h2>
        <Input label="Nome: " placeholder="Digite a categoria..." />
        <Input label="Descrição: " placeholder="Digite uma descrição..." />
        <Button type="submit" className="w-36 h-8 rounded-md text-white font-bold bg-blue-600 cursor-pointer">Cadastrar</Button>
      </Form>
    </div>
  );
}
