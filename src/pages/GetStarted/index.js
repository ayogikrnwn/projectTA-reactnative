import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {BG, LOGO} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={BG} style={styles.page}>
      <View>
        <LOGO width={94} height={94} />
        <Text style={styles.title}>Yuk Laporkan Kondisimu Saat Ini</Text>
      </View>
      <View>
        <Button
          title="Daftar Akun"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Masuk"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 28,
    color: colors.white,
    marginTop: 91,
    fontFamily: fonts.primary[600],
  },
});
