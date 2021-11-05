/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity, Image } from 'react-native';

const {width} = Dimensions.get('window');
const WIDTH = width / 2.2;
const listOfCategories = [
    {
        id: 'az1',
        title: 'Laptop',
        image: 'data:image/jpeg;base64,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'
    },
    {
        id: 'az2',
        title: 'iPhone',
        image: 'data:image/jpeg;base64,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'
    },
    {
        id: 'az3',
        title: 'Ecouteur',
        image: 'data:image/jpeg;base64,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'
    },
    {
        id: 'az4',
        title: 'Routeur',
        image: 'data:image/jpeg;base64,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'
    },
    {
        id: 'az5',
        title: 'Clé USB',
        image: 'data:image/jpeg;base64,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'
    },
    {
        id: 'az6',
        title: 'Télévision',
        image: 'data:image/jpeg;base64,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'
    },
];

const CategorieElement = ({item}) => {
    return (
        <TouchableOpacity style={styles.categorieElementStyle}>
            <Image source={{ uri: item.image }} 
                style={{ width: WIDTH, height: WIDTH + 30, }}
            />
            <Text style={styles.categorieElementTitle}>{item.title}</Text>
        </TouchableOpacity>
    );
};

const Produit = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.containerTitle}>{props.nom}</Text>
            <FlatList
                data={listOfCategories}
                keyExtractor={ item => item.id }
                horizontal={false}
                numColumns={2}
                contentContainerStyle={{justifyContent: 'space-evenly'}}
                style={{ flexWrap: 'wrap'}}
                renderItem={CategorieElement}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
    },
    containerTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    categorieElementStyle:{
        width: WIDTH,
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: '#DADADA',
        alignItems: 'center',
    },
    categorieElementTitle:{
        fontSize: 16,
        fontWeight: '600',
        padding: 8,
        color: '#444',
    },
});

export default Produit;