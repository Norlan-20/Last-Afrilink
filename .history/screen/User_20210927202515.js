/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon, Image } from 'react-native-elements';
import { ConnexionButton,InscriptionButton } from '../component/button';

const fond = '#F7F7F7';
const primary = '#2e3190';
const search = '#DDDDDD';
const {width,height} = Dimensions.get('window');
const WIDTH = width - 150;


const ProfilScreen =()=>{
    return(
        <View>
            <View style={{alignItems: 'center'}}>
                <Image source={require('../assets/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png') } style={{width: WIDTH, height: WIDTH,}} />
                <Text style={styles.surname}>John Doe</Text>
            </View>
            <View style={styles.block1}>
                <TouchableOpacity style={styles.optionContainer}>
                    <View style={styles.illustrationContainer}>
                        <Icon name="gear" type="evilicon" size={35} color="#444" />
                    </View>
                    <View style={styles.actionContainer}>
                        <Text style={styles.actionText}>Paramètres</Text>
                        <Icon name="chevron-right" type="evilicon" size={35} color="#444" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionContainer}>
                    <View style={styles.illustrationContainer}>
                        <Icon name="credit-card" type="evilicon" size={35} color="#444" />
                    </View>
                    <View style={styles.actionContainer}>
                        <Text style={styles.actionText}>Commande</Text>
                        <Icon name="chevron-right" type="evilicon" size={35} color="#444" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionContainer}>
                    <View style={styles.illustrationContainer}>
                        <Icon name="heart" type="evilicon" size={35} color="#444" />
                    </View>
                    <View style={styles.actionContainer}>
                        <Text style={styles.actionText}>Favoris</Text>
                        <Icon name="chevron-right" type="evilicon" size={35} color="#444" />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.optionContainerBloc2}>
                    <View style={styles.illustrationContainer}>
                        <Icon name="pencil" type="evilicon" size={35} color="#444" />
                    </View>
                    <View style={styles.actionContainer}>
                        <Text style={styles.actionText}>Information</Text>
                        <Icon name="chevron-right" type="evilicon" size={35} color="#444" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionContainerBloc2}>
                    <View style={styles.illustrationContainer}>
                        <Icon name="close" type="evilicon" size={35} color="#444" />
                    </View>
                    <View style={styles.actionContainer}>
                        <Text style={styles.actionText}>Deconnexion</Text>
                        <Icon name="chevron-right" type="evilicon" size={35} color="#444" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const UserScreen = props => {
    const showInscription =()=>{
        props.navigation.navigate('Inscription');
    };
    const [isConnected,setIsconnected] = useState(false);
    return (
        <View style={styles.container}>
            {isConnected ? <ProfilScreen />
            :<View style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
               <Text style={{marginBottom: 10}}>Vous n'etes pas connecté ,cliqué ici pour vous connecter </Text>
               <TouchableOpacity onPress={()=>showInscription()} style={ styles.continuer }>
                    <Text style={styles.textWhite}>S'INSCRIRE</Text>
                </TouchableOpacity>
            </View>
            }
        </View>  
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: fond,
        justifyContent: 'center',
        alignItems: 'center',
    },
    surname: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    block1: {
        marginVertical: 30,
    },
    block2: {

    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        marginBottom: 8,
        width: width - 40,
        // backgroundColor: '#444',
        alignItems: 'center',
        paddingHorizontal: 2,
    },
    optionContainerBloc2:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        marginBottom: 8,
        width: width - 40,
        backgroundColor: '#DADADA',
        borderRadius: 5,
        alignItems: 'center',
        paddingHorizontal: 2,
    },
    illustrationContainer:{
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEE',
        borderRadius: 5,
        flex: 1,
    },
    actionContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 6,
        paddingHorizontal: 8,
    },
    actionText: {
        fontSize: 16,
        color: '#444',
    },
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

export default UserScreen;