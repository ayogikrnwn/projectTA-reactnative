import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header, Gap} from '../../components';
import {fonts} from '../../utils';

const SaranObat = () => {
  return (
    <View style={styles.page}>
      <Header title="Informasi Covid" type="dark-profile" />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Saran Pengobatan</Text>
          <Text style={styles.desc}>
            Untuk Isolasi Mandiri Pasien Positif Covid
          </Text>
          <Gap height={20} />
          <Text style={styles.descs}>
            Jika anda dinyatakan positif covid-19 dan harus menjalani isolasi
            mandiri. Anda harus melakukan pengobatan untuk mengobati gejala dan
            menaikan imun tubuh. Berikut Merupakan saran pengobatan untuk anda
            sebagai pasien positif covid-19
          </Text>
          <Gap height={20} />
          <View style={styles.border}></View>
          <Gap height={10} />
          <Text style={styles.titles}>1. Meminum Paracetamol</Text>
          <Text style={styles.descobat}>
            Menteri Kesehatan Prancis Olivier Veran mengatakan di Twitter untuk
            menghilangkan rasa sakit atau demam di rumah, lebih baik menggunakan
            parasetamol karena obat antiinflamasi yang dijual bebas dapat
            memperburuk virus corona.
          </Text>
          <Gap height={10} />
          <Text style={styles.titles}>2. Meminum Vitamin</Text>
          <Text style={styles.descobat}>
            Meminum vitamin ini sangat dibutuhkan karena untuk mempercepat
            proses penyembuhan. Vitamin yang dianjurkan untuk pasien isolasi
            mandiri dengan gejala ringan ini adalah Vitamin C seperti Tablet
            Vitamin C hisap dan tablet Vitamin D berupa suplemen makanan.
          </Text>
          <Gap height={10} />
          <Text style={styles.titles}>3. Berfikiran Positif</Text>
          <Text style={styles.descobat}>
            Ini merupakan hal yang sangat penting karena dengan berfikiran
            positif dapat menaikan imun tubuh sehingga proses penyembuhan
            covid-19 semakin cepat.
          </Text>
          <Gap height={10} />
          <Text style={styles.titles}>4. Makanan Bergizi</Text>
          <Text style={styles.descobat}>
            Dan jangan dilupakan harus makan makanan yang bergizi yang
            mengandung banyak vitamin untuk mempercepat proses penyembuhan.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SaranObat;

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
    textAlign: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  titles: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
  },
  descobat: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
  },
});
