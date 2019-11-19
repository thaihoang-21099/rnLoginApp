import {StyleSheet} from 'react-native';
import Measurements from '../../native-base-theme/Measurements';
import Colors from '../../native-base-theme/Color'


const styles= StyleSheet.create({
    item: {
        padding: Measurements.doubleBasePadding,
        marginHorizontal:Measurements.doubleBaseMargin,
        borderBottomWidth:Measurements.border.tiny,
        borderBottomColor:Colors.BORDER_GRAY_LIGHT,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})

export default styles;