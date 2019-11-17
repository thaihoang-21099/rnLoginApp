// @flow

import variable from './../variables/platform';
import Colors from '../Color';
import Fonts from '../fonts';

export default (variables /* : * */ = variable) => {
  const check={
    color:Colors.TEXT_BLUE_STRONG,
    fontSize:Fonts.Size.regular,
  };
  const textTheme = {
    fontSize: Fonts.Size.regular,
    fontFamily: Fonts.Type.light,
    color: Colors.TEXT_GRAY_LIGHT,
    '.note': {
      color: '#3f3f3f',
      fontSize: variables.noteFontSize,
    },
    '.title':{
      fontSize:Fonts.Size.regular,
      color:Colors.TEXT_BLUE_STRONG,
      fontFamily: Fonts.Type.medium,
    },
    '.checkLight':{
      ...check,
      fontFamily: Fonts.Type.light,
    },
    '.checkStrong':{
      ...check,
      fontFamily: Fonts.Type.medium,
    },
    '.inputRequired':{
      color:Colors.TEXT_BLUE_LIGHT,
      fontSize:Fonts.Size.smallInput
    },
    '.inputPlaceholder':{
      fontSize:Fonts.Size.smallInput
    },
    '.italic':{
      fontStyle:'italic',
      //fontFamily: Fonts.Type.lightItalic,

      color:'#767676',
      '.note':{
        fontSize:13,
        lineHeight:20
      }
    }

  };

  return textTheme;
};
