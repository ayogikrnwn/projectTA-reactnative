import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ICLogoCard, LOGO} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';
import CardDisable from './CardDisable';
import CardEnable from './CardEnable';

const CardLapor = ({onPress, type}) => {
  if (type === 'enable') {
    return <CardEnable onPress={onPress}/>
  }
  if (type === 'disable'){
    return <CardDisable onPress={onPress} />
  }

};

export default CardLapor;

const styles = StyleSheet.create({

});
