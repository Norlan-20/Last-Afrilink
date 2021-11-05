/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { InscriptionButton } from '../component/button';

const {width} = Dimensions.get('window');
const primary = '#2e3190';
const fond = '#F7F7F7';

const InscriptionScreen = (props) => {
    const showConnexion =()=>{
        props.navigation.navigate('Connexion');
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 1, marginTop: 90,}}>
                <Text style={styles.pageTitle}>CREER</Text>
                <Text style={styles.pageTitle}>UN COMPTE</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez votre mail"
                        placeholderTextColor="#444"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez votre mail"
                        placeholderTextColor="#444"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez votre mail"
                        placeholderTextColor="#444"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mot de passe"
                        placeholderTextColor="#444"
                        keyboardType="default"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mot de passe"
                        placeholderTextColor="#444"
                        keyboardType="default"
                    />
                </View>
                <InscriptionButton />

                <TouchableOpacity onPress={()=>showConnexion()}><Text style={styles.inscriptionlink}>Déjà un compte ? Me connecter</Text></TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: fond,
    },
    input: {
        height: 50,
        marginVertical: 12,
        borderWidth: 2,
        borderColor: primary,
        borderRadius: 8,
        padding: 10,
        color: 'black',
        fontSize: 15,
    },
    inputContainer: {
        width: width - (width / 6),
        marginTop: 15,
    },
    pageTitle: {
        fontSize: 30,
        color: primary,
        alignSelf: 'flex-start',
    },
    inscriptionlink: {
        fontWeight: 'bold',
        color: '#444',
        fontSize: 16,
        padding: 8,
        textAlign: 'center'
    },
    forgot: {
        fontWeight: 'bold',
        color: '#444',
        fontSize: 14,
        padding: 8,
        alignSelf: 'flex-end'
    },
});

export default InscriptionScreen;