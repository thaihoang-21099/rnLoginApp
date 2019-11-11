import {StyleSheet} from 'react-native';
import Colors from '../../native-base-theme/Color'
import Measurements from '../../native-base-theme/Measurements'


const checkboxDefault = {
    justifyContent:'center',
    alignItems:'center',
    borderWidth:Measurements.border.tiny,
    borderRadius:50,
    width:Measurements.icons.small,
    height:Measurements.icons.small,
}

const styles = StyleSheet.create({
    checkbox:{
      ...checkboxDefault,
      backgroundColor:'transparent',

    },
    clicked:{
      backgroundColor:Colors.BG_CHECKBOX_RED,
      ...checkboxDefault,
      borderColor:Colors.BORDER_RED
    }
  })

  export default styles