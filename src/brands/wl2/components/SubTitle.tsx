import React from 'react';
import {StyleSheet, Text} from 'react-native';
import WhiteLabelConfig from '../../../../whitelabel/WhiteLabelConfig';

export const SubTitle = () => {
  return (
    <Text style={[styles.subTitle]}>
      Este é um componente específico do WL Blue
    </Text>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    textAlign: 'center',
    fontSize: 12,
    color: WhiteLabelConfig.PRIMARY_TEXT_COLOR,
  },
});
