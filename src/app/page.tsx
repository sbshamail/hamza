import React from "react";

import SimpleTable from "@/components/table/SimpleTable";
import {
  ColumnType,
  CustomRenderType,
} from "@/components/hamailui/table/interface";
import { usePipeTableColumns } from "@/components/table/tableColumns/pipeTableColumns";
const data = [
  { name: "test", price: 200, percentage: 10 },
  { name: "test2", price: 500, percentage: 10 },
];

const columns = usePipeTableColumns;
const page = () => {
  return (
    <div>
      <SimpleTable data={data} columns={columns} />
    </div>
  );
};

export default page;
