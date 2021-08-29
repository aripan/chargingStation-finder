import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { getMyLocation, setData } from "./components/ImportantFunctions";
import ReactMap from "./components/ReactMap";

function App() {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: "",
    longitude: "",
  });

  const [distance, setDistance] = useState("100");
  const [connectionTypeId, setConnectionTypeId] = useState(["25", "33", "2"]);

  const [chargingStations, setChargingStations] = useState(null);

  useEffect(() => {
    getMyLocation(setCurrentLocation);
    if (currentLocation.latitude && currentLocation.longitude) {
      let URL = `https://api.openchargemap.io/v3/poi/?key=${process.env.REACT_APP_OCM_API_KEY}&output=json&camelcase=true&distance=${distance}&distanceunit=KM&connectiontypeid=${connectionTypeId}&latitude=${currentLocation.latitude}&longitude=${currentLocation.longitude}`;

      fetch(URL)
        .then((res) => res.json())
        .then((data) => setData(data, setChargingStations));
    }
  }, [
    currentLocation.latitude,
    currentLocation.longitude,
    distance,
    connectionTypeId,
  ]);

  return (
    <div>
      <Header
        setDistance={setDistance}
        connectionTypeId={connectionTypeId}
        setConnectionTypeId={setConnectionTypeId}
      />
      <ReactMap
        chargingStations={chargingStations}
        currentLocation={currentLocation}
      />
    </div>
  );
}

export default App;
