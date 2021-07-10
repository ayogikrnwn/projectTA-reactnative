import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILBatuk, ILDemam, ILSP, ILStrong} from '../../../assets';
import {colors, fonts} from '../../../utils';

const CatLapor = ({category, onPress}) => {
  const Icon = () => {
    if (category == 'Demam') {
      return <ILDemam style={styles.illustration} />;
    } 
    if (category == 'Batuk') {
      return <ILBatuk style={styles.illustration} />;
    }
    if (category == 'Sakit Perut') {
      return <ILSP style={styles.illustration} />;
    }
    if (category == 'Tidak Ada Gejala') {
      return <ILStrong style={styles.illustration} />;
    }
    return <ILStrong style={styles.illustration} />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>{category}</Text>
      {/* <Text style={styles.category}></Text> */}
    </TouchableOpacity>
  );
};

export default CatLapor;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 120,
    height: 160,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[800],
    color: colors.text.third,
   
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
