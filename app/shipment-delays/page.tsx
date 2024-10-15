'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Average_Delivery_Days_by_Destination_Region_Yeti from '@/public/Yeti/Average Delivery Days by Destination Region.png';
import Average_Delivery_Days_by_Type_of_Item_Yeti from '@/public/Yeti/Average Delivery Days by Type of Item.png';
import Average_Number_of_Deliveries_by_Region_Yeti from '@/public/Yeti/Average Number of Deliveries by Region.png';
import Number_of_Delays_by_Year_Yeti from '@/public/Yeti/Number of Delays by Year (2022-2024), Grouped by Month.png';
import Number_of_Delivery_by_Year_Yeti from '@/public/Yeti/Number of Deliveries Made by Year (2022-2024), Grouped by Month.png';
import Success_Rate_Yeti from '@/public/Yeti/Success Rate of Deliveries by Year (Based on First Attempt and No Delay) (2022-2024).png';

import Average_Delivery_Days_by_Destination_Region_CC from '@/public/CC/Average Delivery Days by Destination Region.png';
import Average_Delivery_Days_by_Type_of_Item_CC from '@/public/CC/Average Delivery Days by Type of Item.png';
import Average_Number_of_Deliveries_by_Region_CC from '@/public/CC/Average Number of Deliveries by Region.png';
import Number_of_Delays_by_Year_CC from '@/public/CC/Number of Delays by Year (2022-2024), Grouped by Month.png';
import Number_of_Delivery_by_Year_CC from '@/public/CC/Number of Deliveries Made by Year (2022-2024), Grouped by Month.png';
import Success_Rate_CC from '@/public/CC/Success Rate of Deliveries by Year (Based on First Attempt and No Delay) (2022-2024).png';

import Average_Delivery_Days_by_Destination_Region_GS from '@/public/GS/Average Delivery Days by Destination Region.png';
import Average_Delivery_Days_by_Type_of_Item_GS from '@/public/GS/Average Delivery Days by Type of Item.png';
import Average_Number_of_Deliveries_by_Region_GS from '@/public/GS/Average Number of Deliveries by Region.png';
import Number_of_Delays_by_Year_GS from '@/public/GS/Number of Delays by Year (2022-2024), Grouped by Month.png';
import Number_of_Delivery_by_Year_GS from '@/public/GS/Number of Deliveries Made by Year (2022-2024), Grouped by Month.png';
import Success_Rate_GS from '@/public/GS/Success Rate of Deliveries by Year (Based on First Attempt and No Delay) (2022-2024).png';

