import * as Location from "expo-location";

const fetchGeoReverse = (coordinate) => {
  return new Promise(async (resolve, reject) => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      reject({
        isSuccess: false,
        data: null,
        error: {
          name: "Permission",
          message: "Permission to access location was denied",
        },
        message: "Permission to access location was denied",
      });
      return;
    }
    try {
      const location = await Location.reverseGeocodeAsync(coordinate);
      // const {city,country,district,name,postalCode,region,street,subregion} = location[0]
      const l = location[0];
      const name = l.name ? `${l.name}` : "";
      const street = l.street ? `, ${l.street}` : "";
      const district = l.district ? `, ${l.district}` : "";
      const subregion = l.subregion ? `, ${l.subregion}` : "";
      const region = l.region ? `, ${l.region}` : "";
      const city = l.city ? `, ${l.city}` : "";
      const country = l.country ? `, ${l.country}` : "";
      const postalCode = l.postalCode ? `, ${l.postalCode}` : "";
      const address = `${name}${street}${district}${subregion}${region}${city}${country}${postalCode}`;
      resolve([{ ...location[0], address }, null]);
    } catch (error) {
      reject([
        null,
        {
          error: { name: error.name, message: error.message },
          message: "Get current location is failed",
        },
      ]);
    }
  });
};

export { fetchGeoReverse };
