'use client';

import React, { FC, useEffect, useState } from 'react';
import { usePipeTableColumns } from '../table/tableColumns/pipeTableColumns';
import SimpleTable from '../table/SimpleTable';
import TextField from '../hamailui/dataEntry/TextField';
import { ClassNameTypes } from '@/utils/interfaces/commonTypes';

interface PropsType {
  tableData: any[];
  title: string;
  borderColor: string;
  bgColor: string;
}
const PricePercentageScreen: FC<PropsType> = ({
  tableData,
  title,
  borderColor = 'border-green-900',
  bgColor = 'border-green-900',
}) => {
  const [percentage, setPercentage] = useState<number>(10);
  const [data, setData] = useState(tableData);
  const columns: any = usePipeTableColumns(percentage, setPercentage);

  const showTable = (item: {
    title: string;
    data: [];
    tablebgClass?: React.ComponentProps<'div'>['className'];
  }) => {
    item.data.map((item: any) => {
      return { ...item, percentage: percentage };
    });
    return (
      <div key={item.title} className={`border-4 mb-1  ${borderColor}`}>
        <div className={`w-full ${bgColor} text-white text-sm px-1 uppercase`}>
          {item.title}
        </div>
        <SimpleTable
          data={item.data}
          columns={columns}
          tablebgClass={item.tablebgClass}
        />
      </div>
    );
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase(); // Convert to lowercase
    const updateData = tableData.filter(
      (item) => item.title.toLowerCase().includes(searchValue) // Use includes for partial matches
    );
    setData(updateData);
  };
  return (
    <div>
      <div className="w-full flex items-center">
        <TextField
          placeholder="search"
          size={'12'}
          className="rounded p-1 px-2 text-black text-xs"
          onChange={handleSearch}
        />
        <TextField
          placeholder="%"
          type="number"
          min={0}
          max={100}
          value={percentage}
          className="rounded p-1 px-2 text-black ms-4 text-xs"
          onChange={(e) => setPercentage(Number(e.target.value))}
        />
        <h1 className="w-full text-white text-2xl text-center font-bold ">
          {title}
        </h1>
      </div>
      {data.length > 0 ? (
        data.map((item: any) => showTable(item))
      ) : (
        <h2>Loading ...</h2>
      )}
    </div>
  );
};

export default PricePercentageScreen;
