import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


import EntypoIcon from 'react-native-vector-icons/Entypo';

import AppHeader from '../../../component/layout/AppHeader';
import BottomSheet from '../../../component/layout/BottomSheet';

import Images from '../../../assets';
class MenuScreen extends React.Component {
    static navigationOptions = {
        header: <AppHeader title="Menu" />
    }

    state = {
        showBottom: false
    }

    _renderMenuItem = (nameIcon, label, onPress) => {
        return (
            <TouchableOpacity style={styles.item}>
                <Image source={nameIcon} style={{ width: 30, height: 30 }} resizeMode="contain" />
                <Text style={{ fontSize: 14, paddingLeft: 20, fontWeight: '200' }}>{label}</Text>
            </TouchableOpacity>
        )
    }



    render() {
        const { showBottom } = this.state
        console.log(showBottom)
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.info}>
                        <TouchableOpacity onPress={() => this.setState({ showBottom: true })}>
                            <Image
                                style={{ width: 75, height: 75, borderRadius: 50, marginRight: 20 }}
                                source={Images.IMG_CMND_BACK} />
                        </TouchableOpacity>

                        <View>
                            <Text>Stella String</Text>
                            <Text>0123456799</Text>
                        </View>
                    </View>
                    <EntypoIcon name="chevron-thin-right" size={30} color="#ededed" />
                </View>
                <View style={styles.menu}>
                    {this._renderMenuItem(Images.ICON_CALCULATOR, 'Tra phi')}
                    {this._renderMenuItem(Images.ICON_HEADPHONE, 'Ho tro')}
                    {this._renderMenuItem(Images.ICON_ABOUT, 'Gioi thieu')}
                    {this._renderMenuItem(Images.ICON_ADDRESS_BOOK, 'So dia chi')}
                    {this._renderMenuItem(Images.ICON_SETTING, 'Cai dat')}
                    {this._renderMenuItem(Images.ICON_LOGOUT, 'Dang xuat')}
                </View>
                {showBottom ? 
                    <BottomSheet 
                        onGetFromLib={()=>console.log('Get from Library')}
                        onTakeAShot={()=>console.log('Take a shot bro')}
                    /> 
                        : 
                        null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
    },
    top: {
        backgroundColor: '#fff',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 15,
        paddingVertical: 15
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menu: {
        backgroundColor: '#FFF',
        marginTop: 15
    },
    item: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#eeeeee',
        paddingLeft: 20
    }
})

export default MenuScreen