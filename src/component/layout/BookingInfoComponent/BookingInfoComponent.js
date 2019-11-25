import React from 'react';

import { TouchableOpacity } from 'react-native';

import {View,Text} from 'native-base';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

//helper;
import { currencyFormat } from '../../../helper';


class BookingInfoComponent extends React.Component {

     

    _renderInfoDetail = (nameIcon, description,isPhone) => {
        return (
            <View style={styles.infoDetail}>
                <MaterialIcon name={nameIcon} size={15} />
                <Text style={[styles.text,isPhone?{color:'blue'}:null]}>{description}</Text>
            </View>
        )
    }

    _renderFeeDetail = (label, fee) => {
        return (
            <View style={styles.feeDetail}>
                <Text style={styles.text}>{label}</Text>
                <Text style={{fontWeight:"500",fontSize:13,color:'#3f3f3f'}}>{currencyFormat(fee)}</Text>

            </View>
        )
    }

    _renderBlockAction = (nameIcon, label, styleA) => {
        return (
            <TouchableOpacity style={[styles.blockAction, styleA]}>
                <EntypoIcon style={{ marginRight: 5 }} name={nameIcon} color='red' />
                <Text style={{color:'red'}}>{label}</Text>
            </TouchableOpacity>
        )
    }


    render() {
        const { id, nameCus, address, phone, total, incurredFee, deliveryFee, date } = this.props.booking;
        const styleA = { borderLeftWidth: 1, borderLeftColor: 'white' }; //style border left for action block
        return (
            
                <View style={{ backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.3,
                shadowRadius: 1,
                elevation: 2,
                margin:10 }}>
                    <View style={styles.blockTitle}>
                        <Text style={styles.textTitle}>{id}</Text>
                        <Text style={styles.textNew}>New</Text>
                    </View>
                    <View style={styles.blockContent}>
                        {this._renderInfoDetail('person', nameCus)}
                        {this._renderInfoDetail('place', address)}
                        {this._renderInfoDetail('phone-iphone', phone,true)}
                    </View>
                    <View style={styles.blockContent}>
                        {this._renderFeeDetail('Tiền thu hộ', total)}
                        {this._renderFeeDetail('Phí thu hộ', incurredFee)}
                        {this._renderFeeDetail('Phí vận chuyển', deliveryFee)}
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: '#ffe8e8', }}>
                        {this._renderBlockAction('unread', 'Chi tiết')}
                        {this._renderBlockAction('chat', 'Chat', styleA)}
                        {this._renderBlockAction('dots-three-horizontal', null, styleA)}
                    </View>
                </View>

        )
    }
}

//<View style={styles.container}></View>

export default BookingInfoComponent;