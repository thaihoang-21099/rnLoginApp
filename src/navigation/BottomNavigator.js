import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { View, Text, } from 'react-native';

import BookingScreen from '../screens/MainGroup/BookingScreen';
import CODScreen from '../screens/MainGroup/CODScreen';
import SOAScreen from '../screens/MainGroup/SOAScreen';
import MenuScreen from '../screens/MainGroup/MenuScreen';

import AppHeader from '../component/layout/AppHeader'



const BOOKING = createStackNavigator({
    BookingScreen,
}, {
    defaultNavigationOptions: {
        header: <AppHeader/>
    }
})



const routeConfig = {
    BOOKING,
    COD: { screen: CODScreen, },
    'CREATE NEW': {
        screen: () => null,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: () => <Ionicons style={{ margin: 0, padding: 0 }} color='white' size={25} name='ios-add-circle' />,
            tabBarOnPress: () => {
                navigation.navigate('RegisterScreen')
            },
            tabBarLabel: () => <Text style={{ fontSize: 10, color: 'white' }}>CREATE NEW</Text>,
        }),
    },
    SOA: { screen: SOAScreen },
    MENU: { screen: MenuScreen }
}

const routeStyleConfig = {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        indicatorStyle: {
            height: '100%',
            backgroundColor: '#d22e2f'
        },
        activeTintColor: '#FFF',
        inactiveTintColor: '#f8aeae',
        showIcon: true,
        style: {
            backgroundColor: '#ee3435'

        },
        tabStyle: {
            padding: 0,
        },

        labelStyle: {
            fontSize: 10,
            fontWeight: '500',
            margin: 0,

        },
    },
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
            const { routeName } = navigation.state;
            let nameIcon = '';
            if (routeName === 'BOOKING') {
                nameIcon = 'ios-bookmarks'
            } else if (routeName == 'COD') {
                nameIcon = 'ios-cash'
            } else if (routeName == 'SOA') {
                nameIcon = 'ios-pricetags'
            } else {
                nameIcon = 'ios-menu'
            }

            return <Ionicons color={tintColor} size={30} name={nameIcon} />
        },

    })
}



const BottomNavigator = createMaterialTopTabNavigator(
    routeConfig
    , routeStyleConfig
)




export default BottomNavigator;