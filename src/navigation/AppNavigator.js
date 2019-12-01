import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View } from 'react-native';

import AppHeader from '../component/layout/AppHeader';


import SplashScreen from '../screens/SplashSceen';
import LoginScreen from '../screens/LoginScreen';


import RegisterNavigator from './RegisterNavigator';

import AccountInfoScreen from '../screens/AccountInfoGroup/AccountInfoScreen';


import BottomNavigator from './BottomNavigator';


const AppNavigator = createStackNavigator({
    SplashScreen: {
        screen: AccountInfoScreen,
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
