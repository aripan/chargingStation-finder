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

// calculating distance using latitude & longitude
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  let radius = 6371; // Radius of the earth in km
  let dLat = deg2rad(lat2 - lat1);
  let dLon = deg2rad(lon2 - lon1);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = radius * c; // Distance in km
  return d;
};

// converting deg2rad
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
