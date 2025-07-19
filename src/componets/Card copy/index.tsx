import React from "react";

interface CardItemProps extends React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Card({
  as = "div",
  children,
  className,
  ...props
}: CardItemProps) {
  return React.createElement(
    as,
    {
      className,
      ...props,
    },
    children
  );
}
