"use client";
import React, { ChangeEvent, FC, useState } from "react";
import TextField from "../../dataEntry/TextField";
import Iconify from "../../icon/Iconify";
import { renderCell } from "../functions/RenderCell";
import { ColumnType } from "../interface";

interface PropsType {
  column: ColumnType;
  index: number;
  item: Record<string, any>;
  data: Record<string, any>[];
  updateCell?: (item: Record<string, any>) => void;
}
const CellEdit: FC<PropsType> = ({
  column,
  index,
  item,
  data,
  updateCell = () => {},
}) => {
  const [cellEditKey, setCellEditKey] = useState<string>();
  const [cellEditValue, setCellEditValue] = useState<number | string>();
  const [cellIndex, setCellIndex] = useState<any>(null);
  const handleEditCell = (
    item: Record<string, any>,
    column: ColumnType,
    index: number
  ) => {
    setCellEditKey(column.accessor);
    setCellEditValue(item[column.accessor as string]);
    setCellIndex(index);
  };
  const handleChangeCell = (event: ChangeEvent<HTMLInputElement>) => {
    setCellEditValue(event.target.value);
  };
  const handleSaveCell = () => {
    // console.log({ ...item, [cellEditKey as string]: cellEditValue });
    updateCell({
      ...item,
      [cellEditKey as string]: cellEditValue,
    });
    setCellIndex(null);
  };

  const CellEditField = () => (
    <>
      <div>
        <TextField
          type="number"
          min={1}
          max={100000}
          value={cellEditValue as any}
          className="absolute left-1/2 underline -translate-y-1/2 -translate-x-1/2   bg-transparent type-number-none p-0"
          onChange={handleChangeCell}
        />
      </div>
      <span className=" absolute right-0 mx-4 top-1/2 -translate-y-1/2">
        <div className="flex space-x-2">
          <Iconify
            className="text-green-500"
            icon="mdi:tick"
            onClick={handleSaveCell}
          />
          <Iconify
            className="text-orange-500"
            icon="bx:x"
            onClick={() => setCellIndex(null)}
          />
        </div>
      </span>
    </>
  );
  return column.accessor === cellEditKey && cellIndex === index ? (
    CellEditField()
  ) : (
    <>
      <span>{renderCell(item, column, index, data)}</span>
      <span className=" absolute right-0 mx-4 top-1/2 -translate-y-1/2">
        <Iconify
          icon="material-symbols:edit"
          onClick={() => handleEditCell(item, column, index)}
        />
      </span>
    </>
  );
};

export default CellEdit;
