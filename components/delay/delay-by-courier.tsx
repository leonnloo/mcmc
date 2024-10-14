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

// Register the required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function DelaysByCourier() {
  // Mock data for average delays by courier (in days)
  const couriers = ['Courier A', 'Courier B', 'Courier C'];
  const avgDelays = [2.5, 3.2, 1.8]; // Delays in days for each courier

  // Data for the bar chart
  const data = {
    labels: couriers,
    datasets: [
      {
        label: 'Average Delay (Days)',
        data: avgDelays,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)', // Color for Courier A
          'rgba(54, 162, 235, 0.5)', // Color for Courier B
          'rgba(75, 192, 192, 0.5)', // Color for Courier C
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',   // Border color for Courier A
          'rgba(54, 162, 235, 1)',   // Border color for Courier B
          'rgba(75, 192, 192, 1)',   // Border color for Courier C
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for customizing the chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Average Delay (Days)',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Delays by Courier</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar data={data} options={options} />
      </CardContent>
    </Card>
  );
}
