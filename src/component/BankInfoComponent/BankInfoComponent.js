import React from 'react';

import { StyleSheet, TextInput, Image } from 'react-native';

import { View, Text, Button } from 'native-base';

import Images from '../../assets';

//Components
import InputField from '../InputField';
import TabUploadImage from '../TabUploadImage';
import BaseComponent from '../BaseComponent';


//Style
import styles from './styles';

class RegisterPayScreen extends BaseComponent {

    render() {
        const { image, screen,onChangeScreen } = this.props;
        return (
            <View>
                <View tabnote>
                    <Text italic note>
                        {this.getString('PAY_CASH_NOTE')}
                    </Text>
                </View>
                <View style={styles.content}>
                    <Text title> {this.getString('BANK_ACCOUNT')}</Text>
                    <InputField text={this.getString('BANK_ACCOUNT_OWNER')} placeholder={this.getString('BANK_ACCOUNT_OWNER_DETAIL')} />
                    <InputField text={this.getString('BANK_ACCOUNT_NUMBER')} placeholder={this.getString('BANK_ACCOUNT_OWNER_DETAIL')} />
                    <InputField text={this.getString('BANK_NAME')} placeholder={this.getString('BANK_NAME_DETAIL')} />
                    <InputField text={this.getString('BANK_BRANCH')} placeholder={this.getString('BANK_BRANCH_DETAIL')} />
                    {
                        image ?
                            <View style={{ marginTop: 25 }}>
                                <Text title>{this.getString('UPLOAD_IMAGE_ID')}</Text>
                                <View style={{ marginTop: 0, flexDirection: 'row', }}>
                                    <TabUploadImage text="Mat truoc" imageSrc={Images.IMG_CMND_FRONT} />
                                    <TabUploadImage text="Mat sau" imageSrc={Images.IMG_CMND_BACK} />
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