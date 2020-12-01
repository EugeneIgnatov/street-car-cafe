import React from 'react';
import { useGoogleMaps } from 'react-hook-google-maps';
import './MyMap.scss';

const MyMap = React.memo(function Map(props) {
  const lat = Number(props.lat) || 0;
  const lng = Number(props.lng) || 0;
  const { ref, map, google } = useGoogleMaps(
    props.apiKey,
    // NOTE: You should always set initial 'center' and 'zoom' values
    // even if you plan to change them later
    {
      center: { lat: lat, lng: lng },
      zoom: 16,
    }
  );
  if (map) {
    // execute when map object is ready
    const marker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map,
      title: 'Click to open in maps',
    });
    marker.addListener('click', () => {
      window.open(
        `https://www.google.com/maps/place/Streetcar+Cafe/@${lat},${lng},17z/data=!3m1!4b1!4m5!3m4!1s0x8620a7f4371553d5:0xaeb34bb823e25ce3!8m2!3d${lat}!4d${lng}`,
        '_blank'
      );
    });
  }

  // console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
  // console.log(google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)
  return <div className='map-container' ref={ref}></div>;
});

export default MyMap;
