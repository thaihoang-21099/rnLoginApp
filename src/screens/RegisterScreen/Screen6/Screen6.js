import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import { View, Text, Button } from 'native-base';

import BaseComponent from '../../../component/BaseComponent';

import Images from '../../../assets';

import styles from './styles'

class Screen6 extends BaseComponent {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Image source={Images.BG_SCREEN6} style={styles.imgBackground} />
                <Button login><Text>{this.getString('CONFIRM')}</Text></Button>
            </SafeAreaView>
        )
    }
}

export default Screen6;