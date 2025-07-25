import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostCategory from "../pages/categories/post";
import PostProduct from "../pages/product/post";
import App from "../App";
import LayoutAdmin from "./routerLayoutAdmin";
import Home from "../pages/Admin";
import ListProducts from "../pages/product/list";
import ListCategories from "../pages/categories/list";
import EditCategory from "../pages/categories/edit";
import EditProduct from "../pages/product/edit";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route element={<LayoutAdmin />}>
          <Route path="admin/home" element={<Home />} />
          <Route path="admin/cadastrar/produto" element={<PostProduct />} />
          <Route path="admin/listar/produtos" element={<ListProducts />} />
          <Route path="admin/listar/categorias" element={<ListCategories />} />
          <Route path="admin/editar/categoria/:id" element={<EditCategory />} />
          <Route path="admin/editar/produto/:id" element={<EditProduct />} />
          <Route path="admin/cadastrar/categoria" element={<PostCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
