import React from 'react';

import {View,Text,Button} from 'native-base'

//Components
import BankInfoComponent from '../../../component/BankInfoComponent';
import BaseComponent from '../../../component/BaseComponent';

//Style
import styles from './styles';

class Screen4 extends BaseComponent {
    static navigationOptions={
        title:'Thanh toan can tru'
    }
    onChangeScreen = () => {
        this.props.navigation.navigate('RegisterScreen6')
    }
    render() {
        const isCash = false;
        return (
            <View style={styles.container}>
                <View style={styles.containerInner}>
                {
                    isCash
                    ?
                        <BankInfoComponent />
                    :
                        <BankInfoComponent onChangeScreen={this.onChangeScreen} image/>
                }
            </View>
            </View>
        )
    }
}


export default Screen4;