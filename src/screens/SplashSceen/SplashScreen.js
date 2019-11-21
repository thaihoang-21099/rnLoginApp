import React from 'react';

import {Image,View,Animated,Text} from 'react-native';

import { StackActions, NavigationActions } from 'react-navigation';



import Images from '../../assets';

import Logo from '../../component/layout/Logo'

import styles from './styles';

class SplashScreen extends React.Component{
    constructor(){
        super();
        this.state={
            logoMargin:new Animated.Value(-300)
        }
    }

    async componentDidMount(){
        Animated.sequence([
            Animated.timing(this.state.logoMargin,{
                toValue:-200,
                duration:500
            }),
        ]).start(()=>{
            
            this.props.navigation.navigate('LoginScreen')
        });
    }

    render(){
        return(
            
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image style={styles.background} source={Images.BG_SPLASH}/>
                <Logo src={Images.LOGO_SPLASH} marginAnimated={this.state.logoMargin}/>
               
            </View>
        )
    }
}

export default SplashScreen