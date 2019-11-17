import React from 'react';

import { View, Text, Button } from 'native-base';

//Components
import InputField from '../../../component/InputField';
import BaseComponent from '../../../component/BaseComponent';

//Style
import styles from './styles';

import { getLanguages } from 'react-native-i18n';



class Screen1 extends BaseComponent {
    state = {
        username: '',
        email: ''
    }
    onLogin = () => {
        this.props.navigation.navigate('RegisterScreen2')
    }

    onChangeText = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    alert=()=>{
        getLanguages().then(l=>console.log(l))
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerInner}>
                    <Text title>1. {this.getString('TITLE_PERSONAL_INFO')}</Text>
                    <InputField text={this.getString('USERNAME')} onChangeText={this.onChangeText} name='username' placeholder={this.getString('USERNAME_DETAIL')} isRequired />
                    <InputField text={this.getString('EMAIL')} onChangeText={this.onChangeText} name='email' placeholder={this.getString('EMAIL_DETAIL')} isRequired />
                    <InputField text={this.getString('PASSWORD')} placeholder={this.getString('PASSWORD_DETAIL')} isRequired />
                    <InputField text={this.getString('PASSWORD_CONFIRM')} placeholder={this.getString('PASSWORD_CONFIRM_DETAIL')} isRequired />
                    <InputField text={this.getString('ADDRESS')} placeholder={this.getString('ADDRESS_DETAIL')} isRequired />
                    <InputField text={this.getString('CITY')} isRequired />
                    <Button onPress={this.onLogin} style={styles.button} login><Text>{this.getString('CONFIRM')}</Text></Button>
                    {this.alert()}
                </View>
            </View>
        )
    }
}


export default Screen1;