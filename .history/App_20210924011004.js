/* eslint-disable prettier/prettier */
import React from 'react'
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screen/Home'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Other" component={HomeTabs}/>
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;