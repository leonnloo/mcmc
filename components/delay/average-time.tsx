// src/components/AverageDeliveryTime.tsx
'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function AverageDeliveryTime({ averageTime }: { averageTime: number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Average Delivery Time</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">{averageTime.toFixed(2)} days</p>
      </CardContent>
    </Card>
  );
}
