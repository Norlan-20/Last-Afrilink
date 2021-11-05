/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon, Image } from 'react-native-elements';

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
                <TouchableOpacity style={styles.optionContainerBloc2}>
                    <View>
                        <Icon name="trash" type="evilicon" size={30} color="#444" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionContainerBloc2}></TouchableOpacity>
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
        marginBottom: 8,
        width: width-40,
        backgroundColor: '#444',
        alignItems: 'center',
    },
    optionContainerBloc2:{
        flexDirection: 'row',
        height: 50,
        marginBottom: 8,
        width: width - 40,
        backgroundColor: '#DADADA',
        borderRadius: 5,
        alignItems: 'center',
    },
});

export default UserScreen;