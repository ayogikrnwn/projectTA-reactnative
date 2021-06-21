import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {ICCovid, ICLogoCard, LOGO} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const CardHome = ({onPress, img, title, descs, desc}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={img} style={styles.img} />
      <View style={styles.text}>
        <Gap height={5} />
        <Text style={styles.lapor}>{title} </Text>
        <Text style={styles.desc}>{desc}</Text>
        <Text style={styles.desc}>{descs}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardHome;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 283,
    height: 91,
    flexDirection: 'row',
    marginBottom: 10
  },
  text: {
    paddingLeft: 14,
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
    fontSize: 17,
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
