import React from 'react';
import { View, Text , ScrollView, TouchableOpacity, Image, TextInput, StyleSheet,Dimensions,FlatList } from 'react-native';
import {Icon } from 'react-native-elements'
import * as animatable from 'react-native-animatable'

const {width,height} = Dimensions.get('window');
const primary = '#2e3190';
// import { Container } from './styles';

const AddProduit = () => {
  return (
    <ScrollView vertical>
    <animatable.View animation="bounceIn">
    <View style={{marginTop: 20}}>
        <View style={{paddingHorizontal: 14}}>
            <Text style={{fontWeight: 'bold'}}>Nom du Produits</Text>
        </View>
        <View>
            <TextInput
            style={styles.input}
            placeholderTextColor="#323232"
            placeholder="name"
            value={{}}
            autoCapitalize="none"
            onChangeText = {{}}
            />
        </View>
    </View>
    <View>
        <View style={{paddingHorizontal: 14}}>
            <Text style={{fontWeight: 'bold'}}>Image de Couverture</Text>
        </View>
        <View style={{paddingHorizontal: 14}}>
            <TouchableOpacity onPress={{}} style={{width: '100%',height: 100,backgroundColor:'#ffffff',borderRadius: 10,marginVertical: 12}}>
                 <Image source={{}} resizeMode="cover" style={{width: "100%",height: "100%"}}/>
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <View style={{paddingHorizontal: 14}}>
                <Text style={{fontWeight: 'bold'}}>Autres Images</Text>
            </View>
            <View style={{paddingHorizontal: 14}}>
                <FlatList 
                    horizontal
                    data={{}}
                    keyExtractor={(item, index) => index.toString()}  
                    renderItem={({item})=>(
                        <TouchableOpacity onPress={{}} style={{width: 100,height: 100,backgroundColor:'#ffffff',borderRadius: 10,marginVertical: 12,marginHorizontal: 7}}>
                            <Image source={{uri: item}} style={{width: "100%",height: "100%"}}/>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
        <View>
            <View  style={{paddingHorizontal: 14}}>
                <Text style={{fontWeight: 'bold'}}>Prix du Produit</Text>
            </View>
            <View>
                <TextInput
                style={styles.input}
                placeholder="Price"
                placeholderTextColor="#323232"
                value={{}}
                autoCapitalize="none"
                keyboardType= "numeric"
                onChangeText = {(val)=>{}}
                />
            </View>
        </View>
            <View>
                <View  style={{paddingHorizontal: 14}}>
              <Text style={{fontWeight: 'bold'}}>Description</Text>
                </View>
                <View>
                    <TextInput
                    style={{height: 150,margin: 12,borderWidth: 1,padding:10,borderColor:'#D8D8D8',borderRadius: 10,elevation: 1,backgroundColor:'#ffffff',color: '#000000'}}
                    placeholder="Descriptions"
                    placeholderTextColor="#323232"
                    multiline={true} 
                    allowFontScaling={false}
                    value={{}}
                    autoCapitalize="none"
                    onChangeText = {(val)=>{}}
                    />
                </View>
            </View>
            <View>
                <View  style={{paddingHorizontal: 14}}>
                    <Text style={{fontWeight: 'bold'}}>Date d'expiration</Text>
                </View>
                <View>
                    <TextInput
                    style={styles.input}
                    placeholder="Date expiration"
                    placeholderTextColor="#323232"
                    value={{}}
                    autoCapitalize="none"
                    keyboardType = "numeric"
                    onChangeText = {(val)=>{}}
                    />
                </View>
            </View>
            <View>
                <View  style={{paddingHorizontal: 14}}>
                    <Text style={{fontWeight: 'bold'}}>Couleurs</Text>
                </View>
                <View style={styles.printableItem}>
                    
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <TextInput
                        style={styles.inputText}
                        placeholder="Entrer ici"
                        placeholderTextColor="#323232"
                        value={{}}
                        autoCapitalize="none"
                        onChangeText = {(val)=>{}}
                        />
                    </View>
                    <View>
                        <TouchableOpacity onPress={{}}
                        style={styles.addButton}
                        >
                            <Text style={{fontSize: 30,color: '#ffffff'}}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View>
                <View  style={{paddingHorizontal: 14}}>
                    <Text style={{fontWeight: 'bold'}}>Tailles</Text>
                </View>
                <View style={styles.printableItem}>
                    
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <TextInput
                        style={styles.inputText}
                        placeholder="Entrer ici"
                        value={{}}
                        placeholderTextColor="#323232"
                        autoCapitalize="none"
                        onChangeText = {(val)=> {}}
                        />
                    </View>
                    <View>
                        <TouchableOpacity onPress={{}}
                        style={styles.addButton}
                        >
                            <Text style={{fontSize: 30,color: '#ffffff'}}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View>
                <View  style={{paddingHorizontal: 14}}>
                    <Text style={{fontWeight: 'bold'}}>Date de le Livraison</Text>
                </View>
                <View>
                    <TextInput
                    style={styles.input}
                    placeholder="Date Livraison"
                    placeholderTextColor="#323232"
                    value={{}}
                    autoCapitalize="none"
                    keyboardType = "numeric"
                    onChangeText = {(val)=>{}}
                    />
                </View>
            </View>
            <View>
                <View  style={{paddingHorizontal: 14}}>
                    <Text style={{fontWeight: 'bold'}}>Quantité en stock</Text>
                </View>
                <View>
                    <TextInput
                    style={styles.input}
                    placeholder="qte"
                    placeholderTextColor="#323232"
                    value={{}}
                    autoCapitalize="none"
                    keyboardType = "numeric"
                    onChangeText = {(val)=>{}}
                    />
                </View>
            </View>
            <View style={{alignItems: 'center',justifyContent: 'center',marginVertical:10}}>
                <TouchableOpacity onPress={{}} style={{backgroundColor:primary,width:200,height:40,alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold',color: '#ffff',fontSize: 15}}>Ajouter</Text>
                </TouchableOpacity>
            </View>
    </animatable.View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding:10,
        borderColor:'#D8D8D8',
        borderRadius: 10,
        elevation: 1,
        backgroundColor:'#ffffff',
        color: '#000000'
    },
    inputText: {
        height: 50,
        width: 270,
        margin: 12,
        borderWidth: 1,
        padding:10,
        borderColor:'#D8D8D8',
        borderRadius: 10,
        elevation: 1,
        backgroundColor:'#ffffff',
        color: '#000000'
    },
    printableItem:{
        height: 150,
        margin: 12,
        borderWidth: 1,
        padding:10,
        borderColor:'#D8D8D8',
        borderRadius: 10,
        elevation: 1,
        backgroundColor:'#ffffff',
        color: '#000000',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    addButton:{
        width: 50,
        height: 50,
        alignItems:'center',
        justifyContent:'center',
        margin: 12,
        borderRadius: 100,
        borderColor:'#D8D8D8',
        elevation: 1,
        backgroundColor: primary,
    },
    checkboxContainer: {
        flexDirection: "row",
        paddingHorizontal: 10
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
})

export default AddProduit;