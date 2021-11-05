/* eslint-disable prettier/prettier */
import React from 'react';
import  { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const {width,height} = Dimensions.get('window');
const fond = '#F7F7F7';
const primary = '#2e3190';

const ConfirmationScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/mailsent.svg')} style={{ width: width - 30, height: width / 2}}/>
            <Text>Une demande de confirmation vous a été envoyer par mail, valider là et continuer.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: fond,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ConfirmationScreen;