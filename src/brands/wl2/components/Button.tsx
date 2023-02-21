import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import WhiteLabelConfig from '../../../../whitelabel/WhiteLabelConfig';

export const Button = () => {
  return (
    <TouchableOpacity
      onPress={() => console.log(BRAND)}
      style={[styles.button]}>
      <Text style={[styles.text]}>WL Blue</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: WhiteLabelConfig.PRIMARY_COLOR,
  },
});
