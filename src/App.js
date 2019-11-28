import React from 'react';
import { SafeAreaView, View} from 'react-native';
import { Container, Content, Text, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import { Provider as PaperProvider } from 'react-native-paper';


import AppNavigator from './navigation';

class App extends React.Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <View style={{ flex: 1 }}>
          <AppNavigator />
        </View>
      </StyleProvider>
    )
  }
}

export default App

