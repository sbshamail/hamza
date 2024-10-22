"use client";
import React, { useState } from "react";

import SimpleTable from "@/components/table/SimpleTable";

import { usePipeTableColumns } from "@/components/table/tableColumns/pipeTableColumns";
import { pipeData, pipe_pn16_data } from "@/utils/pipdata";

const Home = () => {
  const [percentage, setPercentage] = useState<number>(10);

  const columns: any = usePipeTableColumns(percentage, setPercentage);

  const showTable = (item: { title: string; data: [] }) => {
    item.data.map((item: any) => {
      return { ...item, percentage: percentage };
    });
    return (
      <div className="border-4 mb-1 border-green-900">
        <div className="w-full bg-green-900 text-white p-1 ">{item.title}</div>
        <SimpleTable data={item.data} columns={columns} />
      </div>
    );
  };
  return pipeData.map((item: any) => showTable(item));
};

export default Home;
