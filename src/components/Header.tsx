import React from 'react';
import {StyleSheet, Text} from 'react-native';
import WhiteLabelConfig from '../../whitelabel/WhiteLabelConfig';

interface Props {
  title: string;
}

export const Header = ({title}: Props) => {
  return <Text style={[styles.title]}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 16,
    color: WhiteLabelConfig.PRIMARY_TEXT_COLOR,
  },
});
