/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet,ActivityIndicator,TouchableOpacity,TextInput,Image,SafeAreaView,ScrollView,Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import CheckBox from '@react-native-community/checkbox';
/*import {ActionSheet,Root} from "native-base";*/

const primary = '#2e3190';
const secondary = '#fab917';

export default class NewBoutique extends Component {
  constructor(props) {
    super(props);
    this.state = {
        image: 'https://img.favpng.com/6/11/3/camera-icon-design-icon-png-favpng-sJFW2mRtWxBTG6T65cg3tXy71.jpg',
        nom: '',
        nomProprio:'',
        dateCreation: "",
        codePostal: '',
        Localisation:'',
        contact: '',
        description : '',
        isChecked : false
    };
  }

  render() {

    const isCheckedChanged = () =>{
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

    const nameInputChangeVal = (val) =>{
        this.setState({
            name: val,
        });
    }
    const UsernameInputChangeVal = (val) =>{
        this.setState({
            Username: val,
        });
    }
    const codeInputChangeVal = (val) =>{
        this.setState({
            codePostal: val,
        });
    }
    const LocalisationInputChangeVal = (val) =>{
        this.setState({
            Localisation: val,
        });
    }
    const contactInputChangeVal = (val) =>{
        this.setState({
            contact: val,
        });
    }
    const descriptionInputChangeVal = (val) =>{
        this.setState({
            description: val,
        });
    }

    const takePhotoFromCamera=()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            this.setState({image: image.path});
          });
    }

    const choosePhotoFromLibrary=()=>{
          ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            this.setState({image: image.path});
          });
    }


    /*const onClickAddImage = () => {

        const BUTTON = ['Take Photo','Choose Image','Cancel'];
        ActionSheet.show(
            {  
                options:BUTTON, 
                cancelButtonIndex:2,
                title: 'Select a Photo',
            },
            buttonIndex=>{
                switch(buttonIndex){
                    case 0 :
                        takePhotoFromCamera();
                        break;
                    case 1 :
                        choosePhotoFromLibrary();
                        break;
                    default:
                        break;
                }
            }
        ); 
    }*/

    const { route, navigation } = this.props;
    const navigationToOther = ()=> {
       // if(this.state.isChecked)
      //  {
         //@ts-expect-error   const info = { "image": this.state.image,"name": this.state.name,"Username":this.state.Username,"dateCreation": this.state.dateCreation,"codePostal": this.state.codePostal,"mail":this.state.mail,"contact": this.state.contact,"description": this.state.description}
            navigation.navigate('Boutique1');
       // }
       // else {
         //   Alert.alert('Checkbox',"Not check the check box,check it");
     //   }
    }
    return (
      /*  <Root>*/
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={{justifyContent: 'center',marginVertical:10}}>
                    <View style={{padding: 14}}>
                        <Text style={{fontWeight: 'bold'}}>Image de Couverture</Text>
                    </View>
                    <View style={{paddingHorizontal: 14}}>
                        <TouchableOpacity onPress={{}} style={{width: '100%',height: 200,backgroundColor:'#ffffff'}}>
                            <Image source={{uri: this.state.image}} style={{width: "100%",height: "100%"}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={{paddingHorizontal: 14}}>
                        <Text style={{fontWeight: 'bold'}}>Nom de la Boutique</Text>
                    </View>
                    <View>
                        <TextInput
                        style={styles.input}
                        placeholder="Shopify"
                        value={this.state.name}
                        autoCapitalize="none"
                        onChangeText = {(val)=>nameInputChangeVal(val)}
                        />
                    </View>
                </View>
                <View>
                    <View  style={{paddingHorizontal: 14}}>
                        <Text style={{fontWeight: 'bold'}}>Nom du Proprietaire</Text>
                    </View>
                    <View>
                        <TextInput
                        style={styles.input}
                        placeholder="John Doe"
                        value={this.state.Username}
                        autoCapitalize="none"
                        onChangeText = {(val)=>UsernameInputChangeVal(val)}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flex:2}}>
                        <View  style={{paddingHorizontal: 14}}>
                            <Text style={{fontWeight: 'bold'}}>Date de creation</Text>
                        </View>
                        <View>
                            <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={this.state.dateCreation}
                            editable={false}
                            />
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <View style={{paddingHorizontal: 14}}>
                            <Text style={{fontWeight: 'bold'}}>Code Postal</Text>
                        </View>
                        <View>
                            <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={this.state.codePostal}
                            onChangeText = {(val)=>codeInputChangeVal(val)}
                            keyboardType="numeric"
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <View  style={{paddingHorizontal: 14}}>
                        <Text style={{fontWeight: 'bold'}}>Localisation</Text>
                    </View>
                    <View>
                        <TextInput
                        placeholder="johnDoe@gmail.com"
                        style={styles.input}
                        value={this.state.mail}
                        autoCapitalize="none"
                        onChangeText = {(val)=>LocalisationInputChangeVal(val)}
                        keyboardType="email-address"
                        />
                    </View>
                </View>
                <View>
                    <View  style={{paddingHorizontal: 14}}>
                        <Text style={{fontWeight: 'bold'}}>Contact du Proprietaire</Text>
                    </View>
                    <View>
                        <TextInput
                        placeholder="62845684"
                        style={styles.input}
                        value={this.state.contact}
                        autoCapitalize="none"
                        onChangeText = {(val)=>contactInputChangeVal(val)}
                        keyboardType="phone-pad"
                        />
                    </View>
                </View>
                <View>
                    <View  style={{paddingHorizontal: 14}}>
                        <Text style={{fontWeight: 'bold'}}>Description</Text>
                    </View>
                    <View>
                        <TextInput
                        placeholder="Description"
                        value={this.state.description}
                        style={styles.inputD}
                        multiline={true} 
                        allowFontScaling={false}
                        autoCapitalize="none"
                        onChangeText = {(val)=>descriptionInputChangeVal(val)}
                        />
                    </View>
                </View>

                <View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                        style={styles.checkbox}
                        value={this.state.isChecked}
                        onValueChange={isCheckedChanged}
                        />
                        <Text style={styles.label}>Vous attestez que les informations ici enregistrées {"\n"} sont vraies </Text>
                    </View>
                </View>

                <View style={{alignItems: 'center',justifyContent: 'center', marginVertical:10}}>
                    <TouchableOpacity onPress={navigationToOther} style={{backgroundColor:primary,width:200,height:40,alignItems: 'center',justifyContent: 'center'}}>
                        <Text style={{fontWeight: 'bold',color: '#ffff',fontSize: 15}}>Continue</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
       /* </Root>*/
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
        color: "#000000"
    },
    inputD: {
        height: 150,
        margin: 12,
        borderWidth: 1,
        padding:10,
        borderColor:'#D8D8D8',
        borderRadius: 10,
        elevation: 1,
        backgroundColor:'#ffffff',
        color: "#000000"
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