import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MapView, {Marker} from 'react-native-maps';

class Maps extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
            <MapView style={styles.map}  initialRegion={{ 
                latitude:-6.8094279,
                longitude:107.7001951,
                latitudeDelta:0.009,
                longitudeDelta: 0.009
             }}>
               
            </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
...StyleSheet.absoluteFillObject
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
});
export default Maps;
