import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import WhiteLabelConfig from '../../../../whitelabel/WhiteLabelConfig';

export const Button = () => {
  return (
    <TouchableOpacity
      onPress={() => console.log(BRAND)}
      style={[styles.button]}>
      <Text style={[styles.text]}>WL Red</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    backgroundColor: '#fff',
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  text: {
    fontSize: 16,
    color: WhiteLabelConfig.PRIMARY_COLOR,
  },
});
