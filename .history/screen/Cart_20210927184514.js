/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, ScrollView, Dimensions, StyleSheet, Image, TouchableOpacity } from  'react-native'
import { Icon } from 'react-native-elements';
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
                    <View style={styles.addDelete}>
                        <Icon name="trash" type="evilicon" size={40} color="#444"/>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cartProductContainer}>
                <View style={styles.productImageContiner}><Text>jjjf</Text></View>
                <View style={styles.productInfoContiner}>
                    <Text style={styles.productName}>i Phone 13 Pro Argent</Text>
                    <Text style={styles.productPrice}>1 000 000 XOF</Text>
                    <View style={styles.addDelete}>
                        <Icon name="trash" type="evilicon" size={40} color="#444"/>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cartProductContainer}>
                <View style={styles.productImageContiner}><Text>jjjf</Text></View>
                <View style={styles.productInfoContiner}>
                    <Text style={styles.productName}>i Phone 13 Pro Argent</Text>
                    <Text style={styles.productPrice}>1 000 000 XOF</Text>
                    <View style={styles.addDelete}>
                        <Icon name="trash" type="evilicon" size={40} color="#444"/>
                    </View>
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
    },
    cartProductContainer: {
        flexDirection: 'row',
        backgroundColor: '#EEE',
        width: WIDTH,
        height: WIDTH / 2 - 60,
        borderRadius: 10,
        marginBottom: 15,
    },
    productImageContiner: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
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
        fontWeight: 'bold',
    },
    addDelete: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

export default CartScreen;