import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ map }) => <div>{map}</div>;

export default function Map(){
  const defaultProps = {
    center: {
      lat: 37.26281828307743,
      lng: 49.9492527672349
    },
    zoom: 11
  };

  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          map="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}