import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigatorStack from './NavigatorStack';
import SearchScreen from '../screens/SearchScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{
        headerShown: false,
        activeTintColor: '#5856D6',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          height: Platform.OS === 'ios' ? 80 : 40,
          borderWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={NavigatorStack}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={20} name="list-outline" />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Busqueda',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={20} name="search-outline" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
