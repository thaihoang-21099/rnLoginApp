import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SplashScreen from '../screens/SplashSceen';
import LoginScreen from '../screens/LoginScreen';

const AppNavigator = createStackNavigator({
    SplashScreen:{
        screen:SplashScreen,
        navigationOptions:{
            header:null
        }
    },
    LoginScreen:{
        screen:LoginScreen,
        navigationOptions:{
            header:null
        }
    }
})

export default createAppContainer(AppNavigator);