/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screen/Home';
import CartScreen from './screen/Cart';
import UserScreen from './screen/User';
import MenuScreen from './screen/Menu';
import AuthChoiceScreen from './screen/AuthChoice';
import ConnexionScreen from './screen/Connexion';
import OnBoardingView from './screen/OnBoardingView';
import Notification from './screen/Notification';
import InscriptionScreen from './screen/Inscription';
import ProductScreen from './screen/Product';
import FavorisScreen from './screen/Favoris';

const primary = '#2e3190';
const secondary = '#fab917';
const white = '#FFFFFF';
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabScreen = () => {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false }} barStyle={{ backgroundColor: primary }} activeColor={secondary} inactiveColor={white} >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({color,size}) => (
            <Icon name="home" type="feather" color={white} size={22} />
          )}}/>
          <Tab.Screen name="Compte" component={UserScreen} options={{
          tabBarIcon: ({color,size}) => (
            <Icon name="user" type="feather" color={white} size={22} />
          )}}/>
          <Tab.Screen name="Panier" component={CartScreen} options={{
            tabBarIcon: ({color,size}) => (
              <Icon name="shopping-cart" type="feather" color={white} size={22} />
            ),
            tabBarBadge: true,
          }}/>
          <Tab.Screen name="Notification" component={Notification} options={{
            tabBarIcon: ({color,size}) => (
              <Icon name="bell" type="feather" color={white} size={22} />
            ),
            tabBarBadge: true,
          }}/>
          <Tab.Screen name="Menu" component={FavorisScreen} options={{
          tabBarIcon: ({color,size}) => (
            <Icon name="menu" type="feather" color={white} size={22} />
          )}}/>
      </Tab.Navigator>
  );
};

const App = () => {
  return (
     <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="OnBoard" component={OnBoardingView} />
        <Stack.Screen options={{ headerShown: false }} name="Bottom" component={TabScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Connexion" component={ConnexionScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Inscription" component={InscriptionScreen} />
       </Stack.Navigator>
     </NavigationContainer>
  );
};

export default App;