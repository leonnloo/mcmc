// src/components/DeliverySuccessRates.tsx
'use client';

import { Bar } from 'react-chartjs-2';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function DeliverySuccessRates() {
  // Mock data for delivery success rates in various regions
  const regions = ['Johor', 'Kedah', 'Kelantan', 'Melaka', 'Selangor'];
  const successRates = [98, 95, 97, 96, 99]; // Success rates as percentages

  const data = {
    labels: regions,
    datasets: [
      {
        label: 'Delivery Success Rate (%)',
        data: successRates,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Delivery Success Rates by Region</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar data={data} options={options} />
      </CardContent>
    </Card>
  );
}
