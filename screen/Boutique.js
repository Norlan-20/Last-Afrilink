import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native';
import {FloatingAction} from 'react-native-floating-action';

const actions=[
    {
    id: 1,
    text: "Creer Boutique",
    name: "Boutique",
    position: 1
},
{
    id: 2,
    text: "Modifie Boutique",
    name: "Other",
    position: 2
},

]

const Boutique= props =>{
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity style={styles.rowFrontVisible}
          onPress={() => props.navigation.navigate('Message')}
          underlayColor={'#aaa'} onPress={()=>props.navigation.navigate('Dashboard')}>
          <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
            <View style={{width: 80,borderWidth: 0.4,borderRadius: 20}}>
                <Image source={require('./../assets/pizza.png')} resizeMode="cover" style={{width: "100%", height: "100%"}}/>
            </View>
            <View>
                <Text style={styles.title} numberOfLines={1}>
                Afrilink
                </Text>
                <Text style={styles.details} numberOfLines={1}>
                  Vente de bouffe en tout genre
                </Text>
                <Text style={styles.date}>{Date()}</Text>
            </View>
          </View>
        </TouchableOpacity>
      <FloatingAction
          ref={(id) => {{}}}
          actions={actions}
          onPressItem={ name => props.navigation.navigate(`${name}`)}
          position={"right"}
      />
     </View>
  );
}
const styles = StyleSheet.create({
  rowFrontVisible: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 90,
    padding: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666',
  },
  details: {
    fontSize: 12,
    color: '#999',
  },
  date:{
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  }
})

export default Boutique;
