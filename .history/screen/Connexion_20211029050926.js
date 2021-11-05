/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { Header } from 'react-native-elements';


const {width,height} = Dimensions.get('window');
const primary = '#2e3190';
const secondary = '#fab917';
const fond = '#F7F7F7';
const article = '#EEE';

const ConnexionScreen = props => {

    const showInscription = ()=>{
        props.navigation.navigate('Inscription');
    };

    return (
        <View style={ styles.container }>
            <Header backgroundColor={primary}/>
            <ScrollView contentContainerStyle={{ justifyContent: 'center'}} style={styles.formContainer}>
                <View style={styles.formBloc}>

                    <Image
                        style={{ width: '100%', height: 200, position: 'relative', top: -50 }}
                        source={require('../assets/login.png')}
                        resizeMode='contain'
                    />

                    <View style={styles.inputContainer}>
                        <Icon
                            name="user" type="feather" size={20} color={primary} style={{paddingHorizontal: 15,}}
                        />
                        <TextInput
                            placeholder="Entrez votre email"
                            style={ styles.inputStyle}
                            placeholderTextColor={primary}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Icon
                            name="key" type="feather" size={20} color={primary} style={{paddingHorizontal: 15,}}
                        />
                        <TextInput
                            placeholder="Entrez votre email"
                            style={ styles.inputStyle}
                            placeholderTextColor={primary}
                        />
                    </View>

                    <Text style={{ alignSelf: 'flex-end', paddingRight: 30, color: '#666', fontSize: 13, }}>Mot de passe oublié ?</Text>

                    <TouchableOpacity style={ styles.loginButton }>
                        <Text style={ styles.loginText }>Se Connecter</Text>
                    </TouchableOpacity>

                    <Text style={ styles.otherText }>Autres méthodes</Text>
                    <View style={ styles.otherContainer }>
                        <Icon name="google-plus" type='font-awesome' size={30} color='red' style={{ marginRight: 12 }} />
                        <Icon name="facebook-square" type='font-awesome' size={30} color='blue' />
                    </View>
                    <TouchableOpacity style={ styles.signupContainer }><Text style={{ color: '#666' }}>Pas de compte ?</Text><Text style={{ color: primary, fontWeight: 'bold' }}> Créer un compte.</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    inputContainer: {
        width: width - 50,
        borderWidth: 1,
        borderColor: primary,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: width,
        // backgroundColor: '#FFFFFF',
    },
    inputStyle: {
        color: primary,
        borderLeftWidth: 1,
        borderLeftColor: primary,
        paddingHorizontal: 8,
        width: width - 100,
    },
    formContainer: {
        flex: 1,
    },
    formBloc: {
        flex: 1,
        height: height,
        width: width,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton: {
        backgroundColor: primary,
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: width,
        marginTop: 20,
        marginBottom: 100,
        elevation: 5,
    },
    loginText: {
        color: '#FFFFFF',
        textTransform: 'uppercase',
        fontWeight: '300',
    },
    otherContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 5,
        position: 'absolute',
        bottom: 100,
    },
    otherText: {
        fontWeight: '300',
        lineHeight: 18,
        color: '#666',
        position: 'absolute',
        bottom: 140,
    },
    signupContainer:{
        position: 'absolute',
        bottom: 40,
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

export default ConnexionScreen;