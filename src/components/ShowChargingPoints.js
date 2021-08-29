import React, { useEffect, useState } from 'react';
import { getMyLocation } from "./GetMyLocation";
import ScatterPoints from './ScatterPoints';

const ShowChargingPoints = () => {
    const [currentLocation, setCurrentLocation] = useState({
        latitude:"",
        longitude:""
    })

    const [chargingPoints, setChargingPoints] = useState(null)

    

    useEffect(() => {
       
         getMyLocation(setCurrentLocation);
         if(currentLocation.latitude && currentLocation.longitude){
            let URL = `https://api.openchargemap.io/v3/poi/?key=1c9c76fa-f034-4cdb-bbb7-64dea9dd3c73&output=json&camelcase=true&distance=10&distanceunit=KM&connectiontypeid=25&latitude=${currentLocation.latitude}&longitude=${currentLocation.longitude}`

            

            fetch(URL).then(res=>res.json()).then(data=> setData(data))
         }        
    }, [currentLocation.latitude, currentLocation.longitude])
    

    const setData=(data)=>{
        let points =[]
        data.map(item=>{
            const chargingStation={
                address:{
                    street:item.addressInfo.addressLine1,
                    zip:item.addressInfo.postcode,
                    town:item.addressInfo.town,
                    countryCode:item.addressInfo.country.isoCode,
                },
                location:{
                    lat:item.addressInfo.latitude,
                    lon:item.addressInfo.longitude
                },
                operatorName:item.operatorInfo?item.operatorInfo.title:"Not Available",
                priceInfo:item.usageCost? item.usageCost:"Not Available",
                connectors:item.connections,
                available:item.statusType.isUserSelectable
    
            }
           return points.push(chargingStation)
        })

        setChargingPoints(points);
        
    }
   
    if(chargingPoints)
    {console.log(chargingPoints)}
  
      
    return (
        <div>
            <ScatterPoints />
        </div>
    )
}

export default ShowChargingPoints;
