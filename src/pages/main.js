/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'

import logo from '../assets/img/logoA.png'

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native'

class Main extends Component {
  static navigationOptions = (navigation) => ({
    title: 'Teste :)',
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('New')}>
        <Text style={styles.textoOi}>oi</Text>
      </TouchableOpacity>
    ),
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate('New')}>
        <Text style={styles.textoOi}>oi</Text>
      </TouchableOpacity>
    )
  })

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor='#660066' />
        <View style={styles.sectionContainer}>
          <View style={styles.caixa} />
          <Image style={styles.logo} source={logo} />
          <View style={styles.caixa} />
          <Text style={styles.sectionTitle}>Boa Noite</Text>
          <Text style={styles.sectionDescription}>Tudo bem?</Text>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  textoOi:{
    color: '#ffffff'
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center'
  },
  caixa: {
    alignSelf: 'center',
    width: 120,
    height: 5,
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
  },
  sectionDescription: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#4d4a4a',
  }
})

export default Main
