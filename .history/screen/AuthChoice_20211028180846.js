/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

const {width,height} = Dimensions.get('window');
const primary = '#2e3190';
const secondary = '#fab917';
const fond = '#F7F7F7';
const article = '#EEE';

const AuthChoiceScreen = props => {

    const showConnexionScreen = () => {
        props.navigation.navigate('Connexion');
    };

    return (
        <View style={ styles.container }>
            <Header backgroundColor={primary} />
            <View style={ styles.containerBlock }>
                <Image
                    style={{ width: '100%', height: 350 }}
                    source={require('../assets/auth.png')}
                    resizemode='contain'
                />
                <Text style={ styles.containerTitle }>Bienvenue</Text>
                <Text style={ styles.containerText }>Connectez-vous ou inscrivez-vous et procéder à votre achat. Vous pouvez vous connectez par Google ou Facebook
                </Text>
                <View style={ styles.buttonContainer }>
                    <TouchableOpacity onPress={ () => showConnexionScreen() } style={ styles.buttonConnexion }>
                        <Text style={ styles.buttonConnexionText }>Connexion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.buttonInscription }>
                        <Text style={ styles.buttonInscriptionText }>Inscription</Text>
                    </TouchableOpacity>
                </View>
                <Text style={ styles.otherText }>Autres méthodes</Text>
                <View style={ styles.otherContainer }>
                    <Icon name="google-plus" type='font-awesome' size={30} color='red' style={{ marginRight: 12 }} />
                    <Icon name="facebook-square" type='font-awesome' size={30} color='blue' />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    containerBlock: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 30,
    },
    containerTitle: {
        fontSize: 25,
        color: '#444',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingVertical: 5,
    },
    containerText: {
        textAlign: 'center',
        width: '90%',
        lineHeight: 18,
        color: '#444',
    },
    otherText: {
        fontWeight: 'bold',
        lineHeight: 18,
        color: '#444',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 40,
    },
    otherContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 5,
    },
    buttonConnexion: {
        backgroundColor: primary,
        paddingVertical: 10, 
        paddingHorizontal: 35, 
        borderRadius: width,
        marginRight: 8,
    },
    buttonConnexionText: {
        color: '#FFFFFF',
    },
    buttonInscription: {
        borderColor: primary,
        borderWidth: 2,
        paddingVertical: 10, 
        paddingHorizontal: 35, 
        borderRadius: width,
    },
    buttonInscriptionText: {
        color: primary,
        fontWeight: 'bold'
    },
});

export default AuthChoiceScreen;