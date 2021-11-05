/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, StatusBar, Dimensions, ScrollView} from 'react-native';
import { Header, Icon, Image, SearchBar } from 'react-native-elements';
import Categorie from '../component/categorie';
import Produit from '../component/produit';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';

const {width,height} = Dimensions.get('window');
const fond = '#F7F7F7';
const primary = '#2e3190';
const search = '#DDDDDD';

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <StatusBar hidden={false}/>
            <Header
                leftComponent={<Icon name="navicon" type="evilicon" size={40} color="#FFF"/>}
                centerComponent={<Image source={require('../assets/logobleu.jpg')} style={{width: 200, height: 50}} />}
                rightComponent={<Icon name="cart" type="evilicon" size={30} color="#FFF"/>}
                backgroundColor={primary}
            />
            <SearchBar
                placeholder="Rechercher"
                round
                lightTheme
                containerStyle={{ width: width,backgroundColor: fond, borderWidth: 0}}
                inputContainerStyle={{ height: 45, backgroundColor: search, borderRadius: 150 }}
                inputStyle={{ height: 45,backgroundColor: search }}
                searchIcon={<Icon name="user" type="ionicon" />}
                showCancel
                cancelIcon
                onClear
                style={{width: width}}
            />
            <ScrollView>
                <Categorie nom="Catégorie" />
                <Produit nom="Vedette" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
});

export default HomeScreen;
