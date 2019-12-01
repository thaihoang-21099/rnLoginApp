import React from 'react';
import BottomSheet from 'react-native-bottomsheet';

import { View } from 'react-native';

import PropTypes from 'prop-types';

import createReactClass from 'create-react-class';


const DefaultTabBar = createReactClass({
    propTypes: {
        onGetFromLib: PropTypes.func,
        onTakeAShot: PropTypes.func,
    },

    getDefaultProps() {
        return {
            onGetFromLib: () => { },
            onTakeAShot: () => { }
        };
    },

    render() {
        const {onGetFromLib,onTakeAShot} = this.props
        return (
            <View>
                {BottomSheet.showBottomSheetWithOptions({
                    options: ['Chọn ảnh từ thư viên', 'Chụp ảnh', 'Huỷ'],
                    dark: true,
                    cancelButtonIndex: 2,
                }, (value) => {
                    switch (value) {
                        case 0: { onGetFromLib(); return }
                        case 1: { onTakeAShot(); return };
                    }
                })}
            </View>
        )
    }
})



export default DefaultTabBar;


