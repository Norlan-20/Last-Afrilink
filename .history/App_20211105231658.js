/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/Home';
import CartScreen from './screen/Cart';
import UserScreen from './screen/User';
import MenuScreen from './screen/Menu';
import AlertScreen from './screen/Alert';
import Message from './screen/Message';
import MessageMenu from './screen/MessageMenu';
import NewBoutique from './screen/createBoutique';
import NewBoutique1 from './screen/createBoutique1';
import ValidationBoutique  from './screen/ValidationCreation';
import AuthChoiceScreen from './screen/AuthChoice';
import ConnexionScreen from './screen/Connexion';
import InscriptionScreen from './screen/Inscription';
import Parametre from './screen/Parametre';
import OnBoardingView from './screen/OnBoardingView';
import PrintScreen from './screen/PrintScreen';
import Notification from './screen/Notification';
import { Provider } from 'react-redux';
import Store from './Store/configureStore';
import Historique from './screen/Historique';
import Commande from './screen/Commande';
import FavorisScreen from './screen/Favoris';
import Conditions from './screen/Conditions';
import Politique from './screen/Politique';
import Boutique from './screen/Boutique';
import Localisation from './screen/Localisation';
import Dashboard from './screen/Dashboard';
import AddProduit from './screen/AddProduit';
import ProductScreen from './screen/Product';
import CountItem from './Composant/countItem';

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
						tabBarBadge: <CountItem />,
						
					}}/>
					<Tab.Screen name="Notification" component={Notification} options={{
						tabBarIcon: ({color,size}) => (
							<Icon name="bell" type="feather" color={white} size={22}  />
						),
						tabBarBadge: true,
					}}/>
					<Tab.Screen name="Menu" component={MenuScreen} options={{
					tabBarIcon: ({color,size}) => (
						<Icon name="menu" type="feather" color={white} size={22} />
					)}}/>
			</Tab.Navigator>
	);
};

const App = () => {
	return (
		<Provider store={Store}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen options={{ headerShown: false}} name="OnBoard" component={OnBoardingView} />
					<Stack.Screen options={{ headerShown: false }} name="Bottom" component={TabScreen} />
					<Stack.Screen options={{ headerShown: true,  headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'} }} name="Print" component={PrintScreen} />
					<Stack.Screen options={{ headerShown: true,  headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'} }} name="Count" component={CountItem} />
					<Stack.Screen options={{ headerShown: true, headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'}  }} name="Parametre" component={Parametre} />
					<Stack.Screen options={{ headerShown: false }} name="AuthChoiceScreen" component={AuthChoiceScreen} />
					<Stack.Screen options={{ headerShown: true, headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'}  }} name="Connexion" component={ConnexionScreen} />
					<Stack.Screen options={{ headerShown: true, headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'}  }} name="Inscription" component={InscriptionScreen} />
					<Stack.Screen options={{ headerShown: true, headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'}  }} name="Message" component={Message} />
					<Stack.Screen options={{ headerShown: true, headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'}  }} name="Boutique" component={NewBoutique} />
					<Stack.Screen options={{ headerShown: true, headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'}  }} name="Boutique1" component={NewBoutique1} />
					<Stack.Screen options={{ headerShown: false, headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'}  }} name="Validation" component={ValidationBoutique} />
					<Stack.Screen options={{ headerShown: true, headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'}  }} name="Historique" component={Historique} />
					<Stack.Screen options={{ headerShown: true, headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'}  }} name="Commande" component={Commande} />
					<Stack.Screen options={{ headerShown: true, headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'}  }} name="Favorie" component={FavorisScreen} />
					<Stack.Screen options={{ headerShown: true, headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'}  }} name="Politique" component={Politique} />
					<Stack.Screen options={{ headerShown: true, headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'}  }} name="Conditions" component={Conditions}/>
					<Stack.Screen options={{ headerShown: true, headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'}  }} name="BoutiqueScreen" component={Boutique}/>
					<Stack.Screen options={{ headerShown: true, headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'}  }} name="MessageMenu" component={MessageMenu}/>
					<Stack.Screen options={{ headerShown: true, headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'}  }} name="Localisation" component={Localisation}/>
					<Stack.Screen options={{ headerShown: true, headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'}  }} name="Dashboard" component={Dashboard}/>
					<Stack.Screen options={{ headerShown: true, headerStyle: {backgroundColor: primary,color: 'white'}, headerTitleStyle: {color: 'white'}, headerBackTitleStyle: {color: 'white'}  }} name="Article" component={ProductScreen}/>
				</Stack.Navigator>
			</NavigationContainer>
        </Provider>
		 /*<NewBoutique />*/
	);
};

export default App;