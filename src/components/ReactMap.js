import RoomIcon from "@material-ui/icons/Room";
import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import PopupInfo from "./PopupInfo";
import styles from "./Styles.module.css";

const ReactMap = ({ chargingStations, currentLocation }) => {
  const [viewport, setViewport] = useState({
    latitude: currentLocation.latitude ? currentLocation.latitude : 51.22172,
    longitude: currentLocation.longitude ? currentLocation.longitude : 6.77616,
    width: "100%",
    height: "80vh",
    zoom: 8,
  });
  const [selectedStation, setSelectedStation] = useState(null);

  return (
    <ReactMapGL
      className={styles.container}
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {chargingStations !== null &&
        chargingStations.map((chargingStation, id) => (
          <Marker
            key={id}
            latitude={chargingStation.location.lat}
            longitude={chargingStation.location.lon}
          >
            <RoomIcon
              fontSize="large"
              style={{
                color: chargingStation.available ? "green" : "red",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault();
                setSelectedStation(chargingStation);
              }}
            />
          </Marker>
        ))}

      {selectedStation ? (
        <Popup
          latitude={selectedStation.location.lat}
          longitude={selectedStation.location.lon}
          onClose={(e) => setSelectedStation(null)}
        >
          <PopupInfo
            selectedStation={selectedStation}
            currentLocation={currentLocation}
          ></PopupInfo>
        </Popup>
      ) : null}
    </ReactMapGL>
  );
};

export default ReactMap;
