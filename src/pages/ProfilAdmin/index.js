import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ICSatgas} from '../../assets';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {Fire} from '../../config';
import {colors, fonts} from '../../utils';

const ProfilAdmin = ({navigation}) => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    getTopRatedDoctors();
  });

  const getTopRatedDoctors = () => {
    Fire.database()
      .ref('adminweb/')
      //   .orderByChild('rate')
      //   .limitToLast(3)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((key) => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setAdmins(data);
        }
      });
  };

  return (
    <View style={styles.page}>
      <Header title=" Profile" onPress={() => navigation.goBack()} />
      {admins.map((admin) => {
        return (
          <>
            <Profile name={admin.data.name} photo={ICSatgas} />
            <Gap height={10} />
            <ProfileItem label="Alamat " value={admin.data.address} />
            <View style={styles.faq}>
              <Text style={styles.descfaq}>
                Sebelum melakukan konsultasi, disarankan untuk membaca FAQ
                terlebih dahulu
              </Text>
              <View style={styles.action}>

              <Button
                title="Pertanyaan yang Sering Ditanyakan"
                onPress={() => navigation.navigate('FaqPage', admin)}
              />
             
              </View>
              <Gap height={20} />
              <View style={styles.border}></View>
            </View>

            <Gap height={23} />
            <View style={styles.action2}>
              <Button
                title="Start Consultation"
                onPress={() => navigation.navigate('LiveChat', admin)}
              />
            </View>
          </>
        );
      })}
    </View>
  );
};

export default ProfilAdmin;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  faq: {padding: 20,},
  descfaq: {fontFamily: fonts.primary[400], textAlign: 'center'},
  action: {paddingHorizontal: 40, paddingTop: 23, justifyContent: 'flex-end'},
  action2: {paddingHorizontal: 40, paddingTop: 23},
  border: {borderWidth: 1, flex: 1, borderColor: colors.border}
});
