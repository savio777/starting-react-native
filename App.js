/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
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
        <Text style={styles.sectionTitle}>Boa Noite !</Text>
        <Text style={styles.sectionDescription}>Tudo bem ?</Text>
        <View style={styles.caixa} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  caixa: {
    textAlign: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#660066'
  },
  sectionContainer: {
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
