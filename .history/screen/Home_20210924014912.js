/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Icon, Image } from 'react-native-elements';

const HomeScreen = props => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden="hidden"/>
            <Header
                leftComponent={<Icon name="menu" type="font-awesome" color="#FFF" />}
                centerComponent={<Image source={require('../assets/logobleu.jpg')} style={{width: 200, height: 50}} />}
                rightComponent={{ icon:'menu'}}
                backgroundColor="#2e3190"
            />
            <Text>Hello bro</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
    },
});

export default HomeScreen;