import React from "react";

interface FormProps extends React.ComponentProps<"form"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Form({
  as = "form",
  children,
  className,
  ...props
}: FormProps) {
  return React.createElement(
    as,
    {
      className,
      ...props,
    },
    children
  );
}
