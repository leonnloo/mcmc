// src/components/ShipmentStatistics.tsx
'use client'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function ShipmentStatistics({ totalShipments, delayedPercentage, parcelCount, documentCount }: { totalShipments: number, delayedPercentage: number, parcelCount: number, documentCount: number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shipment Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Total Shipments: {totalShipments}</p>
        <p>Delayed Shipments: {delayedPercentage}%</p>
        <p>Parcels: {parcelCount}</p>
        <p>Documents: {documentCount}</p>
      </CardContent>
    </Card>
  );
}
