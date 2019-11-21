import React from 'react';

import { StyleSheet, TextInput, Image } from 'react-native';

import { View, Text, Button } from 'native-base';

import Images from '../../../assets';

//Components
import InputField from '../../common/InputField';
import TabUploadImage from '../../common/TabUploadImage';
import BaseComponent from '../../BaseComponent';


//Style
import styles from './styles';

class RegisterPayScreen extends BaseComponent {
    state={
        bankAccountName:'',
        bankAccountNumber:'',
        bankName:'',
        bankBranch:'',
    }

    totalInput=4;

    inputs={};

    focusNextField=(id)=>{
        if(id<=this.totalInput)
        this.inputs[id].focus();
    }

    handleRef=(id,input)=>{
        this.inputs[id]=input
    }

    render() {
        const { isClearing, screen,onChangeScreen, handleRef,id } = this.props;
        return (
            <View>
                <View tabnote>
                    <Text italic note>
                        {isClearing?this.getString("PAY_CLEARING_NOTE"):this.getString('PAY_CASH_NOTE')}
                    </Text>
                </View>
                <View style={styles.content}>
                    <Text title> {this.getString('BANK_ACCOUNT')}</Text>
                    <InputField id={1} handleFocus={this.focusNextField} handleRef={this.handleRef} text={this.getString('BANK_ACCOUNT_OWNER')} placeholder={this.getString('BANK_ACCOUNT_OWNER_DETAIL')} />
                    <InputField id={2} handleFocus={this.focusNextField} handleRef={this.handleRef} text={this.getString('BANK_ACCOUNT_NUMBER')} placeholder={this.getString('BANK_ACCOUNT_OWNER_DETAIL')} />
                    <InputField id={3} handleFocus={this.focusNextField} handleRef={this.handleRef} text={this.getString('BANK_NAME')} placeholder={this.getString('BANK_NAME_DETAIL')} />
                    <InputField last id={4} handleFocus={this.focusNextField} handleRef={this.handleRef} text={this.getString('BANK_BRANCH')} placeholder={this.getString('BANK_BRANCH_DETAIL')} />
                    {
                        isClearing ?
                            <View style={{ marginTop: 25 }}>
                                <Text title>{this.getString('UPLOAD_IMAGE_ID')}</Text>
                                <View style={{ marginTop: 0, flexDirection: 'row', }}>
                                    <TabUploadImage text={this.getString("UPLOAD_IMAGE_FRONT")} imageSrc={Images.IMG_CMND_FRONT} />
                                    <TabUploadImage text={this.getString("UPLOAD_IMAGE_BACK")} imageSrc={Images.IMG_CMND_BACK} />
                                </View>
                            </View>
                            :
                            null
                    }
                    <Button onPress={()=>onChangeScreen()} style={styles.button} login><Text>{this.getString('CONFIRM')}</Text></Button>
                </View>
            </View>
        )
    }
}

//
export default RegisterPayScreen;