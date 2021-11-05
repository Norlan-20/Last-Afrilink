/* eslint-disable prettier/prettier */
import React from 'react';
import  { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const {width,height} = Dimensions.get('window');
const fond = '#F7F7F7';
const primary = '#2e3190';

const ConfirmationScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/mailsent.png')} style={{ width: width - 100, height: width / 2}}/>
            <Text style={styles.message}>Une demande de confirmation vous a été envoyer par mail, valider là et continuer.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    message:{
        width: width - (width / 5),
        textAlign: 'center',
        fontSize: 15,
        marginTop: 8
    },
});

export default ConfirmationScreen;