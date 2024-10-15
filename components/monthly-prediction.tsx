'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

export const MonthlyPredict = () => {
  const [prediction, setPrediction] = useState(null);
  const [destState, setDestState] = useState('');
  const [month, setMonth] = useState(1);
  const [quarter, setQuarter] = useState(1);
  const [prevMonthDemand, setPrevMonthDemand] = useState(0);
  const [rolling3Months, setRolling3Months] = useState(0);

  const malaysiaStates = [
    'JOHOR', 'KEDAH', 'KELANTAN', 'WILAYAH PERSEKUTUAN KUALA LUMPUR', 'WILAYAH PERSEKUTUAN Labuan', 
    'MELAKA', 'NEGERI SEMBILAN', 'PAHANG', 'PERAK', 'PERLIS', 
    'PULAU PINANG', 'Putrajaya', 'SABAH', 'SARAWAK', 'SELANGOR', 'TERENGGANU', 'OVERSEASE'
  ];

  const getPrediction = async () => {
    const response = await fetch('http://127.0.0.1:8000/predict_monthly', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        DEST_SUCCESS_STATE: destState,
        month: month,
        quarter: quarter,
        prev_month_demand: prevMonthDemand,
        rolling_3_months: rolling3Months,
      }),
    });

    const data = await response.json();
    setPrediction(data.monthly_predictions);
  };

  return (
    <div className="w-full">
      <Card className="w-full p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Monthly Demand Prediction for 2025
          </CardTitle>
          <div className="mt-4 space-y-4">
            {/* Destination State Dropdown */}
            <div className="flex flex-col">
              <label htmlFor="destState" className="text-gray-600">
                Destination State
              </label>
              <select
                value={destState}
                onChange={(e) => setDestState(e.target.value)}
                className="mt-1 p-2 border rounded"
                id="destState"
              >
                <option value="">Select State</option>
                {malaysiaStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* Month */}
            <div className="flex flex-col">
              <label htmlFor="month" className="text-gray-600">
                Month
              </label>
              <Input
                type="number"
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                min={1}
                max={12}
                className="mt-1"
                id="month"
              />
            </div>

            {/* Quarter */}
            <div className="flex flex-col">
              <label htmlFor="quarter" className="text-gray-600">
                Quarter
              </label>
              <Input
                type="number"
                value={quarter}
                onChange={(e) => setQuarter(Number(e.target.value))}
                min={1}
                max={4}
                className="mt-1"
                id="quarter"
              />
            </div>

            {/* Previous Month Demand */}
            <div className="flex flex-col">
              <label htmlFor="prevMonthDemand" className="text-gray-600">
                Previous Month Demand
              </label>
              <Input
                type="number"
                value={prevMonthDemand}
                onChange={(e) => setPrevMonthDemand(Number(e.target.value))}
                className="mt-1"
                id="prevMonthDemand"
              />
            </div>

            {/* Rolling 3 Months Demand */}
            <div className="flex flex-col">
              <label htmlFor="rolling3Months" className="text-gray-600">
                Rolling 3-Month Demand
              </label>
              <Input
                type="number"
                value={rolling3Months}
                onChange={(e) => setRolling3Months(Number(e.target.value))}
                className="mt-1"
                id="rolling3Months"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Separator />
          <Button
            onClick={getPrediction}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            Get Prediction
          </Button>
          <Separator />
          {prediction !== null && (
            <Card className="p-4 bg-blue-50">
              <CardTitle className="text-center text-xl text-gray-700">
                Prediction Result
              </CardTitle>
              <div className="text-center font-bold bg-black text-white mt-2">
                {Math.ceil(prediction)} Items
              </div>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
