"use client";
import React, { useState } from "react";

import SimpleTable from "@/components/table/SimpleTable";

import { usePipeTableColumns } from "@/components/table/tableColumns/pipeTableColumns";
import { pipeData } from "@/utils/pipdata";
import TextField from "@/components/hamailui/dataEntry/TextField";

const Home = () => {
  const [percentage, setPercentage] = useState<number>(10);
  const [data, setData] = useState(pipeData);
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
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase(); // Convert to lowercase
    const updateData = pipeData.filter(
      (item) => item.title.toLowerCase().includes(searchValue) // Use includes for partial matches
    );
    setData(updateData);
  };
  return (
    <div>
      <div className="flex">
        <TextField
          placeholder="search"
          className="rounded px-2 text-black"
          onChange={handleSearch}
        />
        <TextField
          placeholder="%"
          type="number"
          min={0}
          max={100}
          value={percentage}
          className="rounded px-2 text-black ms-4"
          onChange={(e) => setPercentage(Number(e.target.value))}
        />
      </div>
      {data.map((item: any) => showTable(item))}
    </div>
  );
};

export default Home;
