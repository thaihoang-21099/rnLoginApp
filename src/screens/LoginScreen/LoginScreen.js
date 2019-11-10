import React from 'react';

import { View, StyleSheet, Image, TextInput, SafeAreaView, KeyboardAvoidingView } from 'react-native';


import Images from '../../assets/';
import Logo from '../../component/Logo';

import { View as ViewNative, Button, Text } from 'native-base'

//import styles from './styles'
import styles from './styles';
class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            isFocus: false
        }
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
                                <TextInput  placeholder="Nhập số điện thoại/email"></TextInput>
                            </ViewNative>
                            <ViewNative input >
                                <Image style={styles.iconInput} source={Images.ICON_PHONE} />
                                <TextInput placeholder="Nhập password"></TextInput>
                            </ViewNative>
                            <View style={{ alignItems: 'flex-end', marginBottom: 20 }}>
                                <Text note>Quên mật khẩu?</Text>
                            </View>
                            <Button login><Text>ĐĂNG NHẬP</Text></Button>
                        </View>
                        <View style={styles.blockDown}>
                            <Button style={{ backgroundColor: '#0028a5' }} socialLogin>
                                <Image style={styles.iconSocial} source={Images.ICON_FB}/>
                                <Text>Login by Facebook</Text>
                            </Button>
                            <Button socialLogin>
                                <Image style={styles.iconSocial} source={Images.ICON_GMAIL}/>
                                <Text>Login by Google</Text>
                            </Button>
                            <Text style={{color:'black', marginTop:35}}>Bạn chưa có tài khoản? <Text style={{color:'red'}}>Đăng ký ngay</Text></Text>
                        </View>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     containerInner: {
//         flex: 1,
//         width: '80%',
//         marginTop: 40,
//     },
//     blockTop: {
//         width: '100%',
//         padding: 25,
//         backgroundColor: 'white'
//     },
//     blockDown: {
//         width: '100%',
//         padding: 25,
//         marginTop: 30
//     },

//     backgroundTop: {
//         backgroundColor: 'red',
//         height: 335
//     },
//     backgroundDown: {
//         backgroundColor: 'blue',
//         height: '70%'
//     },
//     triangleDown: {
//         width: '100%',
//         height: 90,
//     },
//     iconInput: {
//         width: 15,
//         height: 15,
//         marginRight: 20
//     },
//     iconSocial:{
//         width:30,
//         height:30
//     }

// })

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