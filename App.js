import 'react-native-gesture-handler';
import React from 'react';
import NavigatorStack from './src/navigation/NavigatorStack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <NavigatorStack />
    </NavigationContainer>
  );
};

export default App;
