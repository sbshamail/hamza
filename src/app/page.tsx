"use client"
import React, { useState } from "react";

import SimpleTable from "@/components/table/SimpleTable";

import { usePipeTableColumns } from "@/components/table/tableColumns/pipeTableColumns";
const data = [
  {
      size: "25MM,4MTR",
      price: 728,
      percentage: 0,
      discount: 728
  },
  {
      size: "32MM,4MTR",
      price: 1160,
      percentage: 0.00,
      discount: 1160
  },
  {
      size: "40MM,4MTR",
      price: 2047,
      percentage: 0.00,
      discount: 2047
  },
  {
      size: "50MM,4MTR",
      price: 3706,
      percentage: 0.00,
      discount: 3706
  },
  {
      size: "63MM,4MTR",
      price: 5337,
      percentage: 0.00,
      discount: 5337
  },
  {
      size: "75MM,4MTR",
      price: 8098,
      percentage: 0.00,
      discount: 8098
  },
  {
      size: "90MM,4MTR",
      price: 12535,
      percentage: 0.00,
      discount: 12535
  },
  {
      size: "25MM,3MTR",
      price: 596,
      percentage: 0.00,
      discount: 596
  },
  {
      size: "32MM,3MTR",
      price: 952,
      percentage: 0.00,
      discount: 952
  }
];

const Home = () => {
  const [percentage,setPercentage]=useState<number>(10)

  data.map(item=>{return ({...item,percentage:percentage})})
 
  const columns:any = usePipeTableColumns(percentage,setPercentage);
  return (
    <div>
      <div className="w-full bg-blue-700 text-white p-1">PIPE PN-16</div>
      <SimpleTable data={data} columns={columns} />
    </div>
  );
};

export default Home;



