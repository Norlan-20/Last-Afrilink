/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const {width,height} = Dimensions.get('window');

const Categorie = props => {
    return (
        <View style={styles.container}>
            <Text>User page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});

export default Categorie;