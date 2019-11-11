import React from 'react';

import {StyleSheet,TextInput} from 'react-native';

import {View,Text,Button} from 'native-base';

//Components
import InputField from '../../../component/InputField';

//Style
import styles from './styles';

class Screen1 extends React.Component{

    onLogin=()=>{
        this.props.navigation.navigate('RegisterScreen2')
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.containerInner}>
                    <Text title>1. THONG TIN CA NHAN</Text>
                    <InputField text='Họ tên' placeholder='Tên liên hệ' isRequired/>
                    <InputField text='Email' placeholder='Email' isRequired/>
                    <InputField text='Mật khẩu' placeholder='Nhập mật khẩu' isRequired/>
                    <InputField text='Nhập lại mật khẩu' placeholder='Nhập mật khẩu' isRequired/>
                    <InputField text='Địa chỉ' placeholder='Số nhà/ đường' isRequired/>
                    <InputField text='Thành phố' isRequired/>
                    <Button onPress={this.onLogin} style={styles.button} login><Text>DANG NHAP</Text></Button>
                </View>
            </View>
        )
    }
}


export default Screen1;