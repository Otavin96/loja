import React from "react";



interface TableItemProps extends React.ComponentProps<"table"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Table({
  as = "table",
  children,
  className,
  ...props
}: TableItemProps) {
  return React.createElement(
    as,
    {
      className: `w-3/4 border-collapse border border-gray-300 mx-auto ${className}`,
      ...props,
    },
    children
  );
}