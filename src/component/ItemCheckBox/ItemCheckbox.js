import React from 'react';

import {StyleSheet,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import {CheckBox,ListItem,Body,Text,Container,View} from 'native-base';

//styles
import styles from './styles';

class ItemCheckBox extends React.Component{
    state={
      isChecked:false
    }
    onCheck =()=>{
      this.setState({
        isChecked:!this.state.isChecked
      })
    }
    render(){
        const {text,detail} = this.props;
        const {isChecked} =this.state;
        return(
          <ListItem  style={{borderBottomWidth:0,marginLeft:0}}>
            <TouchableOpacity onPress={this.onCheck} style={isChecked?styles.clicked:styles.checkbox}>
              <Icon name="check" size={15} color="#FFF" />
            </TouchableOpacity>
            <Body>
                <Text>
                  {text} 
                  <Text style={{marginLeft:5}}>
                    {detail?`(${detail})`:''}
                  </Text>
                </Text>
            </Body>
            
          </ListItem>
        )
    }
}


export default ItemCheckBox;

{/* <Text>{text} 
                <Text>
                  {detail?`(${detail})`:''}
                  </Text>
              </Text> */}