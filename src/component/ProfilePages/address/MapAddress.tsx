// LocationMarker.tsx
import { Marker, useMapEvents } from 'react-leaflet';
import { LatLngLiteral } from 'leaflet';
import React, { useEffect, useState } from 'react';

interface LocationMarkerProps {
  setPosition: React.Dispatch<React.SetStateAction<LatLngLiteral | null>>;
}

const ABU_DHABI_COORDINATES: LatLngLiteral = { lat: 24.4539, lng: 54.3773 };

const LocationMarker: React.FC<LocationMarkerProps> = ({ setPosition }) => {
  const [position, setLocalPosition] = useState<LatLngLiteral | null>(null);

  useEffect(() => {
    setLocalPosition(ABU_DHABI_COORDINATES);
    setPosition(ABU_DHABI_COORDINATES);
  }, [setPosition]);

  useMapEvents({
    click(e) {
      const newPosition = e.latlng;
      setLocalPosition(newPosition);
      setPosition(newPosition);
      console.log('Coordinates:', newPosition);
    },
  });

  return position ? <Marker position={position} /> : null;
};

export default LocationMarker;
