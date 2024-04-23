/* eslint-disable prettier/prettier */
import { LogBox } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();


LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const AppNavigation = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' options={{headerShown: false}} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default AppNavigation;