import React from 'react';

import { TextInput, TouchableOpacity } from 'react-native';
import { View, Text, } from 'native-base';

import BaseComponent from '../../BaseComponent';

import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

class InputField extends BaseComponent {

    onChange = (text) => {
        const { onChangeText, name } = this.props;
        if(onChangeText){
            onChangeText(name, text);
        }
    }
    render() {
        const { text, placeholder, isRequired, onChangeText, name, onSelect,locationString, handleFocus,id, handleRef,last } = this.props;
        return (
            <View>
                {placeholder ?
                    <View inputInfo style={{alignItems:'center'}}>
                        <Text style={styles.label} inputRequired>{`${text}${isRequired ? '(*)' : ''}`}</Text>
                        <TextInput 
                            style={styles.textInput} 
                            blurOnSubmit={last}
                            onChangeText={this.onChange} 
                            placeholder={placeholder} 
                            placeholderTextColor="#767676" 
                            returnKeyType="next"
                            onSubmitEditing={()=>{
                                handleFocus(id+1)}
                            }
                            ref={input=>{
                                if(handleRef) handleRef(id,input)
                            }}
                            />
                    </View>
                    :
                    <View inputInfo style={{ alignItems: 'center',}}>
                        <Text style={styles.label} inputRequired>{`${text}${isRequired ? '(*)' : ''}`}</Text>
                        <TouchableOpacity style={[styles.textInput,{alignItems:'flex-end'}]} onPress={() => onSelect()}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ marginRight: 15 }}>{locationString?locationString:this.getString('CHOOSE_CITY')}</Text>
                                <Icon onPress={this.onPress} name='caretdown' />
                            </View>
                        </TouchableOpacity>

                    </View>
                }
            </View>



        )
    }
}

export default InputField
