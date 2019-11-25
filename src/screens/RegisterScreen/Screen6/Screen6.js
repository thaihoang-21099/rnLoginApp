import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import { View, Text, Button } from 'native-base';

import { StackActions, NavigationActions } from 'react-navigation';

import BaseComponent from '../../../component/BaseComponent';

import Images from '../../../assets';

import styles from './styles'

class Screen6 extends BaseComponent {

    _handleResetStackAction=()=>{
        const resetAction = StackActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({routeName: 'SplashScreen'})],
          });
          this.props.navigation.dispatch(resetAction);
    }

    _onPress=()=>{
        this.props.navigation.navigate('MainScreen')
        //this._handleResetStackAction();
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={Images.BG_SCREEN6} style={styles.imgBackground} />
                <Button onPress={this._onPress} login><Text>{this.getString('CONFIRM')}</Text></Button>
                <SafeAreaView style={{flex:0,}}/>
            </View>
        )
    }
}

export default Screen6;