import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICSukses} from '../../assets';
import {Button, Gap, Header} from '../../components';
import {fonts} from '../../utils';

const SuksesLapor = ({navigation, route}) => {
  const itemCategory = route.params;
  // useEffect(() => {
  //   callGejala(itemCategory.category);
  // }, []);

  // const callGejala = (category) => {
  //   console.log(category);
  // }
  return (
    <>
      {/* {`Pilih Obat ${itemCategory.category}`} */}
      <View style={styles.container}>
        <View style={styles.icon}>
          <ICSukses />
        </View>
        <Gap height={38} />
        <Text style={styles.title}>TERIMA KASIH</Text>
        <Text style={styles.desc}>
          Kamu sudah melaporkan kondisimu hari ini Tetap Semangat dan Semoga
          Lekas Sembuh
        </Text>
        <Gap height={38} />
        <Button
          title="Kembali Ke Halaman Awal"
          onPress={() => navigation.navigate('MainApp')}
        />
      </View>
    </>
  );
};

export default SuksesLapor;

const styles = StyleSheet.create({
  container: {
    padding: 35,
    justifyContent: 'center',
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    fontSize: 24,
  },
  desc: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    textAlign: 'center',
  },
});
