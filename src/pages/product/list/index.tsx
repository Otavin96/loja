import { Link } from "react-router-dom";
import { useDeleteProduct } from "../../../hooks/useDeleteProduct";
import { useFetchProducts } from "../../../hooks/useFecthProducts";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

export default function ListProducts() {
  const { data: products, isLoading } = useFetchProducts();
  const { mutate, isSuccess } = useDeleteProduct();

  if (isLoading && !products) {
    return <p className="text-center">Carregando produtos....</p>;
  }

  function handleDeleteProduct(id: string) {
    if (!window.confirm("Tem certeza que deseja excluir este produto?")) {
      return;
    }
    mutate(id);
  }

  return (
    <table className="w-3/4 border-collapse border border-gray-300 mx-auto">
      <thead className="bg-blue-500 text-white">
        <tr className="">
          <th className="h-12 border border-gray-300">Nome</th>
          <th className="h-12 border border-gray-300">Descrição</th>
          <th className="h-12 w-20 border border-gray-300">Preço</th>
          <th className="h-12 w-24 border border-gray-300">Quantidade</th>
          <th className="h-12 w-24 border border-gray-300">Categoria</th>
          <th className="h-12 w-36 border border-gray-300">Ações</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {isLoading && <p className="text-center">Carregando produtos....</p>}
        {products?.items.map((product, index) => (
          <tr key={index}>
            <td className="px-4 border border-gray-300">{product.name}</td>
            <td className="px-4 border border-gray-300">
              {product.description}
            </td>
            <td className="px-4 border border-gray-300">{product.price}</td>
            <td className="px-4 border border-gray-300">{product.quantity}</td>
            <td className="px-4 border border-gray-300">
              {product.category_id?.name || "Sem categoria"}
            </td>
            <td className="px-4 border border-gray-300">
              <div className="flex justify-center gap-2 py-2">
                <Link to={`/admin/editar/produto/${product.id}`} className="bg-blue-500 cursor-pointer text-white p-2 rounded hover:bg-blue-600">
                  <AiOutlineEdit size={25} />
                </Link>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="bg-red-500 cursor-pointer text-white p-2 rounded hover:bg-red-600"
                >
                  <AiOutlineDelete size={25} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
