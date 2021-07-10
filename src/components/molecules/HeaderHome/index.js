import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts, getData} from '../../../utils';

const HeaderHome = () => {
  const [profile, setProfile] = useState({
    fullName: ''
  });

  useEffect(() => {
    getData('user').then((res) => {
      setProfile(res);
    });

  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.halo}>Halo,</Text>
        <Text style={styles.nama}>{profile.fullName}</Text>
      </View>
        <Text style={styles.desc}>Tetap Semangat!</Text>
      </View>
   
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
   
    
  },
  title: {
    flexDirection: 'row',

    fontSize: 20
  },
  halo: {
      fontFamily: fonts.primary[400],
      fontSize: 28
  },
  nama: {
    fontFamily: fonts.primary[600],
    fontSize: 28
  },
  desc: {
    fontSize: 16,
    fontFamily: fonts.primary[300],
  },
});