import Average_Delivery_Days_by_Destination_Region_PP from '@/public/PP/Average Delivery Days by Destination Region.png';
import Average_Delivery_Days_by_Type_of_Item_PP from '@/public/PP/Average Delivery Days by Type of Item.png';
import Average_Number_of_Deliveries_by_Region_PP from '@/public/PP/Average Number of Deliveries by Region.png';
import Number_of_Delays_by_Year_PP from '@/public/PP/Number of Delays by Year (2022-2024), Grouped by Month.png';
import Number_of_Delivery_by_Year_PP from '@/public/PP/Number of Deliveries Made by Year (2022-2024), Grouped by Month.png';
import Success_Rate_PP from '@/public/PP/Success Rate of Deliveries by Year (Based on First Attempt and No Delay) (2022-2024).png';
import Image, { StaticImageData } from 'next/image';
export default function ShipmentDelay() {
  // List of companies
  const companies = [
    'Yei Express',
    'Courier Crew',
    'Global Swift',
    'Power Parcel',
  ];

  // State for the selected company
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);

  // Function to change the selected company
  const handleCompanyChange = (company: string) => {
    setSelectedCompany(company);
  };

  // Content for each company (replace with your actual dynamic content)
  // const companyContent: { [key: string]: JSX.Element } = {
  //   'Yei Express': <div>Content for Yei Express</div>,
  //   'Courier Crew': <div>Content for Courier Crew</div>,
  //   'Global Swift': <div>Content for Global Swift</div>,
  //   'Power Parcel': <div>Content for Power Parcel</div>,
  // };

  return (
    <div className="p-6 space-y-6 w-full">
      <Header title={'Shipment Delays'} />

      {/* Top sidebar for company selection */}
      <div className="flex justify-around items-center space-x-4 p-4 rounded-md">
        {companies.map((company) => (
          <button
            key={company}
            onClick={() => handleCompanyChange(company)}
            className={`p-2 rounded-md text-sm ${
              selectedCompany === company
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            {company}
          </button>
        ))}
      </div>

      {/* Dynamic Content based on selected company */}
      {/* <div className="mt-4">{companyContent[selectedCompany]}</div> */}

      {/* You can add your chart components here based on the selected company */}
      <div className="flex w-full gap-2">
        {/* On-Time vs Delayed Deliveries */}
        {selectedCompany === 'Yei Express' && (
          <div className="w-full">
            <Content
              img1={Average_Delivery_Days_by_Destination_Region_Yeti}
              img2={Average_Delivery_Days_by_Type_of_Item_Yeti}
              img3={Average_Number_of_Deliveries_by_Region_Yeti}
              img4={Number_of_Delays_by_Year_Yeti}
              img5={Number_of_Delivery_by_Year_Yeti}
              img6={Success_Rate_Yeti}
            />
          </div>
        )}
        {selectedCompany === 'Courier Crew' && (
          <div className="w-full">
            <Content
              img1={Average_Delivery_Days_by_Destination_Region_CC}
              img2={Average_Delivery_Days_by_Type_of_Item_CC}
              img3={Average_Number_of_Deliveries_by_Region_CC}
              img4={Number_of_Delays_by_Year_CC}
              img5={Number_of_Delivery_by_Year_CC}
              img6={Success_Rate_CC}
            />
          </div>
        )}
        {selectedCompany === 'Global Swift' && (
          <div className="w-full">
            <Content
              img1={Average_Delivery_Days_by_Destination_Region_GS}
              img2={Average_Delivery_Days_by_Type_of_Item_GS}
              img3={Average_Number_of_Deliveries_by_Region_GS}
              img4={Number_of_Delays_by_Year_GS}
              img5={Number_of_Delivery_by_Year_GS}
              img6={Success_Rate_GS}
            />
          </div>
        )}
        {selectedCompany === 'Power Parcel' && (
          <div className="w-full">
            <Content
              img1={Average_Delivery_Days_by_Destination_Region_PP}
              img2={Average_Delivery_Days_by_Type_of_Item_PP}
              img3={Average_Number_of_Deliveries_by_Region_PP}
              img4={Number_of_Delays_by_Year_PP}
              img5={Number_of_Delivery_by_Year_PP}
              img6={Success_Rate_PP}
            />
          </div>
        )}
        {/* Add more components as necessary */}
      </div>
    </div>
  );
}

const Content = ({
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
}: {
  img1: StaticImageData;
  img2: StaticImageData;
  img3: StaticImageData;
  img4: StaticImageData;
  img5: StaticImageData;
  img6: StaticImageData;
}) => {
  return (
    <div className="space-y-10">
      <div className="flex gap-5">
        <Image
          src={img1}
          width={800}
          height={400}
          alt={'Average_Delivery_Days_by_Destination_Region_Yeti'}
          className="w-full"
        />
        <Image
          src={img2}
          width={800}
          height={400}
          alt={'Average_Delivery_Days_by_Destination_Region_Yeti'}
          className="w-full"
        />
      </div>
      <div className="flex gap-5">
        <Image
          src={img3}
          width={800}
          height={400}
          alt={'Average_Delivery_Days_by_Destination_Region_Yeti'}
          className="w-full"
        />
        <Image
          src={img4}
          width={800}
          height={400}
          alt={'Average_Delivery_Days_by_Destination_Region_Yeti'}
          className="w-full"
        />
      </div>
      <div className="flex gap-5">
        <Image
          src={img5}
          width={800}
          height={400}
          alt={'Average_Delivery_Days_by_Destination_Region_Yeti'}
          className="w-full"
        />
        <Image
          src={img6}
          width={800}
          height={400}
          alt={'Average_Delivery_Days_by_Destination_Region_Yeti'}
          className="w-full"
        />
      </div>
    </div>
  );
};
