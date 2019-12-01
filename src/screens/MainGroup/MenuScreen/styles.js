import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
    },
    top: {
        backgroundColor: '#fff',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 15,
        paddingVertical: 15
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menu: {
        backgroundColor: '#FFF',
        marginTop: 15
    },
    item: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#eeeeee',
        paddingLeft: 20
    }
})

export default styles;