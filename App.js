import 'react-native-gesture-handler';
import React from 'react';
import NavigatorStack from './src/navigation/NavigatorStack';
import {NavigationContainer} from '@react-navigation/native';
import TabsNavigator from './src/navigation/TabsNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <NavigatorStack /> */}
      <TabsNavigator />
    </NavigationContainer>
  );
};

export default App;
