import { Outlet } from "react-router-dom";
import NavLink from "../../componets/NavLink";


export default function LayoutAdmin() {
  return (
    <>
      <NavLink />
      <Outlet />
    </>
  );
}
