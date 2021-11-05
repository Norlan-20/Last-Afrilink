/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, StatusBar, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Icon, Image, SearchBar } from 'react-native-elements';

const {width,height} = Dimensions.get('window')

const HomeScreen = props => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={false}/>
            <Header
                leftComponent={<Icon name="menu" type="font-awesome" color="#FFF" />}
                centerComponent={<Image source={require('../assets/logobleu.jpg')} style={{width: 200, height: 50}} />}
                rightComponent={{ icon:'menu'}}
                backgroundColor="#2e3190"
            />
            <SearchBar
                placeholder="Rechercher"
                round
                lightTheme
                containerStyle={{ width: width,maxHeight: 50}}
                inputStyle={{maxHeight: 50}}
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