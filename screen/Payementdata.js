/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Text,StyleSheet,TextInput } from 'react-native';

// import { Container } from './styles';

const PayementData = () => {
  return (
      <View>
        <View>
          <View><Text>Prix Total</Text></View>
          <View><Text>$2,280.00</Text></View>
        </View>
        <View>
          <View><Text>Payement Methods</Text></View>
          <View></View>
        </View>
        <View>
          <View><Text>Card Number</Text></View>
          <View>
            <TextInput
                style={styles.input}
                placeholder="Shopify"
                value={this.state.name}
                autoCapitalize="none"
                onChangeText = {{}}
            />
          </View>
        </View>
        <View>
          <View><Text>Payement Methods</Text></View>
          <View></View>
        </View>
        <View>
          <View><Text>Card Holder</Text></View>
          <View>
            <TextInput
                style={styles.input}
                placeholder="Shopify"
                value={this.state.name}
                autoCapitalize="none"
                onChangeText = {{}}
            />
          </View>
        </View>
        <View>
          <View><Text>Enregistrer Les information de la carte pour les future Payement</Text></View>
        </View>
        <View>
          <View><Text>Payement Methods</Text></View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding:10,
        borderColor:'#D8D8D8',
        borderRadius: 10,
        elevation: 1,
        backgroundColor:'#ffffff',
        color: "#000000",
    },
})
export default PayementData;