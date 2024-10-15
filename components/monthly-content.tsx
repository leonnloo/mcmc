import React from 'react';
import { MonthlyPredict } from './monthly-prediction';

// src/components/DashboardContent.tsx
const monthlyContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {/* Card 1 */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 w-full">
        <MonthlyPredict />
      </div>
    </div>
  );
};

export default monthlyContent;
