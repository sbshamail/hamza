'use client';
import { ChangeEvent, useMemo, useState } from 'react';
import {
  ColumnType,
  CustomRenderType,
} from '@/components/hamailui/table/interface';
import TextField from '@/components/hamailui/dataEntry/TextField';

const Render = ({ percentage, setPercentage }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPercentage(parseInt(`${e.target.value}`));
  };
  return (
    <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-center items-center">
        <span className="font-bold">
          <TextField
            type="number"
            onChange={handleChange}
            value={percentage}
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

const percentageRender = (
  {}: CustomRenderType,
  percentage: any,
  setPercentage: any
) => <Render setPercentage={setPercentage} percentage={percentage} />;
const discountValue = ({ cell, row }: CustomRenderType, percentage: number) => {
  const originalPrice = Number(cell);
  const discountPercentage = Number(percentage);

  const discountAmount = (originalPrice * discountPercentage) / 100;
  const finalPrice = (originalPrice - discountAmount).toFixed(2);
  return <span className="">{finalPrice}</span>;
};
export const usePipeTableColumns = (
  percentage: number,
  setPercentage: React.Dispatch<React.SetStateAction<number>>
): ColumnType[] =>
  useMemo(
    () => [
      {
        accessor: 'size',
        title: 'Size',
        className: 'w-1/4 uppercase ',
      },

      {
        accessor: 'price',
        title: 'Price',
        type: 'currency',
        currency: 'pkr',
        className: 'w-1/4',
      },
      {
        accessor: 'percentage',
        title: 'Percentage',
        render: (props: CustomRenderType) =>
          percentageRender(props, percentage, setPercentage),
        className: 'w-1/4',
      },
      {
        accessor: 'price',
        title: 'Discount',
        type: 'currency',
        currency: 'pkr',
        render: (props: CustomRenderType) => discountValue(props, percentage),
        className: 'w-1/4',
      },
    ],
    [percentage, setPercentage]
  );
