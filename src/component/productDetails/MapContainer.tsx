import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet'; 
import 'leaflet/dist/leaflet.css';

type Props = {
  latitude: string;
  longitude: string;
  address?: string;
};

const MapComponent: React.FC<Props> = ({ latitude, longitude, address }) => {
  const lat = parseFloat(latitude);
  const lng = parseFloat(longitude);

  if (isNaN(lat) || isNaN(lng)) {
    return <div>Invalid coordinates</div>;
  }

  const position: LatLngExpression = [lat, lng]; 

  return (
    <MapContainer center={position} zoom={13} style={{ minHeight: '219px', width: '100%',aspectRatio:2/1,borderRadius:"24px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>{address?? ""}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
