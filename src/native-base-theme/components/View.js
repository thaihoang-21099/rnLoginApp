// @flow

import variable from './../variables/platform';
import Colors from '../Color';
import Measurments from '../Measurements';
import Fonts from '../fonts';

export default (variables /* : * */ = variable) => {
  const viewTheme = {
    '.padder': {
      padding: variables.contentPadding
    },
    '.input': {
      flexDirection: 'row',
      alignItems:'center',
      padding: Measurments.mediumMargin,
      backgroundColor: Colors.BG_WHITE,
      borderWidth: Measurments.border.tiny,
      borderColor: Colors.BORDER_GRAY,
      marginBottom:Measurments.baseMargin
    },
    '.background':{
      width:"100%" ,
      //height: Measurments.screenHeight,
      position: 'absolute',
      top: 0,
      left: 0,
    }
  };

  return viewTheme;
};
