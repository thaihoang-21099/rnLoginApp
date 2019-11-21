import { StyleSheet } from 'react-native';
import Measurements from '../../../native-base-theme/Measurements';
import Colors from '../../../native-base-theme/Colors'


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    containerInner: {
        flex: 1,
        paddingLeft: Measurements.mediumPadding,
        paddingRight: Measurements.mediumPadding,
        marginTop: Measurements.doubleBasePadding,
    },
    button: {
        marginTop: Measurements.doubleBaseMargin,
        marginBottom: Measurements.baseMargin,
        marginHorizontal:Measurements.baseMargin
    },
    webview: {
        borderWidth: Measurements.border.tiny,
        borderColor: Colors.BORDER_GRAY_LIGHT,
        marginTop: Measurements.baseMargin,
        height: 325,
        //shadowOffset: { width: 0, height: 0, },
        //shadowColor: 'gray',
        //shadowOpacity: 0.25,

    }
})
export default styles;