'use client';

import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function RegionComparison() {
  // Mock data for Malaysian regions
  const allRegions = [
    'Johor',
    'Kedah',
    'Kelantan',
    'Melaka',
    'Perlis',
  ];
  
  // Mock data for two courier services (Courier A and Courier B)
  const courierAData = [2.47, 2.09, 3.41, 2.69, 4.06]; // Average delivery times for Courier A
  const courierBData = [3.20, 2.80, 4.00, 3.50, 4.50]; // Average delivery times for Courier B

  // State for filtering regions
  const [selectedRegions, setSelectedRegions] = useState(allRegions);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempSelectedRegions, setTempSelectedRegions] = useState(allRegions); // Temporary selection in modal

  // Handle the checkbox change (select at least two regions)
  const handleCheckboxChange = (region: string) => {
    const updatedSelection = tempSelectedRegions.includes(region)
      ? tempSelectedRegions.filter((r) => r !== region)
      : [...tempSelectedRegions, region];

    // Ensure at least two regions are selected
    if (updatedSelection.length < 2) {
      alert('Please select at least two regions for comparison.');
    } else {
      setTempSelectedRegions(updatedSelection);
    }
  };

  // Confirm the selected regions from the modal
  const handleConfirmSelection = () => {
    setSelectedRegions(tempSelectedRegions);
    setIsModalOpen(false);
  };

  // Cancel and close the modal without applying the changes
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Filter data based on selected regions
  const filteredCourierAData = selectedRegions.map(
    (region) => courierAData[allRegions.indexOf(region)]
  );

  const filteredCourierBData = selectedRegions.map(
    (region) => courierBData[allRegions.indexOf(region)]
  );

  const data = {
    labels: selectedRegions,
    datasets: [
      {
        label: 'Courier A - Average Delivery Time (Days)',
        data: filteredCourierAData,
        backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue for Courier A
      },
      {
        label: 'Courier B - Average Delivery Time (Days)',
        data: filteredCourierBData,
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Red for Courier B
      },
    ],
  };

  return (
    <div className="space-y-4">
      {/* Trigger Button for Modal */}

      {/* Region Selection Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Regions</DialogTitle>
          </DialogHeader>

          {/* Checkboxes for each region */}
          <div className="space-y-2 mt-4">
            {allRegions.map((region) => (
              <div key={region} className="flex items-center">
                <input
                  type="checkbox"
                  id={region}
                  checked={tempSelectedRegions.includes(region)}
                  onChange={() => handleCheckboxChange(region)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor={region}
                  className="ml-2 block text-sm text-gray-700"
                >
                  {region}
                </label>
              </div>
            ))}
          </div>

          <DialogFooter>
            <Button
              onClick={handleConfirmSelection}
              className="bg-green-500 text-white"
            >
              Confirm
            </Button>
            <Button onClick={handleCancel} className="bg-gray-500 text-white">
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Bar Chart */}
      <Card>
        <CardHeader>
          <div className="flex">
            <CardTitle className='flex-1'>Courier Performance by Region</CardTitle>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-black text-white"
            >
              Select Regions
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Bar data={data} />
        </CardContent>
      </Card>
    </div>
  );
}
