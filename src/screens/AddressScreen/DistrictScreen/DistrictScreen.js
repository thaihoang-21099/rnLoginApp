import React from 'react';

import {SafeAreaView} from 'react-native';
import { View, Text, Button } from 'native-base';


import LocationComponent from '../../../component/LocationComponent';


export default class DistrictScreen extends React.Component {
    static navigationOptions = {
        title: 'Quận'
    }

    constructor() {
        super();
        this.state = {
        }
    }

    setSelect=(district)=> {
        const name= district.name;
        const cityId = this.props.navigation.state.params.addressData.id;
        const districtId=district.id;
        if(!district.ward){
            this.props.navigation.navigate('RegisterScreen1',{districtId,cityId})
            return;
        }
        this.props.navigation.navigate('WardScreen',{district,cityId});
    }

    render() {
       const districtData = this.props.navigation.state.params.addressData.district;
        return (
            <SafeAreaView style={{flex:1}}>
                <LocationComponent data={districtData} setSelect={this.setSelect} />
                <Text>{}</Text>
            </SafeAreaView>
        )
    }
}