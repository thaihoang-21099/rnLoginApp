import React from 'react';
import {SafeAreaView} from 'react-native';
import { Container, Content, Text, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';


import AppNavigator from './navigation';

 class App extends React.Component{
  render(){
    return(
      <StyleProvider style={getTheme(material)}>
        <AppNavigator/>
      </StyleProvider>
    )
  }
}

export default App