import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostCategory from "../pages/categories/post";
import PostProduct from "../pages/product/post";
import App from "../App";
import LayoutAdmin from "../pages/Admin";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route element={<LayoutAdmin />}>
          <Route path="post/product" element={<PostProduct />} />
          <Route path="post/category" element={<PostCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
