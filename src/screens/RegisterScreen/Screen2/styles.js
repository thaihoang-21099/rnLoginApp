import {StyleSheet} from 'react-native';
import Measurements from '../../../native-base-theme/Measurements'

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    containerInner:{
        flex:1,
        paddingLeft:Measurements.mediumPadding,
        paddingRight:Measurements.mediumPadding,

        marginTop:Measurements.doubleBasePadding
    },
    button:{
        marginTop:Measurements.smallMargin+20,
        //marginRight:Measurements.baseMargin,
        marginHorizontal:Measurements.baseMargin

    }
})
export default styles;