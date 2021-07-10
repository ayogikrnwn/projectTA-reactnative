import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILRCone, ILRCtwo} from '../../../assets';
import { fonts } from '../../../utils';
import { Gap } from '../../atoms';

const RecFood = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardone}>
        <Image source={ILRCone} />
        <View style={styles.titleone}>
          <Text style={styles.title}>Sup Ayam</Text>
          <Gap height={5} />
          <Text style={styles.desc}>Nutrisi Lengkap</Text>
        </View>
      </View>
      <Gap height={24} />
      <View style={styles.cardtwo}>
        <Image source={ILRCtwo} />
        <View style={styles.titleone}>
          <Text style={styles.title}>Jus Mangga</Text>
          <Gap height={5} />
          <Text style={styles.desc}>Polifenol, Vitamin C</Text>
        </View>
      </View>
    </View>
  );
};

export default RecFood;

const styles = StyleSheet.create({
  container: {
      flex: 1,
     
  },
  cardone: {
    flexDirection: 'row',
  },
  titleone: {
    paddingLeft: 24,
    paddingTop: 10,
    
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
  },
  desc:{
    fontFamily: fonts.primary[300],
    fontSize: 16,
  
  },
  cardtwo: {
    flexDirection: 'row',
  },

});
