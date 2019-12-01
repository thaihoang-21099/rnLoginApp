import React from 'react';

import { StyleSheet, ScrollView } from 'react-native';

import { View, Text } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome5';

import AppHeader from '../../../component/layout/AppHeader';



class BlockInfo extends React.Component {
    render() {
        const { title, children } = this.props;
        return (
            <View style={{
                paddingBottom: 10,
                backgroundColor: '#FFF'
            }}>
                <View style={styles.title}>
                    <Text black>{title}</Text>
                    <Icon name="edit" size={25} color="#a7a7a7" />
                </View>
                <View>
                    {children}
                </View>
            </View>
        )
    }
}

class Info extends React.Component {
    render() {
        const { label, info } = this.props;
        return (
            <View style={styles.info}>
                <Text black style={{ flex: 1 }}>{label}</Text>
                <Text blackLight style={{ flex: 2 }}>{info}</Text>
            </View>
        )
    }
}

class AccountInfoScreen extends React.Component {
    static navigationOptions = {
        header: <AppHeader title="Thông tin tài khoản" onPressBack={()=>this.props.navigation.goBack()}/>
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.3,
                    shadowRadius: 1,
                }}>
                    <BlockInfo title="Thông tin cá nhân">
                        <Info label="Tên" info="Example Shop" />
                        <Info label="Số điện thoại" info="Example Shop" />
                        <Info label="Email" info="devichhoang@gmail.com" />
                        <Info label="Địa chỉ" info="6 Thăng Long , Quận Tân Bình or Phú Nhuận ây" />
                    </BlockInfo>
                    <BlockInfo title="Ngân hàng và lịch đối soát">
                        <Info label="Tên tài khoản" info="Example Shop" />
                        <Info label="Số tài khoản" info="123456" />
                        <Info label="Tên ngân hàng" info="ZietCumBank" />
                        <Info label="Chi nhánh" info="Tân Bình Branch" />
                    </BlockInfo>
                    <BlockInfo title="Địa chỉ lấy hàng">
                        <Info label="Địa chỉ" info="Example Shop" />
                        <Info label="Tên liên hệ" info="Đê Zích Quàng" />
                        <Info label="Số điện thoại" info="0123456789" />
                    </BlockInfo>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f1f1f1',
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    info: {
        paddingHorizontal: 15,
        paddingTop: 10,
        flexDirection: 'row',
    }
})

export default AccountInfoScreen;