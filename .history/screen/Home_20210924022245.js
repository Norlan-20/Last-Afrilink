/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, StatusBar, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Icon, Image, SearchBar } from 'react-native-elements';

const {width,height} = Dimensions.get('window');
const fond = '#F7F7F7';
const primary = '#2e3190';
const search = '#DDDDDD';

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <StatusBar hidden={false}/>
            <Header
                leftComponent={<Icon name="menu" type="font-awesome" color="#FFF" />}
                centerComponent={<Image source={require('../assets/logobleu.jpg')} style={{width: 200, height: 50}} />}
                rightComponent={{ icon:'menu'}}
                backgroundColor={primary}
            />
            <SearchBar
                placeholder="Rechercher"
                round
                lightTheme
                containerStyle={{ width: width,backgroundColor: fond}}
                inputContainerStyle={{ height: 45, backgroundColor: search, borderRadius: 150, }}
                inputStyle={{ height: 45,backgroundColor: search }}
                searchIcon
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