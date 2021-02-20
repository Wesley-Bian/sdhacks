import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CustomerHome from './app/CustomerHome';
import CustomerAdd from './app/CustomerAdd';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen 
              name="HOME" 
              component={CustomerHome}
          />

          <Stack.Screen 
              name="ADD TO WAITLIST"
              component={CustomerAdd}
          />
      </Stack.Navigator>
  </NavigationContainer>
  );
}



