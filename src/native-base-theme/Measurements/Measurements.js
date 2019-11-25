import {
  Dimensions,
  Platform,
  StatusBar
} from 'react-native';


const {
  deviceWidth,
  deviceHeight
} = Dimensions.get('window');

// Used via Measurements.baseMargin
const Measurements = {
  //Magrin
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  mediumMargin:15,
  largeMargin:30,
  doubleBaseMargin: 20,
  smallMargin: 5,
  //Padding
  paddingHorizontal: 10,
  paddingVertical: 10,
  largePadding: 25,
  basePadding: 10,
  mediumPadding:15,
  doubleMediumPadding:30,
  doubleBasePadding: 20,
  smallPadding: 5,
  //other
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  container: 70,
  screenWidth: deviceWidth < deviceHeight ? deviceWidth : deviceHeight,
  screenHeight: deviceWidth < deviceHeight ? deviceHeight : deviceWidth,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  statusBarHeight: (Platform.OS === 'ios') ? 20 : StatusBar.currentHeight,
  buttonRadius: 4,
  inputHeight: 40,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    tiny:15,
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  },
  logo:{
    medium:{
      width: 210,
      height:36
    }
  },
  border:{
    tiny:0.25,
    small:0.5,
    regular:1
  },

};

export default Measurements;
