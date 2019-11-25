/* eslint-disable no-alert, no-console */
import React from 'react';
import BaseComponent from '../../component/BaseComponent';
import AppHeader from '../../component/layout/AppHeader';
import Colors from '../../native-base-theme/Colors';

import { StatusBar, Image, TextInput, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';


import Images from '../../assets/';
import Logo from '../../component/layout/Logo';

import { View, Button, Text } from 'native-base';

import styles from './styles';


class LoginScreen extends BaseComponent {
    inputs = {}

    static navigationOptions = ({ navigation }) => ({
        //header: null
        title:'Hello'
    });

    _onLogin = () => {
        this.props.navigation.navigate('MainScreen');
    }

    _onRegister = () => {
        this.props.navigation.navigate('RegisterScreen');
    }

    _focusTheField = (id) => {
        this.inputs[id].focus();
    }

    _renderSocialButton = (img, text, styleA) => {
        return (
            <Button style={styleA} socialLogin>
                <Image resizeMode="contain" style={styles.iconSocial} source={img} />
                <Text uppercase={false}>{text}</Text>
            </Button>
        )
    }

    _renderInput = (img,placeholder,onSubmit) => {
        return (
            <View input >
                <Image style={styles.iconInput} source={Images.ICON_PHONE} />
                <TextInput
                    blurOnSubmit={false}
                    returnKeyType={'next'}
                    onSubmitEditing={() => { onSubmit }}
                    style={styles.textInput}
                    placeholderTextColor={Colors.TEXT_GRAY_LIGHT}
                    placeholder={this.getString('PLACEHOLDER_USERNAME')} />
            </View>
        )
    }
    render() {
        return (

            <ScrollView style={{ flex: 1 }} alwaysBounceVertical={false} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <SafeAreaView style={{ flex: 0 }} />
                    <StatusBar backgroundColor={Colors.BG_RED} barStyle="light-content" />
                    <View background>
                        <View style={styles.backgroundTop} />
                        <Image style={styles.triangleDown} source={Images.TRIANGLE_DOWN} resizeMode="stretch" />
                    </View>

                    <View style={styles.containerInner}>
                        <View style={styles.blockTop}>
                            <Logo />
                            <View input >
                                <Image style={styles.iconInput} source={Images.ICON_PHONE} />
                                <TextInput
                                    blurOnSubmit={false}
                                    returnKeyType={'next'}
                                    onSubmitEditing={() => { this._focusTheField('input2'); }}
                                    style={styles.textInput}
                                    placeholderTextColor={Colors.TEXT_GRAY_LIGHT}
                                    placeholder={this.getString('PLACEHOLDER_USERNAME')} />
                            </View>
                            
                            
                            <View input >
                                <Image style={styles.iconInput} source={Images.ICON_KEY} />
                                <TextInput
                                    ref={input => { this.inputs['input2'] = input }}
                                    onSubmitEditing={this._onLogin}
                                    style={styles.textInput}
                                    placeholderTextColor={Colors.TEXT_GRAY_LIGHT}
                                    placeholder={this.getString('PLACEHOLDER_PASSWORD')} />
                            </View>
                            <View style={{ alignItems: 'flex-end', marginBottom: 20 }}>
                                <Text note>{this.getString('FORGOT_PASSWORD')}</Text>
                            </View>
                            <Button ref="login" login onPress={this._onLogin}><Text>{this.getString('LOGIN')}</Text></Button>
                        </View>
                        <View style={styles.blockDown}>
                            {this._renderSocialButton(Images.ICON_GMAIL, this.getString('LOGIN_FB'), { backgroundColor: "#0028a5" })}
                            {this._renderSocialButton(Images.ICON_GMAIL, this.getString('LOGIN_GG'))}

                            <TouchableOpacity onPress={this._onRegister}>
                                <Text style={{ color: 'black', marginTop: 20, textAlign: 'center' }}>
                                    {this.getString('NO_ACCOUNT')}
                                    <Text style={{ color: 'red' }}>
                                        {this.getString('SIGNUP_NOW')}
                                    </Text>
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
export default LoginScreen;

