import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Maps } from '../../components'

const PetaIsolasi = () => {
    return (
        <View style={styles.container}>
            <Text>Peta Isolasi</Text>
            <Maps />
        </View>
    )
}

export default PetaIsolasi;

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 300,
        
    }
})
