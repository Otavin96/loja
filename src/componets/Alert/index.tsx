import React from "react";

interface AlertProps extends React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
  type?: string;
}

export default function Alert({
  as = "div",
  children,
  className,
  type,
  ...props
}: AlertProps) {
  return React.createElement(
    as,
    {
      className,
      ...props,
    },
    children
  );
}
