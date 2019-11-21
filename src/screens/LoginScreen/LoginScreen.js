/* eslint-disable no-alert, no-console */
import React from 'react';
import BaseComponent from '../../component/BaseComponent';
import AppHeader from '../../component/layout/AppHeader';
import Colors from '../../native-base-theme/Colors';

import { StatusBar, Image, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native';


import Images from '../../assets/';
import Logo from '../../component/layout/Logo';

import { View, Button, Text } from 'native-base';

import styles from './styles';


class LoginScreen extends BaseComponent {
    inputs={}

    _onLogin = () => {
        this.props.navigation.navigate('RegisterScreen1');
    }

    _focusTheField = (id) => {
        this.inputs[id].focus();
      }

    render() {
        return (

            <ScrollView style={{ flex: 1 }} alwaysBounceVertical={false} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                <SafeAreaView style={{flex:0}}/>
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
                            <Button style={{ backgroundColor: '#0028a5' }} socialLogin>
                                <Image resizeMode="contain" style={styles.iconSocial} source={Images.ICON_FB} />
                                <Text uppercase={false}>{this.getString('LOGIN_FB')}</Text>
                            </Button>

                            <Button socialLogin>
                                <Image resizeMode="contain" style={styles.iconSocial} source={Images.ICON_GMAIL} />
                                <Text uppercase={false}>{this.getString('LOGIN_GG')}</Text>
                            </Button>
                            <Text style={{ color: 'black', marginTop: 20, textAlign: 'center' }}>{this.getString('NO_ACCOUNT')} <Text style={{ color: 'red' }}>{this.getString('SIGNUP_NOW')}</Text></Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default LoginScreen;

