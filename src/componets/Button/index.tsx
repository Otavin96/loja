import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {
  handleAction?: () => unknown;
  className?: string;
}

export default function Button({
  children,
  handleAction,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={className} onClick={handleAction} {...props}>
      {children}
    </button>
  );
}
