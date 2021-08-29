import React, { useEffect, useState } from 'react';
import Header from './Header';
import { getMyLocation } from './ImportantFunctions';
import ScatterPoints from './ScatterPoints';

const ShowChargingPoints = () => {
    const [currentLocation, setCurrentLocation] = useState({
        latitude:"",
        longitude:""
    })

    const [distance, setDistance] = useState("100")
    const [connectionTypeId, setConnectionTypeId] = useState(["25", "33", "2"])

    const [chargingPoints, setChargingPoints] = useState(null)

    

    useEffect(() => {
       
         getMyLocation(setCurrentLocation);
         if(currentLocation.latitude && currentLocation.longitude){
            let URL = `https://api.openchargemap.io/v3/poi/?key=1c9c76fa-f034-4cdb-bbb7-64dea9dd3c73&output=json&camelcase=true&distance=${distance}&distanceunit=KM&connectiontypeid=${connectionTypeId}&latitude=${currentLocation.latitude}&longitude=${currentLocation.longitude}`

        console.log(URL)

            

            // fetch(URL).then(res=>res.json()).then(data=> setData(data, setChargingPoints))
         }        
    }, [currentLocation.latitude, currentLocation.longitude, distance, connectionTypeId])
    
   
    // if(chargingPoints)
    // {console.log(chargingPoints)}
  
      
    return (
        <div>
            <Header setDistance={setDistance} connectionTypeId={connectionTypeId} setConnectionTypeId={setConnectionTypeId}/>
            <ScatterPoints />
        </div>
    )
}

export default ShowChargingPoints;
