import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from '../screens/SplashSceen';
import LoginScreen from '../screens/LoginScreen';
// import RegisterScreen1 from '../screens/RegisterScreen/Screen1';
// import RegisterScreen2 from '../screens/RegisterScreen/Screen2';
// import RegisterScreen3 from '../screens/RegisterScreen/Screen3';
// import RegisterScreen4 from '../screens/RegisterScreen/Screen4';
// import RegisterScreen6 from '../screens/RegisterScreen/Screen6';

import RegisterNavigator from './RegisterNavigator';

import Colors from '../native-base-theme/Colors';

const AppNavigator = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen,


    },
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions:{
            gesturesEnabled: false,
        }

    },
    RegisterScreen: {
        screen: RegisterNavigator,
    },

},{
    defaultNavigationOptions:{
        header:null
    }
})

export default createAppContainer(AppNavigator);
