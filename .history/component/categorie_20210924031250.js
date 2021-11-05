/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const {width,height} = Dimensions.get('window');

const Categorie = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.containerTitle}>{props.nom}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
    },
    containerTitle:{
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default Categorie;