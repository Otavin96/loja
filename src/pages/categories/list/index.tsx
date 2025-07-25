import { Link, useParams } from "react-router-dom";
import Table from "../../../componets/Table";
import { useDeleteCategory } from "../../../hooks/useDeleteCategories";
import { useFecthCategories } from "../../../hooks/useFecthCategories";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

export default function ListCategories() {
  const { data: categories, isLoading } = useFecthCategories();
  const { mutate, isSuccess } = useDeleteCategory();

  if (isLoading && !categories) {
    return <p className="text-center">Carregando categorias....</p>;
  }

  function handleDeleteCategory(id: string | undefined) {
    if (!window.confirm("Tem certeza que deseja excluir esta categoria?")) {
      return;
    }
    mutate(id);
  }

  return (
    <Table>
      <thead className="bg-blue-500 text-white">
        <tr className="">
          <th className="h-12 border border-gray-300">Nome</th>
          <th className="h-12 border border-gray-300">Descrição</th>
          <th className="h-12 w-36 border border-gray-300">Ações</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {isLoading && <p className="text-center">Carregando categorias....</p>}
        {categories?.map((category, index) => (
          <tr key={index}>
            <td className="px-4 border border-gray-300">{category.name}</td>
            <td className="px-4 border border-gray-300">
              {category.description}
            </td>
            <td className="px-4 border border-gray-300">
              <div className="flex justify-center gap-2 py-2">
                <Link to={`/admin/editar/categoria/${category.id}`} className="bg-blue-500 cursor-pointer text-white p-2 rounded hover:bg-blue-600">
                  <AiOutlineEdit size={25} />
                </Link>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="bg-red-500 cursor-pointer text-white p-2 rounded hover:bg-red-600"
                >
                  <AiOutlineDelete size={25} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
