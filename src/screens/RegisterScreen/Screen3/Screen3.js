import React from 'react';

import { WebView, } from 'react-native-webview';

import { ScrollView, SafeAreaView } from 'react-native'

import { View, Text, Button } from 'native-base';

import { SafeAreView } from 'react-native';

//Components
import RadioButton from '../../../component/common/RadioButton';
import BaseComponent from '../../../component/BaseComponent';


import styles from './styles';

class Screen3 extends BaseComponent {
    state = {
        checked: false
    }

    onCheck = () => {
        this.setState({ checked: !this.state.checked })
    }
    onLogin = () => {
        const isClearing = this.props.navigation.state.params.isClearing
        this.props.navigation.navigate('RegisterScreen4',{isClearing});
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 0 }} />
                <View style={styles.container}>
                    <View style={styles.containerInner}>
                        <Text title>3.{this.getString('TITLE_SERVICE_CONTRACT')}</Text>
                        <View style={styles.webview}>
                            <WebView
                                source={{ uri: 'https://infinite.red' }}
                                automaticallyAdjustContentInsets={false} />
                        </View>

                        <RadioButton onCheck={this.onCheck} text={this.getString('TEXT_AGREEMENT')} check={this.state.checked} />
                        <Text italic style={{ paddingTop: 10, fontSize: 13 }}>
                            ({this.getString('TEXT_AGREEMENT_DETAIL')})
                    </Text>
                        <Button disabled={!this.state.checked} onPress={this.onLogin} style={styles.button} login><Text>{this.getString('CONFIRM')}</Text></Button>
                    </View>
                </View>
                <SafeAreaView style={{ flex: 0 }} />

            </View>

        )
    }
}

//<ItemCheckBox text="Tôi đã đọc và đồng ý" />
export default Screen3;