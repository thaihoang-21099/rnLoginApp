import React from 'react';

import {Image} from 'react-native';
import {Text,View} from 'native-base';

import styles from './styles.js';

class TabUploadImage extends React.Component {
    render() {
        const {imageSrc,text} =this.props;
        return (
                <View style={styles.container}>
                    <Image style={styles.image} resizeMode="contain" source={imageSrc} />
                    <Text>{text}</Text>
                </View>
                
            )
        }
}

export default  TabUploadImage;