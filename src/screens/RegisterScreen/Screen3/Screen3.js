import React from 'react';

import { ScrollView } from 'react-native';

import { View, Text, Button } from 'native-base';

//Components
import ItemCheckBox from '../../../component/ItemCheckBox';


import styles from './styles';

class Screen3 extends React.Component {
    onLogin = () => {
        this.props.navigation.navigate('RegisterScreen3');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerInner}>
                    <Text title>3.HỢP ĐỒNG DỊCH VỤ</Text>
                    <View>
                        <ScrollView style={{ height: '40%', borderWidth: 0.5, borderColor: '#c1c1c1', marginTop: 12.5, padding: 10 }}>
                            <Text>some thing</Text>
                            <Text>some thing</Text>
                            <Text>some thing</Text>
                            <Text>some thing</Text>
                            <Text>some thing</Text>
                            <Text>some thing</Text>
                            <Text>some thing</Text>
                            <Text>some thing</Text>
                            <Text>some thing</Text>
                            <Text>some thing</Text>
                            <Text>some thing</Text>
                            <Text>some thing</Text>
                            <Text>some thing</Text>
                            <Text>some thing</Text>
                            <Text>some thing</Text>
                            <Text>some thing</Text>
                            <Text>some thing</Text>
                        </ScrollView>
                    </View>
                    <ItemCheckBox text="Tôi đã đọc và đồng ý" />
                    <Text italic>
                        (Bằng việc đồng ý, bạn cam kết thực hiện với các điều khoản    của hợp đồng trên về việc sử dụng dịch vụ của Speedlink.)
                    </Text>
                    <Button onPress={this.onLogin} style={styles.button} login><Text>ĐĂNG NHẬP</Text></Button>
                </View>

            </View>
        )
    }
}

export default Screen3;