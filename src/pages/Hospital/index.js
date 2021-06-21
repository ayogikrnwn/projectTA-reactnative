import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILHospital, ILRSP, ILRSUD} from '../../assets';
import {ListHospital} from '../../components';
import {colors, fonts} from '../../utils';

const Hospital = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospital} style={styles.background}>
        <Text style={styles.title}>Rumah Sakit Terdekat</Text>
        <Text style={styles.desc}>2 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          type="Rumah Sakit Umum "
          name="Daerah Sumedang"
          address="Jl. Palasari No.80, Kotakulon"
          pic={ILRSUD}
        />
        <ListHospital
          type="Rumah Sakit Umum "
          name="Pakuwon Sumedang"
          address="Jl. Rd Dewi Sartika No.17, Regol Wetan"
          pic={ILRSP}
        />
      </View>
    </View>
  );
};

export default Hospital;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  background: {height: 240, paddingTop: 30},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    textAlign: 'center',
    marginTop: 6,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 16,
  },
});
