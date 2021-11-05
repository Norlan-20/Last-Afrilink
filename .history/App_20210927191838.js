/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import { Icon} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/Home';
import UserScreen from './screen/User';
import ConfirmationScreen from './screen/Confirmation';
import ConnexionScreen from './screen/Connexion';
import InscriptionScreen from './screen/Inscription';
import CategorieScreen from './screen/Categorie';
import ProduitScreen from './screen/Produit';
import CartScreen from './screen/Cart';
import FavorisScreen from './screen/Favoris';

const primary = '#2e3190';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomScreen = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} >
        <Tab.Screen name="Home" component={HomeScreen} options = {{
							tabBarIcon : ({ color, size}) => (
								<Icon name="home" type="font-awesome" color={primary} size={30} />
							)}}/>
        <Tab.Screen name="Confirmation" component={ConnexionScreen}options = {{
							tabBarIcon : ({ color, size}) => (
								<Icon name="heart" type="evilicon" color={primary} size={30} />
							)}}/>
        {/* <Tab.Screen options={{headerShown: true}} name="Panier" component={CartScreen} /> */}
        <Tab.Screen name="Compte" component={UserScreen} options = {{
							tabBarIcon : ({ color, size}) => (
								<Icon name="user" type="evilicon" color={primary} size={30} />
							)}}/>
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bottom" options={{headerShown: false}} component={BottomScreen} />
        <Stack.Screen name="Categorie" component={CategorieScreen} />
        <Stack.Screen name="Inscription" component={InscriptionScreen} />
        <Stack.Screen name="Produit" component={ProduitScreen} />
        <Stack.Screen name="Panier" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;