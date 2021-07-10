import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ICLogoCard, LOGO} from '../../assets';
import {Button, Gap, Input, Link, Loading} from '../../components';
import {Fire} from '../../config';
import {colors, fonts, storeData, useForm} from '../../utils';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);

    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        setLoading(false);
        setForm('reset');

        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDB) => {
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          }).catch((err) => {
            console.log(err)
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  return (
    <>
      <View style={styles.container}>
        <ICLogoCard />
        <Gap height={12} />
        <Text style={styles.text}>Masuk</Text>
        <View style={styles.content}>
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry
          />
        </View>
        <Gap height={24} />
        <Button title="Masuk" onPress={login} />
        <Gap height={18} />
        <View style={styles.link}>
          <Link title="Belum Punya Akun? Klik Disini" />
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 23,
  },
  text: {
    fontSize: 30,
    fontFamily: fonts.primary[600],
  },
  content: {
    paddingTop: 34,
  },
  link: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
