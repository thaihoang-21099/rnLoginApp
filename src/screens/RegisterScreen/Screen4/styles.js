import {StyleSheet} from 'react-native';
import Measurements from '../../../native-base-theme/Measurements';
import Colors from '../../../native-base-theme/Color'


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        paddingTop:0,
        backgroundColor:Colors.BG_GRAY,
    },
    containerInner:{
        marginTop:Measurements.doubleBasePadding,
        backgroundColor:Colors.BG_WHITE,
        flex:1,
        marginBottom:30,
        borderRadius:3,
        borderWidth:0.25,
        borderColor:Colors.BORDER_GRAY_LIGHT,
    },

    
})
export default styles;