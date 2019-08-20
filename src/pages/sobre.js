import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

import logo from '../assets/img/logoA.png'

class Sobre extends Component {
  static navigationOptions = () => ({
    title: 'Sobre'
  })

  render() {
    return (
      <>
        <View style={estilo.container}>
          <View style={estilo.caixa} />
          <Image style={estilo.logo} source={logo} />
          <View style={estilo.caixa} />
          <Text style={estilo.titulo}>Aplicação desenvolvida por Sávio P. Fontes</Text>
          <View style={estilo.quebra} />
          <Text style={estilo.subtitulo}>
            Com o objetivo de adquirir conhecimento sobre react-native.
          </Text>
        </View>
      </>
    )

  }
}

const estilo = StyleSheet.create({
  caixa: {
    alignSelf: 'center',
    width: 120,
    height: 5,
    backgroundColor: '#660066'
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center'
  },
  quebra: {
    alignSelf: 'center',
    width: 370,
    height: 2,
    backgroundColor: '#660066'
  },
  container: {
    marginTop: 25,
    paddingHorizontal: 24,
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center'
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center'
  }
})

export default Sobre