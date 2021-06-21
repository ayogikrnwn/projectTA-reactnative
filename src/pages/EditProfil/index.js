import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Gap, Header, ListChat, ListEdProf} from '../../components';
import {Fire} from '../../config';
import {colors, fonts} from '../../utils';

const EditProfil = ({navigation}) => {
  const signOut = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        navigation.replace('GetStarted');
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title="Profil" />
        <View style={styles.names}>
          <Text style={styles.name}>Pasien</Text>
          <Text style={styles.address}>Kel. Situ, Sumedang Utara</Text>
        </View>
        <View style={styles.content}>
          <ListEdProf
            icon="edit-profil"
            name="Edit Profil"
            desc="Edit Profil Anda"
          />
          <ListEdProf
            icon="tentang"
            name="Tentang"
            desc="Tentang Aplikasi dan Pengembang"
          />
          <ListEdProf
            icon="konfirmasi"
            name="Konfirmasi Negatif"
            desc="Konfirmasi jika anda sudah sembuh"
            onPress={() => navigation.navigate('KonfirmasiNegatif')}
          />
          <ListEdProf 
          icon="konfirmasi"
          name="Log Out"
          onPress={signOut}
           />
          <Gap height={24} />
          <TouchableOpacity>
            <Text style={styles.logout}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  names: {
    paddingTop: 95,
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    fontSize: 20,
  },
  address: {
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    fontSize: 16,
  },
  content: {
    paddingHorizontal: 9,
    paddingTop: 95,
  },
  logout: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontFamily: fonts.primary[600],
    fontSize: 13,
  },
});
