import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostCategory from "../pages/categories/post";
import PostProduct from "../pages/product/post";
import App from "../App";
import LayoutAdmin from "./routerLayoutAdmin";
import Home from "../pages/Admin";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route element={<LayoutAdmin />}>
          <Route path="admin/home" element={<Home />} />
          <Route path="admin/cadastrar/produto" element={<PostProduct />} />
          <Route path="admin/cadastrar/categoria" element={<PostCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
