import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from '../screens/SplashSceen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen1 from '../screens/RegisterScreen/Screen1';
import RegisterScreen2 from '../screens/RegisterScreen/Screen2';
import RegisterScreen3 from '../screens/RegisterScreen/Screen3';


import Colors from '../native-base-theme/Color';

const AppNavigator = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen,
        navigationOptions: {
            header: null
        }
    },
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    RegisterScreen1: {
        screen: RegisterScreen1,
        navigationOptions: {
            title: 'Dang ky dich vu',
            headerStyle: {
                backgroundColor: Colors.BG_RED,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }
    },
    RegisterScreen2: {
        screen: RegisterScreen2,
        navigationOptions: {
            title: 'Dang ky dich vu',
            headerStyle: {
                backgroundColor: Colors.BG_RED,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }
    },
    RegisterScreen3: {
        screen: RegisterScreen3,
        navigationOptions: {
            title: 'Dang ky dich vu',
            headerStyle: {
                backgroundColor: Colors.BG_RED,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }
    },
})

export default createAppContainer(AppNavigator);