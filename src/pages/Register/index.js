import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Gap, Header, Input, Loading } from "../../components";
import { Fire } from "../../config";
import { colors, storeData, useForm } from "../../utils";
import { showMessage, hideMessage } from "react-native-flash-message";
import GetLocation from "react-native-get-location";
import { fetchGeoReverse } from "../../service/expo";

const Register = ({ navigation }) => {
  // const [fullName, setFullName] = useState('');
  // const [proffesion, setProffesion] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [form, setForm] = useForm({
    fullName: "",
    nik: "",
    isolasi: "",
    email: "",
    password: "",
  });
  const [location, setLocation] = useState({ longitude: 0, latitude: 0 });

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading..");

  const onContinue = () => {
    setLoading(true);

    if (form.fullName && form.nik) {
      Fire.auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then((success) => {
          const data = {
            fullName: form.fullName,
            email: form.email,
            nik: form.nik,
            isolasi: form.isolasi,
            uid: success.user.uid,
            location,
          };
          setLoading(false);
          Fire.database()
            .ref("users/" + success.user.uid + "/")
            .set(data);

          storeData("user", data);
          navigation.replace("UploadDocument", data);
          // console.log("register success :", success);
          setForm("reset");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setLoading(false);
          showMessage({
            message: errorMessage,
            type: "default",
            backgroundColor: colors.error,
            color: colors.white,
          });
        });
    } else {
      setLoading(false);
      showMessage({
        message: "Nama/Kota Asal cannot be empty",
        type: "default",
        backgroundColor: colors.error,
        color: colors.white,
      });
    }
  };

  const getLocation = async (coordinate) => {
    const [{ address }, error] = await fetchGeoReverse(coordinate);
    if (error) {
      console.log(error);
      return;
    }
    setLocation(coordinate);
    setForm("isolasi", address);
    setLoading(false);
    setLoadingText("Loading..");
  };

  const getCurrentLocation = () => {
    setLoading(true);
    setLoadingText("Mendapatkan lokasi Anda");
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(({ latitude, longitude }) => getLocation({ longitude, latitude }))
      .catch((error) => {
        const { code, message } = error;
        console.warn(code, message);
      });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Input
              label="Nama Lengkap"
              value={form.fullName}
              onChangeText={(value) => setForm("fullName", value)}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={(value) => setForm("email", value)}
            />
            <Gap height={24} />
            <Input
              label="Nomor Induk Kependudukan"
              keyboardType="numeric"
              value={form.nik}
              onChangeText={(value) => setForm("nik", value)}
            />
            <Gap height={24} />
            <Input
              label="Alamat Isolasi Mandiri"
              value={form.isolasi}
              disable
              multiline
            />

            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm("password", value)}
              secureTextEntry={true}
            />
            <Gap height={24} />

            <Gap height={40} />
            <Button title="Continue" onPress={onContinue} />
          </View>
        </ScrollView>
      </View>
      {loading && <Loading title={loadingText} />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  content: { padding: 40, paddingTop: 0 },
  page: { backgroundColor: colors.white, flex: 1 },
  textStyle: {
    backgroundColor: "#fff",
    fontSize: 15,
    marginTop: 16,
    color: "black",
  },
});
