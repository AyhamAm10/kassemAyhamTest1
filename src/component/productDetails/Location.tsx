import React from 'react'
import 'leaflet/dist/leaflet.css';
import MapComponent from './MapContainer';
import { useSelector } from 'react-redux';

const Location:React.FC = () => {


    const product = useSelector(
      (state: any) => state.productDetailsSlice
    ).productDetailsState;

    console.log(product.address)

  return (
    <div >
      <div>
      <MapComponent latitude={product.address.latitude} longitude={product.address.longitude} address={product.address.address}  />
      {/*  latitude={product.address.latitude} longitude={product.address.longitude} address={product.address.address} */}
    </div>
    </div>
  )
}

export default Location