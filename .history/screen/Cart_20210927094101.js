/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, ScrollView, Dimensions, StyleSheet, Image, TouchableOpacity } from  'react-native'
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const {width,height} = Dimensions.get('window');
const WIDTH = width - 20 ;
const fond = '#F7F7F7';
const primary = '#2e3190';

const CartScreen = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.cartProductContainer}>
                <View style={styles.productImageContiner}><Text>jjjf</Text></View>
                <View style={styles.productInfoContiner}>
                    <Text style={styles.productName}>i Phone 13 Pro Argent</Text>
                    <Text style={styles.productPrice}>1 000 000 XOF</Text>
                    <View></View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        backgroundColor: fond,
        alignItems: 'center',
        marginTop: 50,
    },
    cartProductContainer: {
        flexDirection: 'row',
        backgroundColor: '#DADADA',
        width: WIDTH,
        height: WIDTH / 2 - 60,
        borderRadius: 10,
    },
    productImageContiner: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    productInfoContiner: {
        flex: 2,
        // backgroundColor: 'red',
        padding: 8,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 2,
    },
    productPrice: {
        fontSize: 18,
        color: primary,
        paddingBottom: 5,
    },
});

export default CartScreen;