import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICCovid, ICMedicine} from '../../assets';
import {CardHome, Header} from '../../components';

const Informasi = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Halaman Pelaporan"
        desc="Laporkan kondisimu hari ini"
        type="dark-profile"
      />
      <View style={styles.content}>
        <CardHome
          img={ICCovid}
          title="Jenis Gejala"
          desc="Kenali Gejala Awal Covid-19"
          onPress={() => navigation.navigate('JenisGejala')}
        />
        <CardHome
          img={ICMedicine}
          title="Saran Pengobatan"
          desc="Saran Pengobatan untuk"
          descs="Isolasi Mandiri"
          onPress={() => navigation.navigate('SaranObat')}
        />
      </View>
    </View>
  );
};

export default Informasi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 40,
  },
});
