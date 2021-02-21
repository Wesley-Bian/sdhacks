import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


import CustomerHome from './app/CustomerHome';
import CustomerAdd from './app/CustomerAdd';


// const Stack = createStackNavigator();

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/"><CustomerHome /></Route>
      <Route path="/CustomerAdd"><CustomerAdd /></Route>
    </BrowserRouter>

  //   <NavigationContainer>
  //     <Stack.Navigator>
  //         <Stack.Screen 
  //             name="HOME" 
  //             component={CustomerHome}
  //         />

  //         <Stack.Screen 
  //             name="ADD TO WAITLIST"
  //             component={CustomerAdd}
  //         />
  //     </Stack.Navigator>
  // </NavigationContainer>
  );
}



