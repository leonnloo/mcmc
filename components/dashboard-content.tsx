import React from 'react';
// import { ShipmentStatistics } from './dashboard/shipment-stats';
import { Predict } from './predict';

// src/components/DashboardContent.tsx
const DashboardContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {/* Card 1 */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 w-full">
        <Predict />
      </div>
      {/* <ShipmentStatistics
        delayedPercentage={40}
        documentCount={200000}
        parcelCount={100500}
        totalShipments={300500}
      /> */}
    </div>
  );
};

export default DashboardContent;
