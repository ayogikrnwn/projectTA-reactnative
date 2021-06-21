import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import { Fire } from '../../config';
import {colors} from '../../utils';

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
      })
    
  };

  return (
     
    <View style={styles.page}>
      <Header title=" Profile"  onPress={() => navigation.goBack()} />
      {admins.map((admin) => {
          return (
              <>
            <Profile
            name={admin.data.name}
           
          />
          <Gap height={10} />
          <ProfileItem
            label="Alamat "
            value={admin.data.address}
          />
         
    
          <Gap height={23} />
          <View style={styles.action}>
            <Button
              title="Start Consultation"
              onPress={() => navigation.navigate('LiveChat', admin)}
            />
          </View>
                </>
          )
     
         
        })}
    </View>
  
  );
};

export default ProfilAdmin;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  action: {paddingHorizontal: 40, paddingTop: 23},
});
