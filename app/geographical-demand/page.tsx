import { DeliverySuccessRates } from '@/components/geo/delivery-success-rate';
import { DemandGrowthTrends } from '@/components/geo/demand-growth-trends';
import { HighDemandRegions } from '@/components/geo/high-demand-region';
import { ProductCategoryDemand } from '@/components/geo/product-demand';
import Header from '@/components/header';
import React from 'react';

const GeoPage = () => {
  return (
    <div className='p-6 space-y-6'>
      <Header title="Geographical Demand" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <HighDemandRegions />
        <DemandGrowthTrends />
        <ProductCategoryDemand />
        <DeliverySuccessRates />
      </div>
    </div>
  );
};

export default GeoPage;
