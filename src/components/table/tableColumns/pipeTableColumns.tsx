"use client";
import { ChangeEvent, useState } from "react";
import {
  ColumnType,
  CustomRenderType,
} from "@/components/hamailui/table/interface";
import TextField from "@/components/hamailui/dataEntry/TextField";

const Render = () => {
  const [value, setValue] = useState(10);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(`${e.target.value}`));
  };
  console.log(value);
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-center items-center">
        <span className="font-bold">
          <TextField
            type="number"
            onChange={handleChange}
            value={value}
            min={0}
            max={100}
            className="p-0 underline bg-transparent w-12"
            placeholder="%"
          />
        </span>
      </div>
    </div>
  );
};

const percentageRender = ({}: CustomRenderType) => <Render />;
const priceValue = ({ cell, row }: CustomRenderType) => {
  console.log(cell, row);
  const originalPrice = Number(cell);
  const discountPercentage = Number(row.percentage);

  const discountAmount = (originalPrice * discountPercentage) / 100;
  const finalPrice = originalPrice - discountAmount;
  return finalPrice;
};

export const usePipeTableColumns: ColumnType[] = [
  { accessor: "name", title: "Name", edit: true },
  { title: "Percentage", render: percentageRender },
  {
    accessor: "price",
    title: "Price",
    type: "currency",
    currency: "pkr",
    render: priceValue,
  },
];
