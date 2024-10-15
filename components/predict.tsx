'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { DatePicker } from './ui/datepicker';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';

export const Predict = () => {
  const [predictionPP, setPredictionPP] = useState(null);
  const [predictionCC, setPredictionCC] = useState(null);
  const [predictionYeti, setPredictionYeti] = useState(null);
  const [predictionGS, setPredictionGS] = useState(null);
  const [noOfItems, setNoOfItems] = useState(1);
  const [shippingDate, setShippingDate] = useState<Date | undefined>();
  const [expectedArrivalDate, setExpectedArrivalDate] = useState<
    Date | undefined
  >();
  const [typeOfItem, setTypeOfItem] = useState('express_documents');

  // Separate states for starting and destination addresses
  const [startingAddress, setStartingAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');

  // Separate Autocomplete instances for starting and destination addresses
  const [startingAutocomplete, setStartingAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const [destinationAutocomplete, setDestinationAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  // Load the Google Maps Script
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string, // Replace with your API key
    libraries: ['places'],
  });

  const getPrediction = async () => {
    if (!shippingDate || !expectedArrivalDate) {
      //   alert('Please select shipping and expected arrival dates');
      return;
    }

    // Get distance between the addresses
    let distanceKm = await getDistanceBetweenAddresses(
      startingAddress,
      destinationAddress
    );

    if (distanceKm === null) {
      //   alert('Unable to calculate distance between addresses');
      //   return;
      distanceKm = 100;
    }

    const response = await fetch('http://127.0.0.1:8000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        NO_OF_ITEMS: [noOfItems],
        EXPECTED_DELIVERY_DAYS: [
          calculateDateDifference(shippingDate, expectedArrivalDate),
        ],
        SHIPMENT_DATE: [formatDateToYYYYMMDD(shippingDate)],
        EXPECTED_DATE: [formatDateToYYYYMMDD(expectedArrivalDate)],
        DISTANCE_KM: [distanceKm], // Use the calculated distance in kilometers
        NUM_WEEKEND: [0],
        NUM_PH: [0],
        TYPE_OF_ITEM_EXPRESS_DOCUMENTS: [
          typeOfItem === 'express_documents' ? 1 : 0,
        ],
        TYPE_OF_ITEM_OTHERS: [typeOfItem === 'others' ? 1 : 0],
        TYPE_OF_ITEM_PACKAGES_AND_PARCELS: [
          typeOfItem === 'packages_and_parcels' ? 1 : 0,
        ],
        STARTING_ADDRESS: startingAddress,
        DESTINATION_ADDRESS: destinationAddress,
      }),
    });

    const data = await response.json();
    setPredictionPP(data.predictionPP);
    setPredictionCC(data.predictionCC);
    setPredictionGS(data.predictionGS);
    setPredictionYeti(data.predictionYeti);
  };

  const onStartingPlaceChanged = () => {
    if (startingAutocomplete !== null) {
      const place = startingAutocomplete.getPlace();
      setStartingAddress(place.formatted_address || ''); // Set starting address
    }
  };

  const onDestinationPlaceChanged = () => {
    if (destinationAutocomplete !== null) {
      const place = destinationAutocomplete.getPlace();
      setDestinationAddress(place.formatted_address || ''); // Set destination address
    }
  };

  const onStartingLoad = (autocompleteObj: google.maps.places.Autocomplete) => {
    setStartingAutocomplete(autocompleteObj); // Assign Autocomplete instance for starting address
  };

  const onDestinationLoad = (
    autocompleteObj: google.maps.places.Autocomplete
  ) => {
    setDestinationAutocomplete(autocompleteObj); // Assign Autocomplete instance for destination address
  };

  if (!isLoaded) {
    return (
      <Card>
        <CardHeader>Loading...</CardHeader>
      </Card>
    ); // Show a loading indicator while the script is loading
  }

  return (
    <div className="w-full">
      <Card className="w-full p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Delivery Prediction
          </CardTitle>
          <div className="mt-4 space-y-4">
            {/* Number of Items */}
            <div className="flex flex-col">
              <label htmlFor="noOfItems" className="text-gray-600">
                Number of Items
              </label>
              <Input
                type="number"
                value={noOfItems}
                onChange={(e) => setNoOfItems(Number(e.target.value))}
                min={1}
                className="mt-1"
                id="noOfItems"
              />
            </div>

            {/* Starting Address Autocomplete */}
            <div className="flex flex-col">
              <label className="text-gray-600">Select Starting Address</label>
              <Autocomplete
                onLoad={onStartingLoad}
                onPlaceChanged={onStartingPlaceChanged}
              >
                <Input
                  type="text"
                  value={startingAddress}
                  onChange={(e) => setStartingAddress(e.target.value)}
                  placeholder="Enter the starting address"
                  className="mt-1"
                />
              </Autocomplete>
            </div>

            {/* Destination Address Autocomplete */}
            <div className="flex flex-col">
              <label className="text-gray-600">
                Select Destination Address
              </label>
              <Autocomplete
                onLoad={onDestinationLoad}
                onPlaceChanged={onDestinationPlaceChanged}
              >
                <Input
                  type="text"
                  value={destinationAddress}
                  onChange={(e) => setDestinationAddress(e.target.value)}
                  placeholder="Enter the destination address"
                  className="mt-1"
                />
              </Autocomplete>
            </div>

            {/* ShiYetiing Date Picker */}
            <div className="flex w-full gap-x-5">
              <div className="flex flex-col">
                <label className="text-gray-600">Shipping Date</label>
                <DatePicker date={shippingDate} onChange={setShippingDate} />
              </div>

              {/* Expected Arrival Date Picker */}
              <div className="flex flex-col">
                <label className="text-gray-600">Expected Arrival Date</label>
                <DatePicker
                  date={expectedArrivalDate}
                  onChange={setExpectedArrivalDate}
                />
              </div>
            </div>

            {/* Type of Item Radio Group */}
            <div className="flex flex-col">
              <label className="text-gray-600">Type of Item</label>
              <RadioGroup
                value={typeOfItem}
                onValueChange={setTypeOfItem}
                className="mt-2 space-y-2"
              >
                <label className="flex items-center space-x-3">
                  <RadioGroupItem value="express_documents" />
                  <span>Express Documents</span>
                </label>
                <label className="flex items-center space-x-3">
                  <RadioGroupItem value="packages_and_parcels" />
                  <span>Packages and Parcels</span>
                </label>
                <label className="flex items-center space-x-3">
                  <RadioGroupItem value="others" />
                  <span>Others</span>
                </label>
              </RadioGroup>
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
          {predictionPP !== null &&
          predictionCC !== null &&
          predictionYeti !== null &&
          predictionGS !== null &&
          (
            <Card className="p-4 bg-blue-50">
              <CardTitle className="text-center text-xl text-gray-700">
                Prediction Result
              </CardTitle>
              <div className="text-center font-bold mt-2">
                Yeti Express: {Math.ceil(predictionYeti)} Days
                <br />
                Courier Crew: {Math.ceil(predictionCC)} Days
                <br />
                Global Swift: {Math.ceil(predictionGS)} Days
                <br />
                Power Parcel: {Math.ceil(predictionPP)} Days
              </div>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

// Function to calculate difference in days between shipping date and expected arrival date
const calculateDateDifference = (
  shippingDate: Date,
  expectedArrivalDate: Date
): number => {
  const utcShippingDate = Date.UTC(
    shippingDate.getFullYear(),
    shippingDate.getMonth(),
    shippingDate.getDate()
  );
  const utcExpectedDate = Date.UTC(
    expectedArrivalDate.getFullYear(),
    expectedArrivalDate.getMonth(),
    expectedArrivalDate.getDate()
  );
  const msDifference = utcExpectedDate - utcShippingDate;
  return msDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days
};

// Function to format date to 'YYYY-MM-DD'
const formatDateToYYYYMMDD = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getDistanceBetweenAddresses = async (
  origin: string,
  destination: string
) => {
  try {
    const response = await fetch(
      `http://localhost:8000/distance?origin=${encodeURIComponent(
        origin
      )}&destination=${encodeURIComponent(destination)}`
    );

    const data = await response.json();

    if (data.rows && data.rows[0] && data.rows[0].elements[0].status === 'OK') {
      const distanceInMeters = data.rows[0].elements[0].distance.value; // Distance in meters
      const distanceInKm = distanceInMeters / 1000; // Convert to kilometers
      return distanceInKm;
    } else {
      console.error('Error in Distance Matrix response:', data);
      return null;
    }
  } catch (error) {
    console.error('Error fetching distance data:', error);
    return null;
  }
};
