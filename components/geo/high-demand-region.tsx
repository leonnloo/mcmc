// src/components/HighDemandRegions.tsx
'use client';

import { Bar } from 'react-chartjs-2';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  // Register the required components
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
export function HighDemandRegions() {
  // Mock data for demand in various regions
  const regions = ['Johor', 'Kedah', 'Kelantan', 'Melaka', 'Selangor'];
  const demand = [450, 300, 200, 350, 500]; // Mock demand data

  const data = {
    labels: regions,
    datasets: [
      {
        label: 'Demand (Number of Orders)',
        data: demand,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
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
        <CardTitle>High-Demand Regions</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar data={data} options={options} />
      </CardContent>
    </Card>
  );
}
