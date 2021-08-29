import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const ReactMap = ({chargingPoints}) => {
    console.log(chargingPoints)
    const [viewport, setViewport] = useState({
        latitude: 51.22172,
        longitude: 6.77616,
        width:"80vw",
        height:"80vh",
        zoom: 10
      });
      
    return (
        <ReactMapGL
      {...viewport}
      
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
        {chargingPoints!== null && chargingPoints.map((point, id)=>(
            <Marker key={id} latitude={point.location.lat} longitude={point.location.lon}><div>STATION</div></Marker>
        ))}
        
    </ReactMapGL>
    )
}

export default ReactMap
