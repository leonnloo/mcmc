// Register the necessary elements for Chart.js
import { AverageDeliveryTime } from '@/components/delay/average-time';
import { DelaysByCourier } from '@/components/delay/delay-by-courier';
import { DelaysByRegion } from '@/components/delay/delay-by-region';
import { OnTimeVsDelayedChart } from '@/components/delay/ontime-vs-delayed';
import Header from '@/components/header';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement, // Required for Pie Charts
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement, // Register ArcElement
  Title,
  Tooltip,
  Legend
);

export default function ShipmentDelay() {
  const averageTime = 1.94;
  const onTime = 482750;
  const delayed = 267064;
  const regions = ['JOHOR', 'KEDAH', 'KELANTAN', 'MELAKA', 'NEGERI SEMBILAN'];
  const delays = [1.87, 1.67, 1.65, 1.8, 1.74];

  return (
    <div className="p-6 space-y-6 w-full">
      <Header title={'Shipment Delays'} />

      {/* Average Delivery Time */}
      <AverageDeliveryTime averageTime={averageTime} />
      <div className="flex w-full gap-2">
        {/* On-Time vs Delayed Deliveries */}
        <div className="w-full">
          <OnTimeVsDelayedChart onTime={onTime} delayed={delayed} />
        </div>

        {/* Delays by Region */}
        <div className="w-full">
          <DelaysByRegion regions={regions} delays={delays} />
        </div>
      </div>
      <div className="w-full">

        <DelaysByCourier />
      </div>
    </div>
  );
}
