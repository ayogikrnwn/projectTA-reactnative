import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ICBackNavy, ICRedButton, ILHospital, ILRSP, ILRSUD} from '../../assets';
import {Gap, ListHospital} from '../../components';
import {colors, fonts} from '../../utils';

const Hospital = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.txthead}>Tombol Darurat</Text>
      </View>
      <Gap height={24} />
      <Text style={styles.txtdesc}>Tekan Tombol Dibawah Ini </Text>
      <Text style={styles.txtdesc}>Jika Dalam Keadaan Darurat </Text>
      <Text style={styles.txtdesc}>Satgas Covid Terdekat </Text>
      <Text style={styles.txtdesc}>Akan Datang ke Lokasi Anda </Text>
      <Gap height={24} />
      <View style={styles.redbut}>
        <TouchableOpacity>
        <Image source={ICRedButton} style={styles.redbutton} />
        </TouchableOpacity>
      
      </View>
    </View>
  );
};

export default Hospital;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txthead: {
    fontFamily: fonts.primary[600],
    fontSize: 18,

    textAlign: 'center',
  },
  txtdesc: {
    fontFamily: fonts.primary[400],
    fontSize: 18,

    textAlign: 'center',
  },
  redbut: {
    justifyContent: 'center',
    padding: 24,
  },
  redbutton: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
