/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar, Dimensions, ScrollView} from 'react-native';
import { Header, Icon, Image, SearchBar } from 'react-native-elements';
import Categorie from '../component/categorie';
import Produit from '../component/produit';
import { listOfCategories, listOfProduct } from '../API/api';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';

const {width,height} = Dimensions.get('window');
const fond = '#F7F7F7';
const primary = '#2e3190';
const search = '#DDDDDD';
var vv;

const HomeScreen = props => {

    const [categorie,setCategorie] = useState(null);
    const [vedette,setVedette] = useState(null);

    useEffect(()=> {
        listOfCategories().then(res => {setCategorie(res)});
        listOfProduct().then(res => {setVedette(res)});
    },[]);

    const showCategorie = (categorieImage,categorieTitle,categorieId) => {
        props.navigation.navigate('Categorie',{image: categorieImage, title: categorieTitle, id: categorieId});
    };

    const showProduct = (infoProduct) => {
        props.navigation.navigate('Produit',{data_id: infoProduct});
    };

    const showCart = () => {
        props.navigation.navigate('Panier');
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden={false}/>
            { console.log(vedette) }
            <Header
                leftComponent={<Icon onPress={()=>showCart()} name="navicon" type="evilicon" size={40} color="#FFF"/>}
                leftContainerStyle={{marginTop: 15}}
                centerComponent={<Image source={require('../assets/logobleu.jpg')} style={{width: 200, height: 50}} />}
                rightComponent={<Icon name="cart" type="evilicon" size={40} color="#FFF"/>}
                rightContainerStyle={{marginTop: 15}}
                backgroundColor={primary}
            />
            <SearchBar
                placeholder="Rechercher"
                round
                lightTheme
                containerStyle={{ width: width,backgroundColor: fond, borderWidth: 0}}
                inputContainerStyle={{ height: 45, backgroundColor: search, borderRadius: 150 }}
                inputStyle={{ height: 45,backgroundColor: search }}
                // searchIcon={<Icon name="user" type="ionicon" />}
                showCancel
                cancelIcon
                onClear
                style={{width: width}}
            />
            <ScrollView>
                <Categorie nom="Catégorie" data={categorie} changeView={showCategorie} />
                <Produit nom="Vedette" data={vedette} changeView={showProduct} />
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
