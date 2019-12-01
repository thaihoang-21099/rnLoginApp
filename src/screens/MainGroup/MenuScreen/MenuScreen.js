import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { StackActions, NavigationActions } from 'react-navigation';

import {hanldeResetStackAction} from '../../../helper';

import EntypoIcon from 'react-native-vector-icons/Entypo';

import AppHeader from '../../../component/layout/AppHeader';
import BottomSheet from '../../../component/layout/BottomSheet';

import Images from '../../../assets';

import styles from './styles';
class MenuScreen extends React.Component {
    static navigationOptions = {
        header: <AppHeader title="Menu" />
    }

    state = {
        showBottom: false
    }

    _renderMenuItem = (nameIcon, label, onPress) => {
        return (
            <TouchableOpacity onPress={()=>onPress()} style={styles.item}>
                <Image source={nameIcon} style={{ width: 30, height: 30 }} resizeMode="contain" />
                <Text style={{ fontSize: 14, paddingLeft: 20, fontWeight: '200' }}>{label}</Text>
            </TouchableOpacity>
        )
    }

    _logout=()=>{
        hanldeResetStackAction(this.props.navigation,'SplashScreen');
    }


    render() {
        const { showBottom } = this.state
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
                    {this._renderMenuItem(Images.ICON_LOGOUT, 'Dang xuat',this._logout)}
                </View>
                {showBottom ?
                    <BottomSheet
                        onGetFromLib={() => console.log('Get from Library')}
                        onTakeAShot={() => console.log('Take a shot bro')}
                    />
                    :
                    null}
            </View>
        )
    }
}



export default MenuScreen