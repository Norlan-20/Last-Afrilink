/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';

const fond = '#F7F7F7';
const primary = '#2e3190';
const search = '#DDDDDD';
const {width,height} = Dimensions.get('window');
const WIDTH = width - 150;

const UserScreen = props => {
    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Image source={require('../assets/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png') } style={{width: WIDTH, height: WIDTH,}} />
                <Text style={styles.surname}>John Doe</Text>
            </View>
            <View style={styles.block1}>
                <TouchableOpacity style={styles.optionContainer}></TouchableOpacity>
                <TouchableOpacity style={styles.optionContainer}></TouchableOpacity>
                <TouchableOpacity style={styles.optionContainer}></TouchableOpacity>
                
            </View>
            <View>
                <Text>jdnsxnk</Text>
                <Text>jdnsxnk</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: fond,
        alignItems: 'center',
    },
    surname: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    block1: {
        marginVertical: 30,
    },
    block2: {

    },
    optionContainer: {
        flexDirection: 'row',
        height: 50,
        width: width-20,
        backgroundColor: '#DADADA',
    }
});

export default UserScreen;