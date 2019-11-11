// @flow

import variable from './../variables/platform';
import Colors from '../Color'

export default (variables /* : * */ = variable) => {
  const checkBoxTheme = {
    '.checked': {
      backgroundColor:Colors.BG_CHECKBOX_RED,
      borderColor:Colors.BORDER_RED,
      // 'NativeBase.Icon': {
      //   color: variables.checkboxTickColor,
        
      // },
      // 'NativeBase.IconNB': {
      //   color: variables.checkboxTickColor
      // }
    },
    // 'NativeBase.Icon': {
    //   color: 'transparent',
    //   lineHeight: variables.CheckboxIconSize,
    //   marginTop: variables.CheckboxIconMarginTop,
    //   fontSize: variables.CheckboxFontSize
    // },
    // 'NativeBase.IconNB': {
    //   color: 'red',
    //   lineHeight: variables.CheckboxIconSize,
    //   marginTop: variables.CheckboxIconMarginTop,
    //   fontSize: variables.CheckboxFontSize
    // },
    //borderRadius: variables.CheckboxRadius,
    borderRadius:50,
    overflow: 'hidden',
    width: variables.checkboxSize,
    height: variables.checkboxSize,
    borderWidth: variables.CheckboxBorderWidth,
    //paddingLeft: variables.CheckboxPaddingLeft - 1,
    //paddingBottom: variables.CheckboxPaddingBottom,
    //left: 10
    backgroundColor:Colors.BG_CHECKBOX_WHITE,
    borderColor:Colors.BORDER_GRAY_LIGHT,
    color:'white'
  };

  return checkBoxTheme;
};
