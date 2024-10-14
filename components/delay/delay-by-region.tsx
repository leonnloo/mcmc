// src/components/DelaysByRegion.tsx
'use client'

import { Bar } from "react-chartjs-2";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components for the Bar chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function DelaysByRegion({ regions, delays }: { regions: string[]; delays: number[] }) {
  const data = {
    labels: regions,
    datasets: [
      {
        label: "Average Delay (Days)",
        data: delays,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Delays by Region</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar data={data} />
      </CardContent>
    </Card>
  );
}
