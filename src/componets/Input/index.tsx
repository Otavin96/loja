import type React from "react";

interface InputProps extends React.ComponentProps<"input"> {
  label: string;
  error?: string;
}

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="flex flex-col w-full gap-0.5">
      <label className="font-extralight text-sm" htmlFor="">
        {label}
      </label>
      <input
        className={`
                    border-b-2 border-gray-300 
                    focus:border-blue-400 focus:outline-none 
                    transition-colors duration-200
                    placeholder:text-gray-600 font-extralight italic text-sm
                    font-extralight
                `}
        {...props}
      />
      <p className="font-extralight text-sm text-red-600">{error}</p>
    </div>
  );
}
