import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View } from 'react-native';

import AppHeader from '../component/layout/AppHeader';


import SplashScreen from '../screens/SplashSceen';
import LoginScreen from '../screens/LoginScreen';


import RegisterNavigator from './RegisterNavigator';


import BottomNavigator from './BottomNavigator';


const AppNavigator = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen,
    },
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions:{
            // header:null
        }
    },
    RegisterScreen: {
        screen: RegisterNavigator,
    },
    MainScreen:{
        screen:BottomNavigator,
        navigationOptions:{
            gesturesEnabled: false,
        }
    }
},{
    defaultNavigationOptions:{
        header: <View/>
    }
})

export default createAppContainer(AppNavigator);
