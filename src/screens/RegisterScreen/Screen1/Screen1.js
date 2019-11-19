import React from 'react';


import { View, Text, Button } from 'native-base';

//Components
import InputField from '../../../component/InputField';
import BaseComponent from '../../../component/BaseComponent';

//Style
import styles from './styles';

import { getLanguages } from 'react-native-i18n';

import { getStringLocation } from '../../../helper';



class Screen1 extends BaseComponent {
    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        cityId: '',
        wardId: '',
        districtId: '',
    }
    inputs={}

    focusNextField=(id)=>{
        this.inputs[id].focus();
    }

    handleRef=(id,input)=>{
        this.inputs[id]=input
    }

    onChangeText = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    onSelect = () => {
        this.props.navigation.navigate('CityScreen')
    }

    _onConfirm = () => {
        this.props.navigation.navigate('RegisterScreen2')
    }

    _checkFilter = (locationString) => {
        const { username, email, password, confirmPassword, address } = this.state;
        if (username && email && password && confirmPassword && address&&locationString) {
            console.log(this.state.cityId)
            return false;
        }
        return true;
    }

    render() {
        const params = this.props.navigation.state.params || {};
        const cityId = params.cityId ? params.cityId : null;
        const wardId = params.wardId ? params.wardId : null;
        const districtId = params.districtId ? params.districtId : null;
        const location = {cityId,wardId,districtId};
        const locationString = getStringLocation({ cityId, wardId, districtId });
        return (
            <View style={styles.container}>
                <View style={styles.containerInner}>
                    <Text title>1. {this.getString('TITLE_PERSONAL_INFO')}</Text>
                    <InputField id={1} handleFocus={this.focusNextField} handleRef={this.handleRef} text={this.getString('USERNAME')} onChangeText={this.onChangeText} name='username' placeholder={this.getString('USERNAME_DETAIL')} isRequired />
                    <InputField id={2} handleFocus={this.focusNextField} handleRef={this.handleRef} text={this.getString('EMAIL')} onChangeText={this.onChangeText} name='email' placeholder={this.getString('EMAIL_DETAIL')} isRequired />
                    <InputField id={3} handleFocus={this.focusNextField} handleRef={this.handleRef} text={this.getString('PASSWORD')} onChangeText={this.onChangeText} name='password' placeholder={this.getString('PASSWORD_DETAIL')} isRequired />
                    <InputField id={4} handleFocus={this.focusNextField} handleRef={this.handleRef} text={this.getString('PASSWORD_CONFIRM')} onChangeText={this.onChangeText} name='confirmPassword' placeholder={this.getString('PASSWORD_CONFIRM_DETAIL')} isRequired />
                    <InputField id={5} handleFocus={this.focusNextField} handleRef={this.handleRef} text={this.getString('ADDRESS')} onChangeText={this.onChangeText} name='address' placeholder={this.getString('ADDRESS_DETAIL')} isRequired />
                    <InputField text={this.getString('CITY')} onSelect={this.onSelect} locationString={locationString} isRequired />
                    <Button disabled={this._checkFilter(locationString,location)} login onPress={this._onConfirm} style={styles.button} ><Text>{this.getString('CONFIRM')}</Text></Button>
                </View>
            </View>
        )
    }
}

//disabled={locationString?false:true}
export default Screen1;