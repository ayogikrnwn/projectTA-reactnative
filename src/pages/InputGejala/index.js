import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ICAddGejala} from '../../assets';
import {
  CardGejala,
  CardHome,
  CardLC,
  CatLapor,
  Gap,
  Header,
  Star,
  Input,
  Button,
} from '../../components';
import {Picker} from '@react-native-picker/picker';
import StarRating from 'react-native-star-rating';
import {Fire} from '../../config';
import {fonts, getData} from '../../utils';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
import moment from 'moment';

const InputGejala = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [status, setStatus] = useState("Ringan");
  const [suhu, setSuhu] = useState("");
  const [oksigen, setOksigen] = useState("");
  const [kategori, setKategori] = useState([]);
  const [user, setUser] = useState({});
  const [score, setScore] = useState(1);


  useEffect(() => {
    getUser()
    getKategori()
  }, [navigation])

  function simpanGejala()
  {
      const id = user.uid
      const today = Date.now()
      const date = moment(today).format('YYYYMMDD')
      const datetime = moment(today).format('YYYYMMDDHHmm')
      const inputDate = moment(today).format('DD-MM-YYYY HH:mm')

      Fire.database().ref(`users/${id}/gejala/${date}/${datetime}`).set({
        tgl : inputDate,
        gejala : selectedLanguage,
        suhu : suhu,
        oksigen : oksigen,
        status : status
      }).then(res => {
        console.log(res)
        navigation.navigate('SuksesLapor')
      })

  }

  function getUser()
  {
    getData('user').then(res => {
      setUser(res)
    })
  }


  function getKategori()
  {
    Fire.database().ref('kategori_gejala').once('value').then(res => {
      if(res.val())
      {
        const kat = [];
        Object.keys(res.val()).map(item => {
          kat.push(res.val()[item])
        })
        setKategori(kat)
      }
    })
  }

  return (
    <View style={styles.container}>
      <Header
        title="Halaman Pelaporan"
        desc="Laporkan kondisimu hari ini"
        type="dark-profile"
      />

      <Gap height={19} />
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.title}>Gejala yang dialami</Text>
          <Picker
            style={{
              width: 300,
              height: 20,
              borderWidth: 1,
              marginTop: 10,
              marginBottom: 20,
            }}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            {kategori.length > 0 ? kategori.map((item,key) => {
              return (<Picker.Item label={item.category} value={item.category} />)
            }) : <Picker.Item label="Tidak ada data" value="" />}

          </Picker>
          <Text style={styles.title}>Gejala yang dialami</Text>

          <StarRatingBar
            readOnly={false}
            continuous={true}
            score={score}
            scoreText={status}
            onStarValueChanged={(score) => {
              setScore(score)
              if(score == 1)
              {
                setStatus('Ringan')
              }else if(score > 1 && score <=3)
              {
                setStatus('Sedang')
              }else{
                setStatus("Berat")
              }
            }}
          />
          <Gap height={15} />
          <Input onChangeText={text => setSuhu(text) } label="Suhu Badan (Opsional)" />
          <Gap height={15} />
          <Input onChangeText={text => setOksigen(text)} label="Tingkat Oksigen" />
          <Gap height={15} />
          <Button
            title="Continue"
            onPress={() => simpanGejala()}
          />
        </View>
      </View>
    </View>
  );
};

export default InputGejala;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
  },
  desc: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
  },
  catlapor: {
    flexDirection: 'row',
  },
  wrapperScroll: {},
  lc: {
    justifyContent: 'center',
  },
  head: {
    flexDirection: 'row',
  },
  form: {
    paddingTop: 30,
    flex: 1,
  },
});
