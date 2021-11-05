/* eslint-disable prettier/prettier */
import React, { Component,useState,useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, Image, TextInput, StatusBar, ScrollView, Dimensions } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import Store from '../Store/configureStore';

import {
    Header,
    SearchBar
} from 'react-native-elements';

const {width,height} = Dimensions.get('window');
const primary = '#2e3190';
const secondary = '#fab917';

const MyCustomLeftComponent =()=>{
    return(
      <View style={{width: 200}}><Text style={{color: 'white', fontSize: 20,marginVertical: 5}}>Panier</Text></View>
    )
}

const CartScreen = props => {

    useEffect(()=>{
        console.log(props.cart)
    },[]);

    const showCart = () => {
        var ter,sd,cartData;
        Store.subscribe(
            ter = () => {
                sd = Store.getState();
                return sd;
            }
        )
        cartData = ter().panierReducer.cart;
        return (
            <View>
                <FlatList
                    data={cartData}
                    keyExtractor={(_,item)=>item.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                        return <View style={styles.card}>
                                    <View style={{height:70,flex: 1}}>
                                        <Image source={{uri: item.uri}} style={{width: '100%', height:'100%'}} resizeMode="contain"/>
                                    </View>
                                    <View style={{flexDirection: 'column',marginLeft: 10,flex: 2}}>
                                        <View>
                                            <Text style={{fontWeight: 'bold',fontSize: 16}}>{item.name}</Text>
                                        </View>
                                        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                                            <View>
                                                <Text>{item.price} XOF</Text>
                                            </View>
                                            <View>
                                                <Icon
                                                    type="feather"
                                                    name="trash"
                                                    color={primary}
                                                    size={20}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                    }}
                />
            </View>
        );
    }

     return (
        <View style={styles.container}>
            <Header backgroundColor={primary}
            leftComponent = {<MyCustomLeftComponent />}
            />
            <View style={styles.containerHeight}>
                    {showCart()}
            </View>
            <View style={{width: width, position: 'absolute', bottom: 15, alignItems: 'center' }}>
                <View style={{width: '90%',flexDirection: 'row',justifyContent: 'space-between',marginVertical: 15}}>
                    <View><Text style={{fontWeight: 'bold', fontSize: 17}}>Total:</Text></View>
                    <View><Text style={{ fontSize: 17}}>0$</Text></View>
                </View>
                <TouchableOpacity onPress={{}} style={styles.button}>
                    <Text style={{color: 'white',fontWeight: 'bold'}}>Acheter mtn</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerHeight: {
        padding: 10,
    },
    card: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#FFFFFF',
        width: width * 0.95,
        height: height * 0.15,
        alignItems: 'center',
        marginVertical: 5,
        borderRadius: 5,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primary,
        height: 50,
        width: width * 0.95,
        borderRadius: 5,
    },
});

const mapStateToProps = (state) => {
    return {
        cart: state.panierReducer.cart
    };
};

export default connect(mapStateToProps)(CartScreen);