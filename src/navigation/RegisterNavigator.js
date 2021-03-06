import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import RegisterScreen1 from '../screens/RegisterScreen/Screen1';
import RegisterScreen2 from '../screens/RegisterScreen/Screen2';
import RegisterScreen3 from '../screens/RegisterScreen/Screen3';
import RegisterScreen4 from '../screens/RegisterScreen/Screen4';
import RegisterScreen6 from '../screens/RegisterScreen/Screen6';

import CityScreen from '../screens/AddressScreen/CityScreen';
import DistrictScreen from '../screens/AddressScreen/DistrictScreen';
import WardScreen from '../screens/AddressScreen/WardScreen';


import AppHeader from '../component/layout/AppHeader';



import Colors from '../native-base-theme/Colors';
import I18n from '../locale';

const TITLE_SERVICE_REGISTER = I18n.t('TITLE_SERVICE_REGISTER');

const RegisterNavigator = createStackNavigator({
    RegisterScreen1: {
        screen: RegisterScreen1,
        
    },
    RegisterScreen2: {
        screen: RegisterScreen2,
        
    },
    CityScreen:{
        screen:CityScreen
    },
    DistrictScreen:{
        screen:DistrictScreen
    },
    WardScreen:{
        screen:WardScreen,
    },
   
    RegisterScreen3: {
        screen: RegisterScreen3,
       
    },
    RegisterScreen4: {
        screen: RegisterScreen4,
    },
    RegisterScreen6: {
        screen: RegisterScreen6,
    },
},{
    defaultNavigationOptions:({ navigation,screenProps })=>({

         header:<AppHeader 
                    onPressBack={()=>navigation.pop()}
                    title={TITLE_SERVICE_REGISTER}
                    />
    })
})

export default RegisterNavigator;

