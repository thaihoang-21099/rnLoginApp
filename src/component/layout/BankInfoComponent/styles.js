import {StyleSheet} from 'react-native';
import Measurements from '../../../native-base-theme/Measurements';
import Colors from '../../../native-base-theme/Colors'


const styles = StyleSheet.create({
    content:{
        padding:Measurements.mediumPadding,
        marginTop:Measurements.smallPadding,
        paddingTop:5
    },

    button:{
        marginTop:Measurements.doubleBaseMargin,
        //marginRight:Measurements.mediumMargin
    }
})
export default styles;