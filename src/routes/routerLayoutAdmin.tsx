import { Outlet } from "react-router-dom";
import NavLink from "../componets/NavLink";

export default function LayoutAdmin() {
  return (
    <>
      <NavLink />
      <div className="flex flex-col w-full py-20 items-center">
        <Outlet />
      </div>
    </>
  );
}
