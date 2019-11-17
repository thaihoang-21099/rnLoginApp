import React from 'react';

import { TextInput } from 'react-native';
import { View, Text, } from 'native-base';

import Icon from 'react-native-vector-icons/AntDesign';



class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "",
            open: false,
            nameIcon: 'caretdown',
        };
    }


    onPress = () => {
        const { open } = this.state;
        this.setState({
            open: !this.state.open,
            nameIcon: open ? 'caretdown' : 'caretup'
        })
    }


    onChange = (text)=>{
        const  {onChangeText,name} = this.props;
        onChangeText(name,text);
    }
    render() {
        const { text, placeholder, isRequired, onChangeText, name, isLogin } = this.props;

        return (
            <View>
                {placeholder ?
                    <View inputInfo>
                        <Text inputRequired>{`${text}${isRequired ? '(*)' : ''}`}</Text>
                        <TextInput style={{padding:0}} onChangeText={this.onChange}  placeholder={placeholder} placeholderTextColor="#767676"></TextInput>
                    </View>
                    :
                    <View inputInfo style={{ alignItems: 'center' }}>
                        <Text inputRequired>{`${text}${isRequired ? '(*)' : ''}`}</Text>
                        <Text>{this.state.selected}</Text>
                        <View  style={{flexDirection:'row'}}>
                            <Text style={{marginRight:15}}>TP.Ho Chi Minh</Text>
                            <Icon onPress={this.onPress} name={this.state.nameIcon} />
                        </View>
                    </View>
                }
            </View>



        )
    }
}

export default InputField
