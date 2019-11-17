// @flow

import variable from './../variables/platform';
import Colors from '../Color';
import Measurements from '../Measurements';
import Fonts from '../fonts';

export default (variables /* : * */ = variable) => {
  const flexRow={
    flexDirection:'row'
  };
  const containerCommon={
    flex:1
  };
  const centerCommon={
    ...containerCommon,
    justifyContent:'center',
    alignItems:'center'
  }

  const viewTheme = {
    '.padder': {
      padding: variables.contentPadding
    },
    '.input': {
      //flexDirection: 'row',
      ...flexRow,
      alignItems:'center',
      padding: Measurements.mediumMargin,
      backgroundColor: Colors.BG_WHITE,
      borderWidth: Measurements.border.tiny,
      borderColor: Colors.BORDER_GRAY,
      marginBottom:Measurements.baseMargin
    },
    '.background':{
      width:"100%" ,
      position: 'absolute',
      top: 0,
      left: 0,
    },
    '.inputInfo':{
      ...flexRow,
      paddingRight:Measurements.basePadding,
      paddingBottom:Measurements.smallPadding,
      marginTop:Measurements.doubleBaseMargin,
      justifyContent:'space-between',
      borderBottomWidth:Measurements.border.tiny,
      borderBottomColor:Colors.BORDER_GRAY_LIGHT
    },
    '.tabnote':{
      backgroundColor: Colors.BG_GRAY_LIGHT,
      paddingTop:5,
      paddingBottom:5,
      paddingLeft:Measurements.basePadding,
    },
    '.center':{
      ...centerCommon
    },
    '.container':{
      ...containerCommon,
    }

  };

  return viewTheme;
};
