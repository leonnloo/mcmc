'use client';
import { useState } from 'react';
import Link from 'next/link'; // Import Next.js Link component
import { FaChartBar, FaMapMarkerAlt } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

export function Sidebar() {
  const [selected, setSelected] = useState('Dashboard');

  return (
    <div className="w-64 bg-gray-800 min-h-screen text-white">
      <div className="flex-center py-10 h-16 bg-gray-900">
        <h1 className="text-2xl font-bold">FOURSIGHT</h1>
      </div>
      <nav className="mt-10 gap-y-4 flex flex-col">
        <Link
          href="/"
          className={`flex items-center py-2 px-6 hover:bg-gray-700 hover:bg-opacity-25 ${selected === 'Dashboard' ? 'bg-gray-700 bg-opacity-25' : ''}`}
          onClick={() => setSelected('Dashboard')}
        >
          <MdDashboard className="mr-3" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/shipment-delays"
          className={`flex items-center py-2 px-6 hover:bg-gray-700 hover:bg-opacity-25 ${selected === 'Shipment Delays' ? 'bg-gray-700 bg-opacity-25' : ''}`}
          onClick={() => setSelected('Shipment Delays')}
        >
            <FaChartBar className="mr-3" />
            <span>Shipment Delays</span>
        </Link>
        <Link
          href="/geographical-demand"
          className={`flex items-center py-2 px-6 hover:bg-gray-700 hover:bg-opacity-25 ${selected === 'Geographical Demand' ? 'bg-gray-700 bg-opacity-25' : ''}`}
          onClick={() => setSelected('Geographical Demand')}
        >
            <FaMapMarkerAlt className="mr-3" />
            <span>Geographical Demand</span>
        </Link>
      </nav>
    </div>
  );
}
