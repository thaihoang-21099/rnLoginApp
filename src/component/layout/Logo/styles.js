import {StyleSheet} from 'react-native';
import Measurements from '../../../native-base-theme/Measurements';

const styles = StyleSheet.create({
    logo:{
        width:Measurements.logo.medium.width,
        height:Measurements.logo.medium.height,
        marginBottom:Measurements.largeMargin,
        marginTop:Measurements.mediumMargin,
    }
})

export default styles