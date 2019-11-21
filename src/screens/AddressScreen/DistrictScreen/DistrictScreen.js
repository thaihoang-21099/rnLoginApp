import React from 'react';

import {SafeAreaView} from 'react-native';
import { View, Text, Button } from 'native-base';


import LocationComponent from '../../../component/layout/LocationComponent';


export default class DistrictScreen extends React.Component {
    static navigationOptions = {
        title: 'Quận'
    }

    constructor() {
        super();
        this.state={
            districtData:null
        }
    }
    
    componentDidMount(){
        const districtData = this.props.navigation.state.params.data.district;
        this.setState({districtData});
    }


    setSelect=(district)=> {
        const name= district.name;
        const cityId = this.props.navigation.state.params.data.id;
        const districtId=district.id;
        if(!district.ward){
            this.props.navigation.navigate('RegisterScreen1',{districtId,cityId})
            return;
        }
        this.props.navigation.navigate('WardScreen',{district,cityId});
    }

    render() {
       //const districtData = this.props.navigation.state.params.data.district;
        return (
            <SafeAreaView style={{flex:1}}>
                <LocationComponent data={this.state.districtData} setSelect={this.setSelect} />
                <Text>{}</Text>
            </SafeAreaView>
        )
    }
}