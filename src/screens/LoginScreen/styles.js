import Measurements from '../../native-base-theme/Measurements';
import Colors from '../../native-base-theme/Color';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerInner: {
        flex: 1,
        width: '80%',
        marginTop: Measurements.doubleBaseMargin * 2,
    },
    blockTop: {
        width: '100%',
        padding: Measurements.largePadding,
        backgroundColor: Colors.BG_WHITE,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    blockDown: {
        width: '100%',
        padding: Measurements.largePadding,
        marginTop: Measurements.largeMargin
    },

    backgroundTop: {
        backgroundColor: Colors.BG_RED,
        height: 335
    },
    backgroundDown: {
        backgroundColor: Colors.BG_BLUE,
        height: '70%'
    },
    triangleDown: {
        width: '100%',
        height: 90,
    },
    iconInput: {
        width: Measurements.icons.tiny,
        height: Measurements.icons.tiny,
        marginRight: Measurements.doubleBaseMargin
    },
    iconSocial: {
        width: Measurements.icons.medium,
        height: Measurements.icons.medium
    }

})

export default styles;