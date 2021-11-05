/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const {width} = Dimensions.get('window');
const primary = '#2e3190';
const fond = '#F7F7F7';

const ConnexionScreen = () => {
    return(
        <View style={styles.container}>
            <Text>SE</Text>
            <Text>CONNECTER</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        backgroundColor: fond,
    },
});

export default ConnexionScreen;