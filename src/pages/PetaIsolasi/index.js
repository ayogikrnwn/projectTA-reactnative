import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ICBackNavy } from "../../assets";
import { CardFaskes, Gap, Maps } from "../../components";
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
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity>
        <ICBackNavy />
        </TouchableOpacity>
        <Text style={styles.txthead}>Informasi Faskes</Text>
      </View>
   
      <View style={styles.container}>
        <Maps userProfile={profile} users={users} />
        <View style={styles.noticeCont} />
         <CardFaskes nama="Puskesmas Jatinunggal" alamat="Jatinunggal Sumedang" tel="119" />
         <Gap height={20} />
         <CardFaskes nama="Puskesmas Wado" alamat="Jatinunggal Sumedang" tel="119" />
         <Gap height={20} />
         <CardFaskes nama="Puskesmas Sumedang Utara" alamat="Jatinunggal Sumedang" tel="119" />
      </View>
    </View>
  );
};

export default PetaIsolasi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  },  
  header: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingTop: 30,

    alignItems: 'center',
  },
  txthead:{
    fontFamily: fonts.primary[600],
    fontSize: 18,
    paddingLeft: 55,
    textAlign: 'center',
  },
  noticeCont: {
    borderColor: "#0003",
    borderTopWidth: 1,
    paddingTop: 12,
    marginTop: 24,
  },
  recfood: {
    fontFamily: fonts.primary[600],
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 50,
    
  },
});
