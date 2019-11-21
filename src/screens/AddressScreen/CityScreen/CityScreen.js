import React from 'react';

import { SafeAreaView } from 'react-native';


import { View, Text, Button } from 'native-base';


import LocationComponent from '../../../component/layout/LocationComponent';


import { city } from '../../../constant';

export default class CityScreen extends React.Component {
    static navigationOptions = {
        title: 'Thành Phố'
    }

    setSelect = (data) => {
        this.props.navigation.navigate('DistrictScreen', { data })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <LocationComponent data={city} setSelect={this.setSelect} />
            </View>
        )
    }
}