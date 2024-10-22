"use client";
import { ChangeEvent, useState } from "react";
import {
  ColumnType,
  CustomRenderType,
} from "@/components/hamailui/table/interface";
import TextField from "@/components/hamailui/dataEntry/TextField";

const Render = () => {
  const [value, setValue] = useState("10 %");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(`${e.target.value} %`);
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <span className="font-bold">
          <TextField
            onChange={handleChange}
            value={value}
            min={0}
            max={100}
            className="p-0 bg-transparent w-auto"
            placeholder="percentage"
          />
        </span>
      </div>
    </>
  );
};

const percentageRender = ({}: CustomRenderType) => <Render />;

export const usePipeTableColumns: ColumnType[] = [
  { accessor: "name", title: "Name" },
  { title: "Percentage", render: percentageRender },
  { accessor: "price", title: "Price", type: "currency", edit: true },
];
