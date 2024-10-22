import React, { FC, KeyboardEvent } from "react";
import Iconify from "../icon/Iconify";

interface PropsType {
  type?: string;
  name: string;
  placeholder?: string;
  value: string;
  setFilterEnter?: (enter: boolean) => void;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  size?: "small";
}
const TableSearchField: FC<PropsType> = ({
  type,
  name,
  placeholder,
  value,
  setFilterEnter,
  onChange,
  size,
}) => {
  const handleFilterEnter = () => {
    if (setFilterEnter) {
      setFilterEnter(true);
    }
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleFilterEnter();
    }
  };
  return (
    <div className="relative mt-1 ">
      <div className=" ">
        <input
          type={type || "text"}
          placeholder={placeholder || "Search..."}
          name={name}
          value={value}
          className={`${
            size === "small" ? "w-32" : "px-2  p-1"
          } pl-8 border-2 leading-tight rounded-xl border-blue-600 shadow-sm sm:text-sm  focus:ring-blue-400 focus:border-blue-400`}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      <button
        onClick={() => handleFilterEnter()}
        className={`absolute border-none hover:!text-[#1f57ff] left-0 top-1/2 -translate-y-1/2  bg-transparent  cursor-pointer `}
      >
        <Iconify
          icon="teenyicons:search-outline"
          fontSize={`${size === "small" ? "1em" : "1.5em"}`}
        />
      </button>
    </div>
  );
};

export default TableSearchField;
