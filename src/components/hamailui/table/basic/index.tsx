import React, { FC } from "react";
import { renderCell } from "../functions/RenderCell";
import { ColumnType } from "../interface";
import CellEdit from "../common/CellEdit";

interface PropsType {
  columns: ColumnType[];
  isLoading?: boolean;
  data: Record<string, any>[];
  rowId?: string;
  setSelectedRows?: () => void;
  updateCell?: (item: Record<string, any>) => void;
}
const BasicTable: FC<PropsType> = ({
  columns,
  isLoading = false,
  data,
  rowId = "id",
  setSelectedRows,
  updateCell,
}) => {
  return (
    <div>
      <main className="w-full flex flex-col overflow-hidden">
        {/* Table Content */}
        <div className={``}>
          {/* <!-- Table --> */}
          <div>
            <table className="table-auto w-full border-collapse border-none ">
              {/* Table header */}
              <thead className="text-[13px]">
                <tr className="z-10 sticky top-0 ">
                  {columns &&
                    columns.length &&
                    columns.map((item, index) => (
                      <th
                        key={index}
                        className="relative first:pl-3 last:pr-3 whitespace-nowrap border"
                      >
                        <span className="font-bold">{item?.title}</span>
                      </th>
                    ))}
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm font-medium">
                {!isLoading ? (
                  data?.map((item, index) => (
                    <tr key={index} className="w-full">
                      {columns &&
                        columns.length &&
                        columns.map((column: any, idx) => (
                          <td
                            key={idx}
                            className="relative p-0 m-0 overflow-hidden px-5 whitespace-nowrap border text-center"
                          >
                            <span className="flex justify-center">
                              {column.edit ? (
                                <CellEdit
                                  updateCell={updateCell}
                                  column={column}
                                  data={data}
                                  index={idx}
                                  item={item}
                                />
                              ) : (
                                renderCell(item, column, index, data)
                              )}
                            </span>
                          </td>
                        ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={columns.length} className="text-center">
                      <h2>Loading ...</h2>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BasicTable;
