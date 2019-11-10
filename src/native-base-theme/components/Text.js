// @flow

import variable from './../variables/platform';
import Colors from '../Color';
import Fonts from '../fonts';

export default (variables /* : * */ = variable) => {
  const textTheme = {
    fontSize: Fonts.Size.regular,
    fontFamily: Fonts.Type.light,
    color: Colors.TEXT_WHITE,
    '.note': {
      color: '#3f3f3f',
      fontSize: variables.noteFontSize,
    },

  };

  return textTheme;
};
