'use client';
import React, { useState } from 'react';

import SimpleTable from '@/components/table/SimpleTable';

import { usePipeTableColumns } from '@/components/table/tableColumns/pipeTableColumns';
import { upvcData } from '@/utils/upvcData';
import TextField from '@/components/hamailui/dataEntry/TextField';
import Navbar from '@/components/navbar';

const Upvc = () => {
  const [percentage, setPercentage] = useState<number>(10);
  const [data, setData] = useState(upvcData);
  const columns: any = usePipeTableColumns(percentage, setPercentage);

  const showTable = (item: { title: string; data: [] }) => {
    item.data.map((item: any) => {
      return { ...item, percentage: percentage };
    });
    return (
      <div className="border-4 mb-1 border-blue-900 ">
        <div className="uppercase w-full bg-blue-900 text-white p-1 ">
          {item.title}
        </div>
        <SimpleTable data={item.data} columns={columns} />
      </div>
    );
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase(); // Convert to lowercase
    const updateData = upvcData.filter(
      (item) => item.title.toLowerCase().includes(searchValue) // Use includes for partial matches
    );
    setData(updateData);
  };
  return (
    <div>
      <Navbar />
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
        <h1 className="w-full text-white text-2xl text-center font-bold">
          UPVC
        </h1>
      </div>
      {data.map((item: any) => showTable(item))}
    </div>
  );
};

export default Upvc;
