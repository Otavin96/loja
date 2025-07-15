import { useFecthCategories } from "../../hooks/useFecthCategories";

export default function Navbar() {
  const { data: categories, isLoading } = useFecthCategories();

  return (
    <ul className="fixed flex flex-row bg-zinc-700 h-12 w-screen justify-center items-center gap-5">
      {categories?.map((category) => (
        <li
          key={category.id}
          className="cursor-pointer font-bold text-white hover:text-gray-300 transition delay-150"
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
}
