/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native'

class Main extends Component {
  static navigationOptions = () => ({
    title: 'Teste :)'
  })

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor='#660066' />
        <View style={styles.sectionContainer}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.textoBotao}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => this.props.navigation.navigate('Cadastrar')} >
            <Text style={styles.textoBotao}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.baixo}>
          <Button
            title='Sobre'
            onPress={() => this.props.navigation.navigate('Sobre')}
          />
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  botao: {
    margin: 5,
  },
  textoBotao: {
    backgroundColor: '#660066',
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  baixo: {
    alignSelf: 'baseline',
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 180,
    marginBottom: 10
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
