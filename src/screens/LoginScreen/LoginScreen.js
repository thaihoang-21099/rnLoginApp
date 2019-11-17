/* eslint-disable no-alert, no-console */
import React from 'react';
import BaseComponent from '../../component/BaseComponent';

import { StyleSheet, Image, TextInput, SafeAreaView, KeyboardAvoidingView } from 'react-native';


import Images from '../../assets/';
import Logo from '../../component/Logo';

import { View, Button, Text } from 'native-base';

import styles from './styles';


class LoginScreen extends BaseComponent {
    constructor() {
        super();
        this.state = {
            isFocus: false
        }
    }

    onLogin = ()=>{
        this.props.navigation.navigate('RegisterScreen1');
    }

    handlerFocus = () => {
        this.setState({ isFocus: !this.state.isFocus })
    };

    render() {
        const { isFocus } = this.state
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
                <SafeAreaView style={styles.container}>
                    <View background>
                        <View style={styles.backgroundTop} />
                        {isFocus ?
                            <View style={styles.backgroundDown} />
                            :
                            <Image style={styles.triangleDown} source={Images.TRIANGLE_DOWN} resizeMode="stretch" />
                        }
                    </View>
                    <View style={styles.containerInner}>
                        <View style={styles.blockTop}>
                            <Logo />
                            <View input >
                                <Image style={styles.iconInput} source={Images.ICON_PHONE} />
                                <TextInput placeholder={this.getString('PLACEHOLDER_USERNAME')}></TextInput>
                            </View>
                            <View input >
                                <Image style={styles.iconInput} source={Images.ICON_PHONE} />
                                <TextInput placeholder={this.getString('PLACEHOLDER_PASSWORD')}></TextInput>
                            </View>
                            <View style={{ alignItems: 'flex-end', marginBottom: 20 }}>
                                <Text note>{this.getString('FORGOT_PASSWORD')}</Text>
                            </View>
                            <Button login onPress={this.onLogin}><Text>{this.getString('LOGIN')}</Text></Button>
                        </View>
                        <View style={styles.blockDown}>
                            <Button style={{ backgroundColor: '#0028a5' }} socialLogin>
                                <Image style={styles.iconSocial} source={Images.ICON_FB}/>
                                <Text>{this.getString('LOGIN_FB')}</Text>
                            </Button>
                        
                            <Button socialLogin>
                                <Image style={styles.iconSocial} source={Images.ICON_GMAIL}/>
                                <Text>{this.getString('LOGIN_GG')}</Text>
                            </Button>
                            <Text style={{color:'black', marginTop:35,textAlign:'center'}}>{this.getString('NO_ACCOUNT')} <Text style={{color:'red'}}>{this.getString('SIGNUP_NOW')}</Text></Text>
                        </View>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}

export default LoginScreen;

