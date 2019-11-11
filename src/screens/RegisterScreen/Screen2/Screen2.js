import React from 'react';

import {StyleSheet,TextInput} from 'react-native';

import {View,Text,Button} from 'native-base';

//Components
import ItemCheckBox from '../../../component/ItemCheckBox';
//Style
import styles from './styles';

class Screen2 extends React.Component{
    onLogin=()=>{
        this.props.navigation.navigate('RegisterScreen3');
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.containerInner}>
                    <Text title>2. HÌNH THỨC THANH TOÁN CƯỚC PHÍ</Text>
                    <ItemCheckBox text="Tiền mặt" detail="Nộp trực tiếp cho từng đơn"/>
                    <ItemCheckBox text="Cấn trừ" detail="trừ cước phí vào tiền COD"/>
                    <Button onPress={this.onLogin} style={styles.button} login><Text>ĐĂNG NHẬP</Text></Button>
                </View>
            </View>
        )
    }
}


export default Screen2;