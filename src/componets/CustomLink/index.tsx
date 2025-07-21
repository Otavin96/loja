import type { ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

interface CuntomLinkProps extends LinkProps {
  children: ReactNode;
}

export default function CustomLink({
  to,
  children,
  className = "font-bold",
  ...props
}: CuntomLinkProps) {
  return (
    <Link to={to} className={className} {...props} >
      {children}
    </Link>
  );
}
