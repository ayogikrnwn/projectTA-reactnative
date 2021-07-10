import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const { width, height } = Dimensions.get("window");

const Maps = ({ userProfile, users }) => {
  return (
    <View style={styles.wrapper}>
      <MapView
        style={styles.map}
        initialRegion={{
          ...userProfile.location,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
      >
        <Marker coordinate={{ ...userProfile.location }} />
        {users.map((user) => (
          <Marker coordinate={{ ...user.location }} key={`${user.uid}`} />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: height * 0.4,
  },
  map: {
    flex: 1,
  },
});
export default Maps;
