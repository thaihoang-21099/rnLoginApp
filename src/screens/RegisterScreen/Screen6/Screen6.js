import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import { View, Text, Button } from 'native-base';

import {hanldeResetStackAction} from '../../../helper';

import BaseComponent from '../../../component/BaseComponent';

import Images from '../../../assets';

import styles from './styles'

class Screen6 extends BaseComponent {


    _onPress=()=>{
        hanldeResetStackAction(this.props.navigation,'SplashScreen');
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