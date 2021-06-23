import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header, Gap} from '../../components';
import {fonts} from '../../utils';

const JenisGejala = () => {
  return (
    <View style={styles.page}>
      <Header title="Informasi Covid" type="dark-profile" />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Jenis Gejala</Text>
          <Gap height={20} />
          <Text style={styles.desc}>Gejala di Minggu Pertama</Text>
          <Gap height={10} />
          <Text style={styles.descs}>
            Hilangnya kemampuan mengecap rasa atau mencium aroma
          </Text>
          <Text style={styles.descs}>Hidung tersumbat</Text>
          <Text style={styles.descs}>Mata merah</Text>
          <Text style={styles.descs}>Sakit tenggorokan</Text>
          <Text style={styles.descs}>Sakit Kepala</Text>
          <Text style={styles.descs}>Nyeri otot atau sendi</Text>
          <Text style={styles.descs}>Ruam Kulit</Text>
          <Text style={styles.descs}>Sakit Kepala</Text>
          <Text style={styles.descs}>
            Gangguan pencernaan, seperti mual, muntah, atau diare
          </Text>
          <Text style={styles.descs}>Hidung tersumbat</Text>
          <Text style={styles.descs}>Menggigil</Text>
          <Text style={styles.descs}>Kurang nafsu makan</Text>
          <Gap height={10} />
          <View style={styles.border}></View>
          <Gap height={20} />
          <Text style={styles.titles}>
            **JIka anda mengalami salah satu atau beberapa gejala diatas
            disarankan untuk segera melakukan test (rapid test, test antigen,
            swab test, GeNose test, dll. Di puskesmas, klinik atau
            apotekterdekat)
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default JenisGejala;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
  },
  desc: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
  },
  descs: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
  },
  border: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  titles: {
    fontFamily: fonts.primary[500],
    fontSize: 18,
    textAlign: 'center',
  },
});
