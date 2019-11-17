import { StyleSheet } from 'react-native';
import Measurements from '../../native-base-theme/Measurements';
const { icons, baseMargin, doubleBaseMargin } = Measurements;
import Colors from '../../native-base-theme/Color';




const styles = StyleSheet.create({
     temp: {
        
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: doubleBaseMargin,
    },
    circle: {
        backgroundColor: 'transparent',
        width: icons.small,
        height: icons.small,
        borderWidth: 0.5,
        borderRadius: 50,
        marginRight: baseMargin,
        borderColor: Colors.BORDER_RED,
    },
    checkedCircle: {
        
        backgroundColor: Colors.BG_RED,
        justifyContent: 'center',
        alignItems: 'center',
        width: icons.small,
        height: icons.small,
        borderWidth: 0.5,
        borderRadius: 50,
        marginRight: baseMargin,
        borderColor: Colors.BORDER_RED,
    }
})

export default styles;