import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {ICCall, ICPenyebaran} from '../../../assets';
import { colors, fonts } from '../../../utils';
import {Button} from '../../atoms';

const CardFaskes = ({nama, alamat, onPress, img, tel}) => {
  return (
    <View style={styles.container}>
      <Image source={ICPenyebaran} style={{width: 50, height: 50}} />
      <View style={styles.textloc}>
        <Text>{nama}</Text>
        
        <Text style={styles.alamat}>{alamat}</Text>
   
        <Text
          onPress={() => {
            Linking.openURL('tel:{tel}');
          }} style={styles.call}>
         {tel}
        </Text>
      </View>
    </View>
  );
};

export default CardFaskes;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
   
  },
  textloc: {
    marginTop: 5,

   
  },
  alamat: {
  
  
    
  },
  call: {
      color: 'blue',
      fontFamily: fonts.primary[600]
  },
});
