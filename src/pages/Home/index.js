import React, {useEffect, useState} from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import users from '../../api/users';
import {ICCovid, ICLiveChat, ICLogoCard, ICOption, ICPenyebaran} from '../../assets';
import {CardLapor, Gap, HeaderHome, RecFood, CardHome} from '../../components';
import {Fire} from '../../config';
import {fonts, getData} from '../../utils';

const Home = ({navigation}) => {
  const [{uid}, setstate] = useState({
    uid: '',
  });

  // const [{isEnabled}, setEnabled] = useState({isEnabled : true})
  const [{refreshing}, setRefreshing] = useState({refreshing: false});

  // useEffect(() => {
  //   getData('user').then((res) => {
  //     setstate(res);
  //   });

  //   users.cekData(uid , data => {
  //     if(data.val())
  //     {
  //       setEnabled({
  //         isEnabled : false
  //       })
  //     }else{
  //       setEnabled({
  //         isEnabled : true
  //       })
  //     }
  //   } ,  err => {
  //   })
  // }, [])

  var _onRefresh = () => {
    setRefreshing({
      refreshing: true,
    });
    getData('user').then((res) => {
      setstate(res);
    });

    users.cekData(
      uid,
      (data) => {
        if (data.val()) {
          setEnabled({
            isEnabled: false,
          });
        } else {
          setEnabled({
            isEnabled: true,
          });
        }

        setRefreshing({
          refreshing: false,
        });
      },
      (err) => {
        setRefreshing({
          refreshing: false,
        });
      },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.head}>
          <HeaderHome />
          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate('EditProfil')}>
            <ICOption />
          </TouchableOpacity>
        </View>

        <Gap height={24} />

        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />
          }
          showsVerticalScrollIndicator={false}>
          <CardLapor
            onPress={() => navigation.navigate('Laporan')}
            type="enable"
          />
          <Gap height={19} />
          <Text style={styles.recfood}>Informasi Covid-19</Text>
          <Text style={styles.descfood}>Dapatkan Informasi terbaru</Text>
          <Gap height={26} />
          <CardHome img={ICCovid} title="Informasi Covid-19" desc="Jenis Gejala dan Saran" descs="Pengobatan" />
          <CardHome img={ICPenyebaran} title="Peta Pasien Isolasi" desc="Pasien Isolasi Di Sekitar Anda" onPress={()=> navigation.navigate('PetaIsolasi')} />
          <CardHome img={ICLiveChat} title="Konsultasi" desc="Konsultasi dengan Satgas" descs="Via Live Chat" />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 30,

    flex: 1,
  },
  content: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  recfood: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
  },
  descfood: {
    fontFamily: fonts.primary[400],
    fontSize: 11,
  },
  head: {
    flexDirection: 'row',
  },
  option: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
