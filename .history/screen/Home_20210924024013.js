/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, StatusBar, Dimensions} from 'react-native';
import { Header, Image, SearchBar } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons/FontAwesome';

const {width,height} = Dimensions.get('window');
const fond = '#F7F7F7';
const primary = '#2e3190';
const search = '#DDDDDD';

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <StatusBar hidden={false}/>
            <Header
                leftComponent={<Icon name="menu"  color="#FFF" />}
                centerComponent={<Image source={require('../assets/logobleu.jpg')} style={{width: 200, height: 50}} />}
                rightComponent={{ icon:'menu'}}
                backgroundColor={primary}
            />
            <SearchBar
                placeholder="Rechercher"
                round
                lightTheme
                containerStyle={{ width: width,backgroundColor: fond}}
                inputContainerStyle={{ height: 45, backgroundColor: search, borderRadius: 150 }}
                inputStyle={{ height: 45,backgroundColor: search }}
                searchIcon={<Icon name="user" type="ionicon" />}
                showCancel
                cancelIcon
                onClear
            />
            <Text>Hello bro</Text>
        </View>
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
