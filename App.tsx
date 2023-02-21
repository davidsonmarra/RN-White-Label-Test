/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import './environments';
import {Image, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';

import whiteLabelConfig from './whitelabel/WhiteLabelConfig';
import {Header} from '@genericComponents';
import {SubTitle} from '@components';
import {Banner} from '@assets';

function App(): JSX.Element {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar barStyle={'dark-content'} />
      <Header title={BRAND} />
      <SubTitle />
      <Image source={Banner} />
      <Text style={[styles.title]}>{whiteLabelConfig.APP_NAME}</Text>
      <Text style={[styles.text]}>{whiteLabelConfig.GREETING_TEXT}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: whiteLabelConfig.PRIMARY_COLOR,
    paddingVertical: 26,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: whiteLabelConfig.PRIMARY_TEXT_COLOR,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: whiteLabelConfig.PRIMARY_TEXT_COLOR,
  },
});

export default App;
