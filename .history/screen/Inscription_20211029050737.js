/* eslint-disable prettier/prettier */
import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { InscriptionButton } from '../component/button';

const {width,height} = Dimensions.get('window');
const primary = '#2e3190';
const fond = '#F7F7F7';
const secondary = '#fab917';

const InscriptionScreen = (props) => {
    const [name,setName] = useState(null);
    const [prenom,setPrenom] = useState(null);
    const [mail,setMail] = useState(null);
    const [password,setPassword] = useState(null);
    const [passwordConf,setPasswordConf] = useState(null);

    const showConnexion = ()=>{
        props.navigation.navigate('Services');
    };
    return (
        <View style={ styles.container }>
            {/* <Header backgroundColor={primary}/> */}
            <ScrollView contentContainerStyle={{ justifyContent: 'center'}} style={styles.formContainer}>
                <View style={styles.formBloc}>

                    <Image
                        style={{ width: '100%', height: 200, position: 'relative', top: 30, marginBottom: 10, }}
                        source={require('../assets/login.png')}
                        resizeMode='contain'
                    />

                    <View style={styles.inputContainer}>
                        <Icon
                            name="user" type="feather" size={20} color={primary} style={{paddingHorizontal: 15,}}
                        />
                        <TextInput
                            placeholder="Entrez votre nom"
                            style={ styles.inputStyle}
                            placeholderTextColor={primary}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Icon
                            name="user" type="feather" size={20} color={primary} style={{paddingHorizontal: 15,}}
                        />
                        <TextInput
                            placeholder="Entrez vos prénoms"
                            style={ styles.inputStyle}
                            placeholderTextColor={primary}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Icon
                            name="mail" type="feather" size={20} color={primary} style={{paddingHorizontal: 15,}}
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
                            placeholder="Entrez votre Mot de passe"
                            style={ styles.inputStyle}
                            placeholderTextColor={primary}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Icon
                            name="key" type="feather" size={20} color={primary} style={{paddingHorizontal: 15,}}
                        />
                        <TextInput
                            placeholder="Confirmer Mot de passe"
                            style={ styles.inputStyle}
                            placeholderTextColor={primary}
                        />
                    </View>

                    <TouchableOpacity style={ styles.loginButton }>
                        <Text style={ styles.loginText }>S'Inscrire</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ () => showConnexion() } style={ styles.signupContainer }><Text style={{ color: '#666' }}>Pas de compte ?</Text><Text style={{ color: primary, fontWeight: 'bold' }}> Créer un compte.</Text></TouchableOpacity>
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
        marginVertical: 10,
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
        bottom: 120,
    },
    otherText: {
        fontWeight: '300',
        lineHeight: 20,
        color: '#666',
    },
    signupContainer:{
        position: 'absolute',
        bottom: 90,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default InscriptionScreen;