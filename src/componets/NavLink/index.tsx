import React from "react";
import DropDown from "../Dropdown";
import CustomLink from "../CustomLink";

export default function NavLink() {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const menuRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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
      className="flex flex-row h-16 justify-center items-center gap-4 shadow-md"
    >
      <CustomLink to="/">Catálogo</CustomLink>

      <CustomLink to="/admin/home">Home</CustomLink>

      <DropDown text="Produto" state={{ openDropdown, setOpenDropdown }}>
        <CustomLink
          className="border-b-2 border-blue-400"
          to="admin/cadastrar/produto"
        >
          Cadastrar
        </CustomLink>
        <CustomLink
          className="border-b-2 border-blue-400"
          to="admin/listar/produtos"
        >
          Listrar
        </CustomLink>
      </DropDown>

      <DropDown text="Categoria" state={{ openDropdown, setOpenDropdown }}>
        <CustomLink
          className="border-b-2 border-blue-400"
          to="admin/cadastrar/categoria"
        >
          Cadastrar
        </CustomLink>
        <CustomLink
          className="border-b-2 border-blue-400"
          to="admin/listar/categorias"
        >
          Listar
        </CustomLink>
      </DropDown>
    </ul>
  );
}
