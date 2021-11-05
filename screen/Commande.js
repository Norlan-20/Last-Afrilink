/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Commande =()=> {
  return (
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: '#2e3190' },
      }}>
          <Tab.Screen name="Commande_T" component={Commande_T} options={{ tabBarLabel: 'En Cours' }}/>
          <Tab.Screen name="Commande_C" component={Commande_C} options={{ tabBarLabel: 'Approuver' }}/>
      </Tab.Navigator>
  );
}

const Commande_T = (props) =>{
    return(
        <View style={styles.container}>
          <TouchableOpacity style={styles.card}>
              <View style={styles.rowL1}>
                <Text style={styles.title}>PAYEMENT EFFECTUE</Text>
                <Text>USD 149.000</Text>
              </View>
              <View style={styles.rowL2}>
                <Text>Wesdnesday/ 22.2.2020</Text>
                <Text style={{color:"#009F18",fontWeight:'bold'}}>+IN</Text>
              </View>
          </TouchableOpacity>
        </View>
    )
}

const Commande_C = (props) =>{
    return(
        <View style={styles.container}>
          <View style={styles.card}>
              <View style={styles.rowL1}>
                <Text style={styles.title}>PAYEMENT EN COURS</Text>
                <Text>USD 149.000</Text>
              </View>
              <View style={styles.rowL2}>
                <Text>Wesdnesday/ 22.2.2020</Text>
                <Text style={{color:"#009F18",fontWeight:'bold'}}>+IN</Text>
              </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    rowL1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
    },
    rowL2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 15,
    },
    card:{
      padding: 10,
      elevation: 0.3,
      marginVertical: 5,
    }
})
export default Commande;