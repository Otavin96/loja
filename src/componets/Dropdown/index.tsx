import type React from "react";

interface DropDownProps extends React.ComponentProps<"div"> {
  text: string;
  state: {
    openDropdown: string | null;
    setOpenDropdown: React.Dispatch<React.SetStateAction<string | null>>;
  };
}

export default function DropDown({
  text,
  state,
  children,
  ...props
}: DropDownProps) {
  return (
    <div className="flex flex-col gap-2 relative " {...props}>
      <a
        className="font-bold cursor-pointer"
        onClick={() =>
          state.setOpenDropdown(
            state.openDropdown === `${text}` ? null : `${text}`
          )
        }
      >
        {text}
      </a>

      <div className="flex flex-col w-max px-2 absolute top-12">
        {state.openDropdown === `${text}` && children}
      </div>
    </div>
  );
}
