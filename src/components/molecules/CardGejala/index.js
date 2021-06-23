import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {ICCovid, ICLogoCard, LOGO} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const CardGejala = ({onPress, item}) => {
  return (
      <>
     
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.text}>
        <Gap height={30} />
        <Text style={styles.laportgl}>{item.tgl}</Text>
        <Text style={styles.lapor}>{item.gejala} </Text>
        <Text style={styles.lapor}>{item.status}</Text>
        <Text style={styles.lapor}>{item.suhu}°C </Text>
        <Text style={styles.lapor}>{item.oksigen}% </Text>
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
  laportgl: {
    fontFamily: fonts.primary[600],
    fontSize: 10,
    marginRight: 20,
    paddingTop: 30,
    justifyContent: 'space-between',
    
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
