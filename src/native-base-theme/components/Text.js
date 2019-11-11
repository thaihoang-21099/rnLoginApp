// @flow

import variable from './../variables/platform';
import Colors from '../Color';
import Fonts from '../fonts';

export default (variables /* : * */ = variable) => {
  const textTheme = {
    fontSize: Fonts.Size.regular,
    fontFamily: Fonts.Type.light,
    color: Colors.TEXT_GRAY_LIGHT,
    '.note': {
      color: '#3f3f3f',
      fontSize: variables.noteFontSize,
    },
    '.title':{
      fontSize:Fonts.Size.medium,
      color:Colors.TEXT_BLUE_STRONG,
      fontFamily: Fonts.Type.medium,
      //fontWeight:'700'
    },
    '.agree':{

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
      
    }

  };

  return textTheme;
};
