import React from 'react';

import { SafeAreaView } from 'react-native';
import { View, Text, Button } from 'native-base';


import LocationComponent from '../../../component/layout/LocationComponent';


export default class WardScreen extends React.Component {
    static navigationOptions = {
        title: 'Quận'
    }

    setSelect = (ward) => {
        const params = this.props.navigation.state.params;
        const cityId = params.cityId;
        const districtId = params.district.id;
        const wardId = ward.id;
        this.props.navigation.navigate('RegisterScreen1', { cityId, districtId, wardId });
    }

    render() {
        const wardData = this.props.navigation.state.params.district.ward;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <LocationComponent data={wardData} setSelect={this.setSelect} />
            </SafeAreaView>
        )

    }
}