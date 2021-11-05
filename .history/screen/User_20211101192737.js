/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity,ScrollView } from 'react-native';
import { Icon, Image } from 'react-native-elements';
import AuthChoiceScreen from './AuthChoice';
import { connect } from 'react-redux';
import Store from '../Store/configureStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const fond = '#F7F7F7';
const primary = '#2e3190';
const {width,height} = Dimensions.get('window');
const WIDTH = width - 150;
const secondary = '#fab917';

const ProfileScreen = props => (
    <ScrollView vertical style={{marginTop: height * 0.02,backgroundColor: fond}}>
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center',marginVertical: 30}} >
            <View style={{alignItems: 'center'}}>
                <Image source={require('../assets/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png') } style={{width: WIDTH, height: WIDTH,}} />
                <Text style={styles.surname}>John Doe</Text>
                <Text style={styles.info}>exemple@gmail|+229 6284 5684</Text>
            </View>
            <View style={styles.block1}>
                <TouchableOpacity style={styles.optionContainer}>
                    <View style={styles.illustrationContainer}>
                        <Icon name="gear" type="evilicon" size={35} color="#444" />
                    </View>
                    <View style={styles.actionContainer}>
                        <Text style={styles.actionText}>Paramètres du Compte</Text>
                        <Icon name="chevron-right" type="evilicon" size={35} color="#444" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> props.navigation.navigate('MessageMenu')} style={styles.optionContainer}>
                    <View style={styles.illustrationContainer}>
                        <Icon name="envelope" type="evilicon" size={35} color="#444" />
                    </View>
                    <View style={styles.actionContainer}>
                        <Text style={styles.actionText}>Message</Text>
                        <Icon name="chevron-right" type="evilicon" size={35} color="#444" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Localisation')} style={styles.optionContainer}>
                    <View style={styles.illustrationContainer}>
                        <Icon name="location" type="evilicon" size={35} color="#444" />
                    </View>
                    <View style={styles.actionContainer}>
                        <Text style={styles.actionText}>Adresse de Livraison</Text>
                        <Icon name="chevron-right" type="evilicon" size={35} color="#444" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> props.navigation.navigate('BoutiqueScreen')} style={styles.optionContainer}>
                    <View style={styles.illustrationContainer}>
                        <Icon name="gear" type="evilicon" size={35} color="#444" />
                    </View>
                    <View style={styles.actionContainer}>
                        <Text style={styles.actionText}>Boutique</Text>
                        <Icon name="chevron-right" type="evilicon" size={35} color="#444" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Commande')} style={styles.optionContainer}>
                    <View style={styles.illustrationContainer}>
                        <Icon name="credit-card" type="evilicon" size={35} color="#444" />
                    </View>
                    <View style={styles.actionContainer}>
                        <Text style={styles.actionText}>Commande</Text>
                        <Icon name="chevron-right" type="evilicon" size={35} color="#444" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Favorie')} style={styles.optionContainer}>
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
    </ScrollView>
);




const UserScreen = props => {

    const [online,setOnline] = useState(0);

    useEffect(()=>{
        verifyToken();
        console.log(online)
        console.log(props.online)
    },[]);

    const showConnexionScreen = () => {
        props.navigation.navigate('Connexion');
    };

    const showInscriptionScreen = () => {
        props.navigation.navigate('Inscription');
    };
    
    const verifyToken = async () => {
        
        const data = await AsyncStorage.getAllKeys();
        if(data.length==0)
            setOnline(0)
        else {
            setOnline(1);
            // await AsyncStorage.clear()
        }
        
    }

    return (
        <View style={styles.container}>
            {/* {<ProfileScreen/>} */}
            {/* {console.log(props)} */}
            {online==0? <AuthChoiceScreen showConnexionScreen={showConnexionScreen} />:<ProfileScreen /> }
        </View>  
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    surname: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    info:{
        marginVertical: 5
    },
    block1: {
        marginVertical: 20,
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

const mapStateToProps = (state) => {
    return {
        online: state.connectUser.info
    }
}

export default connect(mapStateToProps)(UserScreen);