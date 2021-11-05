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
                {/* <View></View> */}
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
    },
    cartProductContainer: {
        backgroundColor: '#DADADA',
        width: WIDTH,
        height: WIDTH / 2,
    },
    productImageContiner: {
        flex: 2,
        backgroundColor: 'yellow',
    },
});

export default CartScreen;