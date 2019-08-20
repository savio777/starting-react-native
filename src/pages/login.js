import React, { Component } from 'react'

import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = { email: '', senha: '' }
  }

  static navigationOptions = () => ({
    title: 'Login'
  })

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor='#660066'/>
        <View style={estilo.container}>
          <TextInput
            placeholder='Email'
            onChangeText={(texto) => this.setState({ email: texto })}
            value={this.state.email} />
          <TextInput
            keyboardType='visible-password'
            placeholder='Senha'
            onChangeText={(texto) => this.setState({ senha: texto })}
            value={this.state.senha}
          />
          <TouchableOpacity>
            <Text style={estilo.botao}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  input: {
    borderColor: '#380138',
    margin: 10
  },
  botao: {
    backgroundColor: '#380138',
    color: 'white',
    textAlign: 'center'
  }
})

export default Login
