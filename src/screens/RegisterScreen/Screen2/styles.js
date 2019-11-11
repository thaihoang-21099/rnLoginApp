import {StyleSheet} from 'react-native';
import Measurements from '../../../native-base-theme/Measurements'

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    containerInner:{
        flex:1,
        paddingLeft:Measurements.basePadding,
        marginTop:Measurements.doubleBasePadding
    },
    button:{
        marginTop:Measurements.smallMargin,
        marginRight:Measurements.baseMargin
    }
})
export default styles;