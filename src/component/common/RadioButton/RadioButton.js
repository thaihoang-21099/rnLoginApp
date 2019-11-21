import React from 'react';

import { TouchableOpacity, SafeAreaView } from 'react-native';
import { View, Text } from 'native-base';

import Icon from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/FontAwesome';



import styles from './styles';

class RadioButton extends React.Component {
    render() {
        const { text, check, onCheck,detail } = this.props;
        return (
            <TouchableOpacity onPress={() => onCheck(text)} style={styles.buttonContainer}>
                <View style={(check == text||check==true) ? styles.checkedCircle : styles.circle}>
                    <IconF name="check" color="#FFF" size={15} />
                </View>
                {
                    detail ?
                        <View style={{flexDirection:'row'}}>
                            <Text checkLight>{text}</Text>
                            <Text italic style={{ marginLeft: 10, fontSize: 15 }}>({detail})</Text>
                        </View>
                        :
                        <Text checkStrong>{text}</Text>
                }

            </TouchableOpacity>
        )
    }
}



export default RadioButton;
