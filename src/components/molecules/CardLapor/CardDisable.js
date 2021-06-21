import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ICLogoCard, LOGO} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const CardDisable = ({disable, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} disabled={true}>
      <ICLogoCard />
      <View style={styles.text}>
        <View style={styles.day}>
          <Text style={styles.isolate}>Isolasi Mandiri Hari Ke-</Text>
          <Text style={styles.dayisolate}>1</Text>
        </View>
        <Gap height={5} />
        <Text style={styles.lapor}>Yuk Laporkan</Text>
        <Text style={styles.desc}>Kondisimu Hari Ini</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardDisable;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#A5A5A5',
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 283,
    height: 135,
    flexDirection: 'row',
  },
  text: {
    paddingLeft: 14,
  },
  day: {
    flexDirection: 'row',
  },
  isolate: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
  },
  dayisolate: {
    fontFamily: fonts.primary[800],
    fontSize: 14,
  },
  lapor: {
    fontFamily: fonts.primary[600],
    fontSize: 17,
  },
  desc: {
    fontFamily: fonts.primary[600],
    fontSize: 17,
  },
});
