/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='#660066' />
      <View style={styles.sectionContainer}>
        <View style={styles.caixa} />
        <Text style={styles.sectionTitle}>Boa Noite</Text>
        <Text style={styles.sectionDescription}>Tudo bem?</Text>
        <View style={styles.caixa} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  caixa: {
    alignSelf: 'center',
    width: 120,
    height: 1,
    backgroundColor: '#660066'
  },
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  }
})

export default App