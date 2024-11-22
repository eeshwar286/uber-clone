import React, { useContext, useEffect, useState } from 'react'
import { DirectionsRenderer, GoogleMap, MarkerF, OverlayView, OverlayViewF, useJsApiLoader } from '@react-google-maps/api';
import { SourceContext } from '../../context/SourceContext';
import { DestinationContext } from '../../context/DestinationContext';

function GoogleMapSection() {
  const containerStyle = {
    width: '100%',
    height: window.innerWidth*0.415,
  }


  
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  // })
  const {source,setSource}=useContext(SourceContext);
  const {destination,setDestination}=useContext(DestinationContext);
  
  const [center,setCenter]=useState({
    lat: -3.745,
    lng: -38.523,
  });
  
  const [map, setMap] = React.useState(null)
  const [directionRoutePoints, setDirectionRoutePoints]=useState([]);

  useEffect(()=>{
    if(destination?.length!=[]&&map)
    {
      map.panTo(
        {
          lat:destination.lat,
          lng:destination.lng
        }
      )
      setCenter({
        lat:destination.lat,
        lng:destination.lng
      })
    }

    if(source.length!=[]&&destination.length!=[])
    {
      directionRoute();
    }
  },[destination])

  useEffect(()=>{
    if(source?.length!=[]&&map)
    {
      map.panTo(
        {
          lat:source.lat,
          lng:source.lng
        }
      )
      setCenter({
        lat:source.lat,
        lng:source.lng
      })
    }

    if(source.length!=[]&&destination.length!=[])
      {
        directionRoute();
      }

  },[source])

  const directionRoute=()=>{
    const DirectionsService=new google.maps.DirectionsService();

    DirectionsService.route({
      origin:{lat:source.lat, lng:source.lng},
      destination:{lat:destination.lat, lng:destination.lng},
      travelMode:google.maps.TravelMode.DRIVING
    },(result,status)=>{
      if(status===google.maps.DirectionsStatus.OK)
      {
        setDirectionRoutePoints(result)
      }
      else{
        console.error('Invalid Address Error!!!');
      }
    })

  }

  const onLoad = React.useCallback(function callback(map) {
    // Example of getting and using the map instance
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={11}
      onLoad={map=>setMap(map)}
      onUnmount={onUnmount}
      options={{mapId:'e0fb4de286a32c50'}}
    >
    {source.length!=[]? <MarkerF
      position={{lat:source.lat, lng:source.lng}}
      icon={{
        url:"/pickup.png",
        scaledSize:{
          width:20,
          height:20
        }
      }}
      >
        <OverlayViewF
        position={{lat:source.lat, lng:source.lng}}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
          <div className='p-2 bg-white font-medium inline-block'>
            <p className='text-black text-[18px]'>{source.label}</p>
          </div>
        </OverlayViewF>
      </MarkerF>:null}

      {destination.length!=[]? <MarkerF
      position={{lat:destination.lat, lng:destination.lng}}
      icon={{
        url:"/dropoff.png",
        scaledSize:{
          width:20,
          height:20
        }
      }}
      >
        <OverlayViewF
        position={{lat:destination.lat, lng:destination.lng}}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
          <div className='p-2 bg-white font-medium inline-block'>
            <p className='text-black text-[18px]'>{destination.label}</p>
          </div>
        </OverlayViewF>
      </MarkerF>:null}
      
      <></>

      <DirectionsRenderer
        directions={directionRoutePoints}
        options={{
          polylineOptions:{
            strokeColor:'#0d0d0d',
            strokeWeight:3,
            strokeOpacity:100
          },
          suppressMarkers:true,
        }}
      />


    </GoogleMap>
  ) 
  
}

export default GoogleMapSection
