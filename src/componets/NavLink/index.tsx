import React from "react";
import DropDown from "../Dropdown";
import CustomLink from "../CustomLink";

export default function NavLink() {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const menuRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        (menuRef.current as HTMLElement).contains &&
        !(menuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <ul
      ref={menuRef}
      className="flex flex-row h-16 justify-center items-center gap-6 bg-white text-blue-800 font-medium px-8 border-b border-gray-200"
    >
      <CustomLink
        to="/"
        className="px-2 py-1 hover:text-blue-600 hover:border-blue-400 focus:outline-none duration-150"
      >
        Catálogo
      </CustomLink>

      <CustomLink
        to="/admin/home"
        className="px-2 py-1 hover:text-blue-600 hover:border-blue-400 focus:outline-none duration-150"
      >
        Home
      </CustomLink>

      <DropDown text="Produto" state={{ openDropdown, setOpenDropdown }}>
        <CustomLink
          to="admin/cadastrar/produto"
          className="px-2 py-1 text-blue-800 hover:text-blue-600 hover:border-blue-400 focus:outline-none duration-150"
        >
          Cadastrar
        </CustomLink>
        <CustomLink
          to="admin/listar/produtos"
          className="px-2 py-1 text-blue-800 hover:text-blue-600 hover:border-blue-400 focus:outline-none duration-150"
        >
          Listar
        </CustomLink>
      </DropDown>

      <DropDown text="Categoria" state={{ openDropdown, setOpenDropdown }}>
        <CustomLink
          to="admin/cadastrar/categoria"
          className="px-2 py-1 text-blue-800 hover:text-blue-600 hover:border-blue-400 focus:outline-none duration-150"
        >
          Cadastrar
        </CustomLink>
        <CustomLink
          to="admin/listar/categorias"
          className="px-2 py-1 text-blue-800 hover:text-blue-600 hover:border-blue-400 focus:outline-none duration-150"
        >
          Listar
        </CustomLink>
      </DropDown>
    </ul>
  );
}
