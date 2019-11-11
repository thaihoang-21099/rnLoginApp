/* eslint-disable no-alert, no-console */
import React from 'react';

import { View, StyleSheet, Image, TextInput, SafeAreaView, KeyboardAvoidingView } from 'react-native';


import Images from '../../assets/';
import Logo from '../../component/Logo';

import { View as ViewNative, Button, Text } from 'native-base';

import styles from './styles';

import I18N from '../../local'

class LoginScreen extends React.Component {
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
                    <ViewNative background>
                        <View style={styles.backgroundTop} />
                        {isFocus ?
                            <View style={styles.backgroundDown} />
                            :
                            <Image style={styles.triangleDown} source={Images.TRIANGLE_DOWN} resizeMode="stretch" />
                        }
                    </ViewNative>
                    <View style={styles.containerInner}>
                        <View style={styles.blockTop}>
                            <Logo />
                            <ViewNative input >
                                <Image style={styles.iconInput} source={Images.ICON_PHONE} />
                                <TextInput  placeholder={I18N.t('PLACEHOLDER_USERNAME')}></TextInput>
                            </ViewNative>
                            <ViewNative input >
                                <Image style={styles.iconInput} source={Images.ICON_PHONE} />
                                <TextInput placeholder={I18N.t('PLACEHOLDER_PASSWORD')}></TextInput>
                            </ViewNative>
                            <View style={{ alignItems: 'flex-end', marginBottom: 20 }}>
                                <Text note>{I18N.t('TEXT_FORGOT_PASSWORD')}</Text>
                            </View>
                            <Button login onPress={this.onLogin}><Text>{I18N.t('TEXT_LOGIN')}</Text></Button>
                        </View>
                        <View style={styles.blockDown}>
                            <Button style={{ backgroundColor: '#0028a5' }} socialLogin>
                                <Image style={styles.iconSocial} source={Images.ICON_FB}/>
                                <Text>{I18N.t('TEXT_LOGIN_FB')}</Text>
                            </Button>
                        
                            <Button socialLogin>
                                <Image style={styles.iconSocial} source={Images.ICON_GMAIL}/>
                                <Text>{I18N.t('TEXT_LOGIN_GG')}</Text>
                            </Button>
                            <Text style={{color:'black', marginTop:35,textAlign:'center'}}>{I18N.t('TEXT_NO_ACCOUNT')} <Text style={{color:'red'}}>{I18N.t('TEXT_SIGNUP_NOW')}</Text></Text>
                        </View>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}



export default LoginScreen;

{/* <TextInput
placeholder="FirstTextInput"
returnKeyType={"next"}
onSubmitEditing={() => { this.secondTextInput.focus(); }}
blurOnSubmit={false}
/>

<TextInput
ref={(input) => { this.secondTextInput = input; }}
placeholder="secondTextInput"
/> */}

{/* <View style={styles.background}>
<View style={styles.backgroundTop} />
{isFocus ?
    <View style={styles.backgroundDown} />
    :
    <Image style={styles.triangleDown} source={Images.TRIANGLE_DOWN} resizeMode="stretch" />
}
</View> */}