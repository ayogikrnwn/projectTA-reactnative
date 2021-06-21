import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ICAddGejala} from '../../assets';
import {
  CardGejala,
  CardHome,
  CardLC,
  CatLapor,
  Gap,
  Header,
} from '../../components';

import {Fire} from '../../config';
import {fonts} from '../../utils';

const Lapor = ({navigation}) => {
  // const [categoryGejala, setCategoryGejala] = useState([]);

  // useEffect(() => {
  //   getCategoryGejala();
  // });

  // const getCategoryGejala = () => {
  //   Fire.database()
  //     .ref('kategori_gejala/')
  //     .once('value')
  //     .then((res) => {
  //       if (res.val()) {
  //         const data = res.val();
  //         const filterData = data.filter((el) => el !== null);
  //         setCategoryGejala(filterData);
  //         console.log(res);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={styles.container}>
      <Header
        title="Halaman Pelaporan"
        desc="Laporkan kondisimu hari ini"
        type="dark-profile"
      />

      <Gap height={19} />
      <View style={styles.content}>
        <Text style={styles.title}>Riwayat Gejala Sebelumnya</Text>
        <ScrollView>
          <View style={styles.riwayatgejala}>
            <CardGejala />
            <CardGejala />
            <CardGejala />
          </View>
          <View style={styles.border}></View>
          <View style={styles.cardtmbh}>
            <CardHome
              img={ICAddGejala}
              title="Tambah Gejala"
              desc="Silahkan Tambah Gejala"
              onPress={() => navigation.navigate('InputGejala')}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Lapor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingLeft: 16,
    flex: 1,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
  },
  desc: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
  },
  catlapor: {
    flexDirection: 'row',
  },
  wrapperScroll: {},
  lc: {
    justifyContent: 'center',
  },
  head: {
    flexDirection: 'row',
  },
  riwayatgejala: {
    paddingTop: 10,
  },
  border: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#C2C2C2',
    width: 309,
  },
  cardtmbh: {
    marginTop: 20,
    paddingHorizontal: 25,
  },
});
