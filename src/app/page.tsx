import React from 'react';

import { prpcData } from '@/utils/prpcdata';
import Navbar from '@/components/navbar';
import PricePercentageScreen from '@/components/screen/PricePercentageScreen';

const page = () => {
  return (
    <div>
      <Navbar />
      <PricePercentageScreen
        tableData={prpcData}
        title="PRPC"
        borderColor="border-green-900"
        bgColor="bg-green-900"
      />
    </div>
  );
};

export default page;
