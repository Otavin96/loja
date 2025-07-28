import type React from "react";
import type { Category } from "../../models/Category/category-model";

interface SelectProps extends React.ComponentProps<"select"> {
  label?: string;
  error?: string;
  data: Category[] | undefined;
  selectedCategory?: boolean;
  selectedNameCategory?: string;
}

export default function Select({
  label,
  error,
  data,
  selectedCategory,
  selectedNameCategory,
  ...props
}: SelectProps) {
  return (
    <div className="flex flex-col font w-full gap-0.5">
      <label className="font-extralight text-sm" htmlFor="">
        {label}
      </label>
      <select
        className="border-b-2 border-gray-300 
                    focus:border-blue-400 focus:outline-none 
                    transition-colors duration-200
                    placeholder:text-gray-600 font-extralight italic text-sm
                    font-extralight"
        {...props}
      >
        {data?.map((item, index) => (
          <option key={index} value={item.id} selected={selectedCategory}>
            {selectedNameCategory === item.name
              ? selectedNameCategory
              : item.name}
          </option>
        ))}
      </select>
      <p className="font-extralight text-sm text-red-600">{error}</p>
    </div>
  );
}
