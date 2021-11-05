/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
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
            <View>
                <Text>jdnsxnk</Text>
                <Text>jdnsxnk</Text>
                <Text>jdnsxnk</Text>
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
        marginHorizontal: 20,
    },
    block2: {

    },
});

export default UserScreen;