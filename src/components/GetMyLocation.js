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
