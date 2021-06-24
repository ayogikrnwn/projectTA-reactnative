import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Maps } from "../../components";
import { Fire } from "../../config";
import { getData, fonts } from "../../utils";

const PetaIsolasi = () => {
  const [profile, setProfile] = useState({
    location: {
      latitude: -6.8094279,
      longitude: 107.7001951,
    },
  });
  const [users, setUsers] = useState([]);

  const getUsers = async (userProfile) => {
    try {
      const data = await Fire.database().ref(`users`).once("value");
      const dataUsersRaw = Object.values(data.val());
      const dataUsers = dataUsersRaw.filter(
        (user) =>
          user.hasOwnProperty("location") && user.uid !== userProfile.uid
      );
      setUsers(dataUsers);
    } catch (error) {
      console.log(`PetaIsolasi, getUsers()`, error.message);
    }
  };

  useEffect(() => {
    getData("user").then((res) => {
      setProfile(res);
      getUsers(res);
    });
  }, []);

  return (
    <View s>
      <Text>Peta Isolasi</Text>
      <View style={styles.container}>
        <Maps userProfile={profile} users={users} />
        <View style={styles.noticeCont}>
          <Text style={styles.recfood}>
            Peta penyebaran ini berdasarkan data pasien yang mendaftar dan
            menggunakan aplikasi ini
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PetaIsolasi;

const styles = StyleSheet.create({
  noticeCont: {
    borderTopColor: "#0003",
    borderTopWidth: 1,
    paddingTop: 12,
    marginTop: 24,
  },
  recfood: {
    fontFamily: fonts.primary[600],
  },
  container: {
    paddingHorizontal: 24,
  },
});
