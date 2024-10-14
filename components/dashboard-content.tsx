import React from 'react';
import { ShipmentStatistics } from './dashboard/shipment-stats';
import { RegionComparison } from './geo/region-compare';

// src/components/DashboardContent.tsx
const DashboardContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1 */}
      <ShipmentStatistics
        delayedPercentage={40}
        documentCount={200000}
        parcelCount={100500}
        totalShipments={300500}
      />
      <RegionComparison />
    </div>
  );
};

export default DashboardContent;
