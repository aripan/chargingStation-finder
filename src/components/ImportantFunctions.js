// finding out latitude & longitude
export const getMyLocation = (setterFunc) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      setterFunc({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  } else {
    return "Geolocation is not supported by this browser.";
  }
};

// store the fetched data in points array
export const setData = (data, setterFunc) => {
  let points = [];
  data.map((item) => {
    const chargingStation = {
      address: {
        street: item.addressInfo.addressLine1,
        zip: item.addressInfo.postcode,
        town: item.addressInfo.town,
        countryCode: item.addressInfo.country.isoCode,
      },
      location: {
        lat: item.addressInfo.latitude,
        lon: item.addressInfo.longitude,
      },
      operatorName: item.operatorInfo
        ? item.operatorInfo.title
        : "Not Available",
      priceInfo: item.usageCost ? item.usageCost : "Not Available",
      connectors: item.connections,
      
      available: item.statusType.isUserSelectable,
    };
    return points.push(chargingStation);
  });

  setterFunc(points);
};

// extracting latitude & longitude
export const scatterPointsData = (data) => {
  let pointsSet = [];
  data.map((item) => {
    const points = { x: item.location.lat, y: item.location.lon };

    return pointsSet.push(points);
  });

  return pointsSet;
};
