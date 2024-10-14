// src/components/DemandGrowthTrends.tsx
'use client';

import { Line } from 'react-chartjs-2';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  // Register the required components
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement, // Register PointElement for line charts
    LineElement,
    Title,
    Tooltip,
    Legend
  );
export function DemandGrowthTrends() {
  // Mock data for demand growth over months
  const labels = ['January', 'February', 'March', 'April', 'May'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Demand Growth',
        data: [100, 200, 300, 400, 500], // Mock growth data
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Demand Growth Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <Line data={data} options={options} />
      </CardContent>
    </Card>
  );
}
