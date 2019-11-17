import {StyleSheet} from 'react-native';
import Measurements from '../../../native-base-theme/Measurements'

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    containerInner:{
        flex:1,
        paddingLeft:Measurements.mediumPadding,
        marginTop:Measurements.doubleBasePadding
    },
    button:{
        marginTop:Measurements.doubleBaseMargin+5,
        marginRight:Measurements.doubleBaseMargin+5,
        marginLeft:Measurements.baseMargin
    }
})
export default styles;