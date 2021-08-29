export const getMyLocation=(setterFunc) =>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        setterFunc({
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        })
      });
      
    } else { 
      return "Geolocation is not supported by this browser.";
    }
  }


export const formatChargingStations=(arr)=>{
//   const oldValues={
// street:"", zip:"",town:"", countryCode:"", lat:0, lon:0, operatorName:"",priceInfo:"", connectors:[], available:false
//   }
 
    arr.map(item=>{ 
      const updatedValue ={ street: item.addressInfo.addressLine1, zip:item.addressInfo.postcode,town:item.addressInfo.town, countryCode:item.addressInfo.country.isoCode, lat:item.addressInfo.latitude, lon:item.addressInfo.longitude, operatorName:item.operatorInfo.title,priceInfo:item.usageCost, connectors:item.connections, available:item.statusType.isUserSelectable}
      return updatedValue;
    })
  
}