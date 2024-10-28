import Navbar from '@/components/navbar';
import PricePercentageScreen from '@/components/screen/PricePercentageScreen';
import { upvcData } from '@/utils/upvcData';
import React from 'react';
const page = () => {
  return (
    <div>
      <Navbar />
      <PricePercentageScreen
        tableData={upvcData}
        title="UPVC"
        borderColor="border-blue-900"
        bgColor="bg-blue-900"
      />
    </div>
  );
};

export default page;
