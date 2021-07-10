import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header} from '../../components';
import {colors, fonts, getData, storeData} from '../../utils';
import moment from 'moment';
import 'moment/locale/id';
import {Fire} from '../../config';
import Dialog, {DialogContent, SlideAnimation} from 'react-native-popup-dialog';
import {showMessage} from 'react-native-flash-message';
import users from '../../api/users';

const KonfirmasiLapor = ({navigation, route}) => {
  const [{nik, fullName, isolasi, email , uid}, setIdProf] = useState({
    nik: '',
    fullName : '',
    isolasi : '',
    email : ''
  });

  const itemCategory = route.params;
  const date = new Date();

  useEffect(() => {
    getData('user').then((res) => {
      setIdProf(res);
    });
  });

  const UploadAndContinue = () => {
    users.tambah(
      {
        nik: nik,
        fullName: fullName,
        isolasi: isolasi,
        email: email,
        gejala: itemCategory.category,
        uid : uid,
      },
      (data) => {
        console.log(data);
      },
    );

    navigation.navigate('MainApp');

    showMessage({
      message: 'Berhasil Disimpan',
      type: 'default',
      backgroundColor: 'green',
      color: colors.white,
    });
  };

  return (
    <>
      <Header
        title="Konfirmasi Pelaporan"
        desc="Laporkan kondisimu hari ini"
        type="dark-profile"
      />
      <View style={styles.container}>
        <Text style={styles.textone}>Hari Ini, Pada Tanggal </Text>
        <Text style={styles.texttwo}> {moment(date).format('LLLL')} </Text>
        <Text style={styles.textone}>Anda Mengalami Gejala</Text>
        <Text style={styles.point}>{`${itemCategory.category}`}</Text>
        <Gap height={32} />
        <View style={styles.btn}>
          <Button title="Konfirmasi" onPress={UploadAndContinue} />
          <Gap height={12} />
          <Button type="secondary" title="Batal" />
        </View>
      </View>
    </>
  );
};

export default KonfirmasiLapor;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    maxHeight: 450,
    marginLeft: 24,
    marginRight: 24,
    flex: 1,
    backgroundColor: 'white',
  },
  textone: {
    marginTop: 24,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
  },
  texttwo: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: fonts.primary[400],
  },
  point: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
  },
  btn: {
    padding: 24,
  },
});
