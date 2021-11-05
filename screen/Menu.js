/* eslint-disable prettier/prettier */
import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    StatusBar
} from 'react-native';

import {
    Header,
    SearchBar
} from 'react-native-elements';

const {width,height} = Dimensions.get('window');

const primary = '#2e3190';
const secondary = '#fab917';

const MyCustomLeftComponent =()=>{
    return(
      <View style={{width: 200}}><Text style={{color: 'white', fontSize: 20,marginVertical: 5}}>Menu</Text></View>
    )
}

const MenuScreen = props => {
     return (
        <View style={styles.container}>
            <StatusBar hidden={false} barStyle="light-content" backgroundColor = {primary}/>
            <Header backgroundColor={primary}
            leftComponent = {<MyCustomLeftComponent />}
            />
            <ScrollView showsVerticalScrollIndicator={false} vertical style={styles.containerView}>
                <SafeAreaView style={styles.container}>
                        <View style={styles.card}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Print')} style={styles.button}>
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={styles.buttonTitle}>Supermarchés</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Print')} style={styles.button}>
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={styles.buttonTitle}>Mode et Beauté</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Print')} style={styles.button}>
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={styles.buttonTitle}>Electronique et Electroménager</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Print')} style={styles.button}>
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={styles.buttonTitle}>Transport</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Print')} style={styles.button}>
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={styles.buttonTitle}>Sport & Loisirs</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Print')} style={styles.button}>
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={styles.buttonTitle}>Pour la maison</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Print')} style={styles.button}>
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={styles.buttonTitle}>Pour enfant</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Print')} style={styles.button}>
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={styles.buttonTitle}>Materiel Pro</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Print')} style={styles.button}>
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={styles.buttonTitle}>Agroalimentaire</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Print')} style={styles.button}>
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={styles.buttonTitle}>Agropastoral</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Print')} style={styles.button}>
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={styles.buttonTitle}>Immobilier</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Print')} style={styles.button}>
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={styles.buttonTitle}>Restauration</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Print')} style={styles.button}>
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={styles.buttonTitle}>Santé & Bien etre</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Print')} style={styles.button}>
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={styles.buttonTitle}>Inventaire</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Print')} style={styles.button}>
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={styles.buttonTitle}>Communication, Finance & Droit</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate('Parametre')}>
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={styles.buttonTitle}>Parametre</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={styles.buttonTitle}>Langue</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                                    <Text style={styles.buttonTitle}>Support</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                </SafeAreaView>
            </ScrollView>
        </View>
     );
};

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    card: {
        width: width * 0.95,
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 1,
        justifyContent: 'space-between',
    },
    tilte:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    button:{
        width:"100%",
        height: 55,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    buttonTitle:{
        fontSize: 17,
        color: '#5E5E5F',
        marginHorizontal: 5,
    },
});

export default MenuScreen;