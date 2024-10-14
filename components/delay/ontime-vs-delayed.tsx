// src/components/OnTimeVsDelayedChart.tsx
'use client'

import { Pie } from "react-chartjs-2";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

// Register ArcElement, Tooltip, and Legend for Pie charts
ChartJS.register(ArcElement, Tooltip, Legend);

export function OnTimeVsDelayedChart({ onTime, delayed }: { onTime: number; delayed: number }) {
  const data = {
    labels: ["On-Time", "Delayed"],
    datasets: [
      {
        label: "Shipments",
        data: [onTime, delayed],
        backgroundColor: ["#4CAF50", "#FF5722"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>On-Time vs Delayed Deliveries</CardTitle>
      </CardHeader>
      <CardContent>
        <Pie data={data} />
      </CardContent>
    </Card>
  );
}
