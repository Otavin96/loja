import React from "react";



interface TheadProps extends React.ComponentProps<"thead"> {
  as?: keyof React.JSX.IntrinsicElements;
}
export default function Thead({
  as = "thead",
  children,
  className,
  ...props
}: TheadProps) {
  return React.createElement(
    as,
    {
      className: `bg-blue-500 text-white ${className}`,
      ...props,
    },
    children
  );
}