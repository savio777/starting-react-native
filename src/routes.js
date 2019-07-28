import {createAppContainer, createStackNavigator} from 'react-navigation'

import App from './pages/main'

const AppNavigator = createStackNavigator({
    Home: {
        screen: App
    }
})

export default createAppContainer(AppNavigator)