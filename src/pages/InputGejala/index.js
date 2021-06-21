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
import {fonts} from '../../utils';

const InputGejala = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

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
            <Picker.Item label="Demam" value="demam" />
            <Picker.Item label="Flu" value="Flu" />
          </Picker>
          <Text style={styles.title}>Gejala yang dialami</Text>

          <Star />
          <Gap height={15} />
          <Input label="Suhu Badan (Opsional)" />
          <Gap height={15} />
          <Input label="Tingkat Oksigen" />
          <Gap height={15} />
          <Button
            title="Continue"
            onPress={() => navigation.navigate('SuksesLapor')}
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
