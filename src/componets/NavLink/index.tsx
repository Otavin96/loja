import { Link } from "react-router-dom"


export default function NavLink() {
    return(
        <ul className="flex flex-row justify-center items-center gap-2">
            <Link to="/" >Catalogo / </Link>
            <Link to="/post/category" >Cadastrar Categoria / </Link>
            <Link to="/post/product" >Cadastrar Produto</Link>
        </ul>
    )
}