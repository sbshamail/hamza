'use client';
import React, { FC, useState } from 'react';
import BasicTable from '@/components/hamailui/table/basic';
import { ColumnType } from '../hamailui/table/interface';

interface PropsType {
  data: any[];
  columns: ColumnType[];
}
const SimpleTable: FC<PropsType> = ({ data, columns }) => {
  const [tableData, setTableData] = useState(data);
  const updateCell = (item: any) => {
    const updatedData = data.map((dataItem) =>
      dataItem.name === item.name ? item : dataItem
    );
    setTableData(updatedData);
  };
  return (
    <div>
      <BasicTable
        data={tableData}
        columns={columns}
        rowId="name"
        updateCell={updateCell}
      />
    </div>
  );
};

export default SimpleTable;
