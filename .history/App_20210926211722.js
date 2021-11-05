/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomScreen = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Compte" component={UserScreen}/>
        <Tab.Screen name="Confirmation" component={ConnexionScreen}/>
        <Tab.Screen name="Panier" component={CartScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}} component={BottomScreen} />
        <Stack.Screen name="Categorie" component={CategorieScreen} />
        <Stack.Screen name="Inscription" component={InscriptionScreen} />
        <Stack.Screen name="Produit" component={ProduitScreen} />
        <Stack.Screen name="Panier" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;