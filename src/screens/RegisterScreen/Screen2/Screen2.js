import React from 'react';

import { StyleSheet, TextInput } from 'react-native';

import { View, Text, Button } from 'native-base';



//Components
import RadioButton from '../../../component/RadioButton';
import BaseComponent from '../../../component/BaseComponent';

//Style
import styles from './styles';

class Screen2 extends BaseComponent {
    state = {
        key: '',
    }

    onLogin = () => {
        const key = this.state.key;
        const isClearing = key==this.getString("CLEARING");
        this.props.navigation.navigate('RegisterScreen3',{isClearing});
    }

    onCheck = (text) => {
        this.setState({ key: text })
    }

    render() {
        const {key} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.containerInner}>
                    <Text title>2. {this.getString('TITLE_PAYMENT')}</Text>
                    <RadioButton check={this.state.key} onCheck={this.onCheck} text={this.getString("CASH")} detail={this.getString("CASH_DETAIL")} />
                    <RadioButton check={this.state.key} onCheck={this.onCheck} text={this.getString("CLEARING")} detail={this.getString("CLEARING_DETAIL")} />
                    <Button disabled={!key?true:false} onPress={this.onLogin} style={styles.button} login><Text>{this.getString('CONFIRM')}</Text></Button>
                </View>
            </View>
        )
    }
}


export default Screen2;