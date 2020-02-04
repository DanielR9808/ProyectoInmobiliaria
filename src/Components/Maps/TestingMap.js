
import React, {  useEffect,useState} from 'react'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import Geocode from "react-geocode";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey('AIzaSyC_M2DuA0YGZm7SMiCwNqg2Lq3fuyPg8JM'	);
 
// set response language. Defaults to english.
Geocode.setLanguage("en");
 
// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("col");
 
// Enable or disable logs. Its optional.
Geocode.enableDebug();



const params = {v: '3.exp', key: 'AIzaSyC_M2DuA0YGZm7SMiCwNqg2Lq3fuyPg8JM'	};

function geocodeGen(address){
  Geocode.fromAddress(address).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
      return lat,lng
     
    },
    error => {
      console.error(error);
    }
  );
}
function onMapCreated(map) {
  map.setOptions({
    disableDefaultUI: true
  });
}

function onDragEnd(e) {
  console.log('onDragEnd', e);
}

function onCloseClick() {
  console.log('onCloseClick');
}

function onClick(e) {
  console.log('onClick', e);
}

export default function MapContainer (props) {
  
  const [coords,setCoords]= useState({lat: 7.8939100,
    lng: -72.5078200})

    console.log(geocodeGen(props.Adress))
    return (
      <Gmaps
        width={'100%'}
        height={'100%'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={20}
        loadingMessage={'..Loading'}
        params={params}
        onMapCreated={onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Tu inmueble'}
          onCloseClick={onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={onClick} />
      </Gmaps>
      
    );
  
    
  
}

