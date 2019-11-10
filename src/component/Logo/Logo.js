import React from 'react';
import {Image,Text,Animated,View} from 'react-native';

import Images from '../../assets';

import styles from './styles';

class Logo extends React.Component{
    render(){
        const {marginAnimated} = this.props;
        const src = this.props.src || Images.LOGO
        return(
            <View style={{alignItems:'center'}}>
            {
                marginAnimated ? <Animated.Image style={[styles.logo,{marginTop:marginAnimated}]} source={src}/>
                :
                <Image style={styles.logo} source={src}/>
            }
            </View>
        )
    }
}

export default Logo;