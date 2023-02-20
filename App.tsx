/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import whiteLabelConfig from './whitelabel/WhiteLabelConfig';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        style={[styles.container]}
        contentInsetAdjustmentBehavior="automatic">
        <Text style={[styles.title]}>{whiteLabelConfig.APP_NAME}</Text>
        <Text style={[styles.text]}>{whiteLabelConfig.GREETING_TEXT}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteLabelConfig.PRIMARY_COLOR,
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
