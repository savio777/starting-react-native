import { createAppContainer, createStackNavigator } from 'react-navigation'

import Main from './pages/main'

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
    }
})

export default createAppContainer(AppNavigator)