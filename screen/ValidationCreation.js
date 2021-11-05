/* eslint-disable prettier/prettier */
import React,{useEffect} from 'react';
import { Text, View,StyleSheet,Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Fontisto from 'react-native-vector-icons/Fontisto';

const ValidationBoutique = ({navigation}) => {
    
    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate('Home')
        },3000);
    })

    return(
        <View animation="bounceIn" easing="ease-out" style={styles.container}>
            <Animatable.View style={styles.centerObject} animation="bounceIn">
                <Animatable.View animation="bounceIn" style={{width:200,height:200,borderRadius: 100, backgroundColor:'#00BD26',alignItems: 'center',justifyContent: 'center',}}>
                    <Animatable.View animation="bounceIn" easing="ease-out" style={styles.centerObject}>
                        <Fontisto name="check" size={100} color="#FFFFFF"/>
                    </Animatable.View>
                </Animatable.View>
            </Animatable.View>
            <View style={styles.centerObject}>
                <Text style={styles.textStyle}>Votre Boutique a bien ete Crée</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerObject:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle:{
        alignItems: 'center',
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})


export default ValidationBoutique;
