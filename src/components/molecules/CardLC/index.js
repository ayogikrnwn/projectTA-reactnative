import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICInput, ICLogoCard, IconDoctor} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const CardLC = ({text, disable, desc, icon, onPress}) => {
  const Icon = () => {
    if (icon === 'lapor') {
      return <ICLogoCard />;
    }
    if (icon === 'inputmanual') {
      return <ICInput />;
    }

    return <IconEditProfile />;
  };


  return (
    <TouchableOpacity style={styles.disableBg} onPress={onPress}>
      <View style={styles.icon}>{icon ? <ICLogoCard /> : <ICInput />}</View>
      <View style={styles.text}>
        <View style={styles.day}>
          <Text style={styles.isolate}>{text}</Text>
          <Text style={styles.dayisolate}>{desc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardLC;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#ECECEC',
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 311,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    paddingLeft: 14,
    justifyContent: 'center',
  },
  icon: {},
  day: {},
  isolate: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
  },
  dayisolate: {
    fontFamily: fonts.primary[800],
    fontSize: 18,
  },
  disableBg: {
    padding: 15,
    backgroundColor: colors.button.disable.background,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 311,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
