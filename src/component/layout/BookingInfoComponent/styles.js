import { StyleSheet } from 'react-native';
import Color from '../../../native-base-theme/Colors';
import Measurement from '../../../native-base-theme/Measurements';
import Font from '../../../native-base-theme/Fonts';


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
        marginTop: 10,
        marginHorizontal: 10

    },
    blockAction: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        paddingVertical: Measurement.smallPadding
    },
    blockTitle: {
        paddingHorizontal: Measurement.mediumPadding,
        paddingVertical: Measurement.basePadding,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: Measurement.border.small,
        borderBottomColor: '#f1f1f1'
    },
    textTitle: {
        color: '#3a5b9b',
        fontWeight: '700'
    },
    textNew: {
        color: Color.TEXT_WHITE,
        fontWeight: '500',
        fontSize: 12,
    },
    blockContent: {
        paddingHorizontal: Measurement.mediumPadding,
        paddingBottom: Measurement.basePadding,
        borderBottomWidth: Measurement.border.small,
        borderBottomColor: '#f1f1f1',
        paddingVertical: 5
    },
    feeDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: Measurement.smallPadding
    },
    infoDetail: {
        flexDirection: 'row',
        paddingTop: Measurement.smallPadding,
        paddingRight: Measurement.basePadding
    },
    text: {
        fontSize: Font.Size.small,
        marginLeft: Measurement.smallMargin,
        color: '#3f3f3f'
    }

})

export default styles;
