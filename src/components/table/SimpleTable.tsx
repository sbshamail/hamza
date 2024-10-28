'use client';
import React, { FC, useState } from 'react';
import BasicTable from '@/components/hamailui/table/basic';
import { ColumnType } from '../hamailui/table/interface';
import { ClassNameTypes } from '@/utils/interfaces/commonTypes';

interface PropsType {
  data: any[];
  columns: ColumnType[];
  tablebgClass?: ClassNameTypes;
  tableCustomClass?: ClassNameTypes;
}
const SimpleTable: FC<PropsType> = ({
  data,
  columns,
  tableCustomClass,
  tablebgClass,
}) => {
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
        isLoading={tableData && tableData.length > 0 ? false : true}
        columns={columns}
        rowId="name"
        updateCell={updateCell}
        tablebgClass={tablebgClass}
        tableCustomClass={tableCustomClass}
      />
    </div>
  );
};

export default SimpleTable;
