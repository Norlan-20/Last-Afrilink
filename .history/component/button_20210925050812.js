/* eslint-disable prettier/prettier */
import React from 'react'
import { TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native'

const {width} = Dimensions.get('window');
const primary = '#2e3190';

export const Continuer = () => {
    return (
        <TouchableOpacity style={ styles.continuer }>
            <Text style={styles.textWhite}>CONTINUER</Text>
        </TouchableOpacity>
    );
};

export const ConnexionButton = () => {
    return (
        <TouchableOpacity style={ styles.continuer }>
            <Text style={styles.textWhite}>CONNEXION</Text>
        </TouchableOpacity>
    );
};

export const InscriptionButton = () => {
    return (
        <TouchableOpacity style={ styles.continuer }>
            <Text style={styles.textWhite}>S'INSCRIRE</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    continuer: {
        backgroundColor: primary,
        width: width - (width / 6),
        marginTop: 15,
        flexDirection: 'row',
        padding: 12,
        justifyContent: 'center',
        borderRadius: 100,
    },
    textWhite: {
        color: '#FFFFFF',
        fontSize: 17,
    },
});