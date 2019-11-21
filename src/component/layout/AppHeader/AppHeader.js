import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Platform, TouchableOpacity } from 'react-native';

import { View, Text } from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';

import Colors from '../../../native-base-theme/Colors';



class AppHeader extends React.Component {
    render() {
        const { title, onPressBack, rightMenu } = this.props;
        return (
            <SafeAreaView style={{ flex: 0, backgroundColor: Colors.BG_RED }}>
                <View style={styles.container}>
                    <StatusBar backgroundColor={Colors.BG_RED} barStyle="light-content" />
                    <View style={styles.center}>
                        <Text  numberOfLines={1} titleHeader style={styles.text}>{title?title:'Register'}</Text>
                    </View>
                    <View style={styles.left}>
                        <TouchableOpacity style={{flex: 1, padding: 5}} onPress={() => onPressBack()}>
                            <Ionicon name='ios-arrow-back' color='white' size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.right}>
                        {rightMenu}
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: Colors.BG_RED,
        alignItems: 'center',
        margin: 0
    },
    left: {
        flex: 0,
        width: 45,
        alignItems: 'center',
        flexDirection: 'row',
        // paddingLeft: 10
    },
    right: {
        flex: 0
    },
    center: {
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        left:0,
        top:0,
        right:0,
        bottom: 0,
        justifyContent: 'center',
        paddingHorizontal: 45
    },
    text: {

        
    }
})
export default AppHeader;