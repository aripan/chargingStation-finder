import React, { useEffect, useState } from 'react';
import { getMyLocation } from "./GetMyLocation";

const FetchData = () => {
    const [currentLocation, setCurrentLocation] = useState({
        latitude:"",
        longitude:""
    })

    

    useEffect(() => {
         getMyLocation(setCurrentLocation);
        let URL = `https://api.openchargemap.io/v3/poi/?key=1c9c76fa-f034-4cdb-bbb7-64dea9dd3c73&output=json&camelcase=true&distance=10&distanceunit=KM&connectiontypeid=25&latitude=${currentLocation.latitude}&longitude=${currentLocation.longitude}`
       
        if(currentLocation.latitude && currentLocation.longitude){
            fetch(URL).then(res=>res.json()).then(data=> console.log(data))
        }
        
       

       console.log(URL)
        
    }, [currentLocation.latitude, currentLocation.longitude])
      
    
    //   console.log(currentLocation)
      
    return (
        <div>
            
        </div>
    )
}

export default FetchData
