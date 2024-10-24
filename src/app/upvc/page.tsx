import Navbar from '@/components/navbar';
import PricePercentageScreen from '@/components/screen/PricePercentageScreen';
import { upvcData } from '@/utils/upvcData';
import React from 'react';
const page = () => {
  return (
    <div>
      <Navbar />
      <PricePercentageScreen tableData={upvcData} title="UPVC" color="blue" />
    </div>
  );
};

export default page;
