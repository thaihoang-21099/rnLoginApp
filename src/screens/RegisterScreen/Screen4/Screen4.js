import React from 'react';

import { View, Text, Button } from 'native-base'

//Components
import BankInfoComponent from '../../../component/BankInfoComponent';
import BaseComponent from '../../../component/BaseComponent';

//Style
import styles from './styles';
import I18N from '../../../local';

const PAY_CLEARING = I18N.t("PAY_CLEARING");
const PAY_CASH = I18N.t("PAY_CASH");
class Screen4 extends BaseComponent {
    isClearing = this.props.navigation.state.params.isClearing;


    static navigationOptions = ({ navigation,screenProps }) => ({
        title: navigation.state.params.isClearing?PAY_CLEARING:PAY_CASH ,
    });

    onChangeScreen = () => {
        this.props.navigation.navigate('RegisterScreen6')
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerInner}>
                    {
                        <BankInfoComponent onChangeScreen={this.onChangeScreen} isClearing={this.isClearing} />
                    }
                </View>
            </View>
        )
    }
}



export default Screen4;