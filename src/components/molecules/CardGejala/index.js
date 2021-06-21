import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {ICCovid, ICLogoCard, LOGO} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const CardGejala = ({onPress, img, title, descs, desc}) => {
  return (
      <>
     
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.text}>
        <Gap height={30} />
        <Text style={styles.lapor}>21-06-2021</Text>
        <Text style={styles.lapor}>Batuk </Text>
        <Text style={styles.lapor}>RIngan</Text>
        <Text style={styles.lapor}>36°C </Text>
        <Text style={styles.lapor}>98% </Text>
      </View>
    </TouchableOpacity>
    </>
  );
};

export default CardGejala;

const styles = StyleSheet.create({
    
  container: {
    paddingHorizontal: 12,
    backgroundColor: '#ECECEC',
    borderWidth: 1,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 324,
    height: 91,
    flexDirection: 'row',
    marginBottom: 10,
    
  },
  text: {
   flexDirection: 'row',
    
 
  },
  day: {
    flexDirection: 'row',
  },
  isolate: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
  },
  dayisolate: {
    fontFamily: fonts.primary[800],
    fontSize: 14,
  },
  lapor: {
    fontFamily: fonts.primary[600],
    fontSize: 13,
    marginRight: 20,
    paddingTop: 30,
    justifyContent: 'space-between'
  },
  desc: {
    fontFamily: fonts.primary[300],
    fontSize: 11,
  },
  img: {
    height: 75,
    width: 75,
  },
});
