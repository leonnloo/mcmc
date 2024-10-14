'use client';
import { Bar } from 'react-chartjs-2';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const regions = ['Region A', 'Region B', 'Region C'];
const delays = [120, 90, 75]; // Number of delays in each region

export function DelaysByRegionChart() {
  const data = {
    labels: regions,
    datasets: [
      {
        label: 'Number of Delays',
        data: delays,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Delayed Regions</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar data={data} />
      </CardContent>
    </Card>
  );
}
