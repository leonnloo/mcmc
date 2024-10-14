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

export function ProductCategoryDemand() {
  // Mock data for item demand in different regions
  const regions = ['Johor', 'Kedah', 'Kelantan', 'Melaka', 'Selangor'];

  // Demand for each product category per region
  const clothing = [50, 40, 60, 30, 80];    // Clothing demand by region
  const electronics = [70, 50, 90, 40, 100]; // Electronics demand by region
  const furniture = [30, 60, 50, 50, 70];   // Furniture demand by region
  const books = [20, 30, 40, 20, 50];       // Books demand by region
  const toys = [60, 20, 50, 30, 90];        // Toys demand by region

  const data = {
    labels: regions,
    datasets: [
      {
        label: 'Clothing',
        data: clothing,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Electronics',
        data: electronics,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Furniture',
        data: furniture,
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
      },
      {
        label: 'Books',
        data: books,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Toys',
        data: toys,
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        stacked: false,  // Group items on the x-axis (not stacked)
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,  // Explicitly typing 'position' as 'top'
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Item Demand by Region</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar data={data} options={options} />
      </CardContent>
    </Card>
  );
}
