import { createAppContainer, createStackNavigator } from 'react-navigation'

import Main from './pages/main'
import Sobre from './pages/sobre'
import Login from './pages/login'
import Cadastrar from './pages/cadastrar'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#660066'
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1,
        textAlignVertical: 'center'
      }
    }
  },
  Sobre: {
    screen: Sobre,
    navigationOptions: {

    }
  },
  Login: {
    screen: Login,
    navigationOptions: {

    }
  },
  Cadastrar: {
    screen: Cadastrar,
    navigationOptions: {

    }
  }
})

export default createAppContainer(AppNavigator)