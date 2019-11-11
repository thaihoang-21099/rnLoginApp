import React from 'react';

import { TextInput } from 'react-native';
import { View, Text, Picker, Form, Container, Header, Content, Icon } from 'native-base';

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ""
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }
    render() {
        const { text, placeholder, isRequired, temp } = this.props;
        return (
            <View>

                {placeholder ?
                    <View inputInfo>
                        <Text inputRequired>{`${text}${isRequired ? '(*)' : ''}`}</Text>
                        <TextInput placeholder={placeholder} placeholderTextColor="#767676"></TextInput>
                    </View>
                    :
                    <View inputInfo style={{alignItems:'center'}}>
                        <Text inputRequired>{`${text}${isRequired ? '(*)' : ''}`}</Text>
                        <Form>
                            <Picker
                                mode="dropdown"
                                iosHeader="Chọn thành phố"
                                iosIcon={<Icon name="arrow-down" />}
                                headerStyle={{backgroundColor:'red' }}
                                headerTitleStyle={{color:'black'}}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="HCM" value="key0" />
                                <Picker.Item label="Đà Nẵng" value="key1" />
                                <Picker.Item label="Đà Lạt" value="key2" />
                                <Picker.Item label="Đà đà đa" value="key3" />
                            </Picker>
                        </Form>
                    </View>
                }
            </View>



        )
    }
}

export default InputField