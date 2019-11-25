import React from 'react';

import { StyleSheet, TouchableOpacity, ViewPropTypes, Animated } from 'react-native'

import { View, Text } from 'native-base';

import PropTypes from 'prop-types';

import createReactClass from 'create-react-class';

const DefaultTabBar = createReactClass({
    propTypes: {
        goToPage: PropTypes.func,
        activeTab: PropTypes.number,
        tabs: PropTypes.array,
        backgroundColor: PropTypes.string,
        activeTextColor: PropTypes.string,
        inactiveTextColor: PropTypes.string,
        textStyle: Text.propTypes.style,
        tabStyle: ViewPropTypes.style,
        renderTab: PropTypes.func,
        underlineStyle: ViewPropTypes.style,
    },

    getDefaultProps() {
        return {
            activeTextColor: '#FFF',
            inactiveTextColor: '#ffd2d2',
            backgroundColor: null,
        };
    },
    renderTab(name, page, isTabActive, onPressHandle) {
        const { activeTextColor, inactiveTextColor, textStyle, } = this.props;
        const textColor = isTabActive ? activeTextColor : inactiveTextColor;
        // const fontWeight = isTabActive ? 'bold' : 'normal';

        return (
            <TouchableOpacity style={styles.tab} key={name} onPress={() => onPressHandle(page)}>
                <Text style={[textStyle,{ color: textColor }]}>{name}</Text>
            </TouchableOpacity>
        )
    },
    render() {
        const containerWidth = this.props.containerWidth;
        const numberOfTabs = this.props.tabs.length;
        const tabUnderlineStyle = {
            position: 'absolute',
            width: containerWidth / numberOfTabs,
            height: 4,
            backgroundColor: '#ffd2d2',
            bottom: 0,
        };
        const translateX = this.props.scrollValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, containerWidth / numberOfTabs],
        })
        return (
            <View style={{ flexDirection: 'row', alignItems:'center',backgroundColor: '#d72e2f',paddingVertical:5 }}>
                {this.props.tabs.map((name, page) => {
                    const isTabActive = this.props.activeTab === page;
                    const renderTab = this.props.renderTab || this.renderTab;
                    return renderTab(name, page, isTabActive, this.props.goToPage);
                })}
                <Animated.View
                    style={[
                        tabUnderlineStyle,
                        {
                            transform: [
                                { translateX },
                            ],
                        },
                        this.props.underlineStyle,
                    ]}
                />
            </View >
        )
    }
})


const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    }
})

export default DefaultTabBar;