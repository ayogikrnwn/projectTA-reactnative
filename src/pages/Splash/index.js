import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LOGO} from '../../assets/icon';
import {colors, fonts} from '../../utils';
import {Fire} from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    return () => unsubscribe();
  }, [navigation]);
  return (
    <>
      <View style={styles.container}>
        <LOGO style={styles.icon} />
        <Text style={styles.title}>APEL KHASMA</Text>
        <Text style={styles.caption}>Aplikasi Pelaporan Kondisi Kesehatan</Text>
        <Text style={styles.caption}>
          {' '}
          Untuk Pasien Isolasi Mandiri COVID-19{' '}
        </Text>
        <Text style={styles.caption}> Kabupaten Sumedang </Text>
      </View>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 160,
    height: 190,
  },
  title: {
    fontSize: 20,
    color: colors.text.menuactive,
    fontFamily: fonts.primary[700],
    paddingTop: 20,
  },
  caption: {
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
