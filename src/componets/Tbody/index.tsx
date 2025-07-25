import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

interface TheadProps extends React.ComponentProps<"tbody"> {
  as?: keyof React.JSX.IntrinsicElements;
  handleDelete: (id: string) => void;
}
export default function Thead({
  as = "tbody",
  handleDelete,
  className,
  ...props
}: TheadProps) {
  return React.createElement(
    as,
    {
      className: `bg-white ${className}`,
      ...props,
    },
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
              <button className="bg-blue-500 cursor-pointer text-white p-2 rounded hover:bg-blue-600">
                <AiOutlineEdit size={25} />
              </button>
              <button
                onClick={() => handleDelete(category.id)}
                className="bg-red-500 cursor-pointer text-white p-2 rounded hover:bg-red-600"
              >
                <AiOutlineDelete size={25} />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
