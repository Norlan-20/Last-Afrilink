/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { ConnexionButton } from '../component/button';

const {width} = Dimensions.get('window');
const primary = '#2e3190';
const fond = '#F7F7F7';

const ConnexionScreen = () => {
    return(
        <View style={styles.container}>

                <Text style={styles.pageTitle}>SE</Text>
                <Text style={styles.pageTitle}>CONNECTER</Text>
                <ConnexionButton />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: fond,
    },
    pageTitle: {
        fontSize: 30,
        color: primary,
    },
});

export default ConnexionScreen;