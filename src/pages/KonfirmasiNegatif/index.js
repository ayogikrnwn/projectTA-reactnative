import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const KonfirmasiNegatif = () => {
  return (
    <View style={styles.container}>
      <Header title="Konfirmasi Negatif" />

      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input label="Nama Lengkap" value="Pasien" disable />
          <Gap height={24} />
          <Input label="Email" value="pasien1@gmail.com" disable />
          <Gap height={24} />
          <Input
            label="Nomor Induk Kependudukan"
            value="321313145130"
            disable
          />
          <Gap height={24} />
          <Input
            label="Alamat Isolasi Mandiri"
            value="Kel. Situ, Sumedang Utara"
            disable
          />
          <Gap height={34} />
          <Button
            title="Upload Surat Keterangan Negatif Covid-19"
            type="secondary"
          />
          <Gap height={24} />
          <Text>
            Nama FIle : Dummy
            {'\n'}
            Type : Pdf
          </Text>
          <Gap height={24} />
          <Button title="Saya Sudah Sembuh" />
          <Gap height={24} />
        </ScrollView>
      </View>
    </View>
  );
};

export default KonfirmasiNegatif;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 33,
    flex: 1,
    backgroundColor: colors.white,
  },
});
