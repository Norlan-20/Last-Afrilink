/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet,ActivityIndicator,Image,TouchableOpacity,TextInput ,SafeAreaView,ScrollView,Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Picker as SelectPicker } from '@react-native-picker/picker';

const primary = '#2e3190';
const secondary = '#fab917';

export default class NewBoutique1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        city: '',
        country: '',
        street:'',
        category:'Restaurant',
        webSite:'',
        isChecked: false
    };
  }

  render() {

    const onCheckedChanged=()=>{
        if(this.state.isChecked)
        {
            this.setState({
                isChecked: false,
            })
        }
        else{
            this.setState({
                isChecked: true,
            })
        }
    }
      
    const cityInputChanged=(val)=>{
        this.setState({
            city: val 
        })       
    }

    const countryInputChanged=(val)=>{
        this.setState({
            country: val 
        })       
    }

    const streetInputChanged=(val)=>{
        this.setState({
            street: val 
        })       
    }

    const categoryInputChanged=(val)=>{
        this.setState({
            category: val 
        })       
    }

    const webSiteInputChanged=(val)=>{
        this.setState({
            webSite: val 
        })       
    }

    const { route, navigation } = this.props;

    const navigateToOther =()=> {
        //if(this.state.isChecked)
        //{
       //     const { name, image,Username,dateCreation,codePostal,mail,contact,description} = route.params;
        //    const info = {name, image,Username,dateCreation,codePostal,mail,contact,description,"city":this.state.city, "country": this.state.country,"street": this.state.street,"category": this.state.category,"webSite":this.state.webSite}
            navigation.navigate('Validation')
        //}else{
        //    Alert.alert('Checkbox',"Not check the check box,check it")
        //}
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
       <View style={{marginTop: 20}}>
            <View style={{paddingHorizontal: 14}}>
                <Text style={{fontWeight: 'bold'}}>Ville</Text>
            </View>
            <View>
                <TextInput
                style={styles.input}
                placeholder="Cotonou"
                value={this.state.city}
                autoCapitalize="none"
                onChangeText = {(val)=>cityInputChanged(val)}
                />
            </View>
        </View>
        <View>
            <View  style={{paddingHorizontal: 14}}>
                <Text style={{fontWeight: 'bold'}}>Pays</Text>
            </View>
            <View>
                <TextInput
                style={styles.input}
                placeholder="Benin"
                value={this.state.country}
                autoCapitalize="none"
                onChangeText = {(val)=>countryInputChanged(val)}
                />
            </View>
        </View>
        <View>
            <View  style={{paddingHorizontal: 14}}>
                <Text style={{fontWeight: 'bold'}}>Rue</Text>
            </View>
            <View>
                <TextInput
                placeholder="Rue 129"
                style={styles.input}
                value={this.state.street}
                autoCapitalize="none"
                onChangeText = {(val)=>streetInputChanged(val)}
                />
            </View>
        </View>
        <View>
            <View  style={{paddingHorizontal: 14}}>
                <Text style={{fontWeight: 'bold'}}>Category</Text>
            </View>
            <View style={{justifyContent: 'center',alignItems: 'center'}}>
                <View style={{backgroundColor: '#FFFFFF',width: "95%",alignItems: 'center',borderRadius: 10,borderWidth: 1,borderColor:'#D8D8D8',marginVertical: 14}}>
                    <SelectPicker
                        selectedValue={this.state.category}
                        style={{ height: 50, width: "95%",}}
                        onValueChange={(val)=>categoryInputChanged(val)}
                    >
                        <SelectPicker.Item label="Supermarchés" value="Supermarchés" />
                        <SelectPicker.Item label="Mode et Beauté" value="Mode et Beauté" />
                        <SelectPicker.Item label="Electronique et Electroménager" value="Electronique et Electroménager" />
                        <SelectPicker.Item label="Transport" value="Transport" />
                        <SelectPicker.Item label="Sport & Loisirs" value="Sport & Loisirs" />
                        <SelectPicker.Item label="Pour la maison" value="Pour enfant" />
                        <SelectPicker.Item label="Materiel Pro" value="Materiel Pro" />
                        <SelectPicker.Item label="Agroalimentaire" value="Agroalimentaire" />
                        <SelectPicker.Item label="Agropastoral" value="Agropastoral" />
                        <SelectPicker.Item label="immobilier" value="immobilier" />
                        <SelectPicker.Item label="Restauration" value="Restauration" />
                        <SelectPicker.Item label="Santé & Bien etre" value="Santé & Bien etre" />
                        <SelectPicker.Item label="Inventaire" value="Inventaire" />
                        <SelectPicker.Item label="Communication, Finance & Droit" value="Communication, Finance & Droit" />
                    </SelectPicker>
                </View>
            </View>
        </View>
        <View>
            <View  style={{paddingHorizontal: 14}}>
                <Text style={{fontWeight: 'bold'}}>Site Web commercial ou personnel (Facultatif)</Text>
            </View>
            <View>
                <TextInput
                placeholder="/@Your name"
                style={styles.input}
                value={this.state.webSite}
                autoCapitalize="none"
                onChangeText = {(val)=>webSiteInputChanged(val)}
                />
            </View>
        </View>
        <View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    style={styles.checkbox}
                    value={this.state.isChecked}
                    onValueChange={onCheckedChanged}
                />
                <Text style={styles.label}>Vous attestez que les informations ici enregistrées sont vraies </Text>
            </View>
        </View>
        <View style={{alignItems: 'center',justifyContent: 'center',marginVertical:10}}>
            <TouchableOpacity onPress={navigateToOther} style={{backgroundColor: primary,width:200,height:40,alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold',color: '#ffff',fontSize: 15}}>Continue</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
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