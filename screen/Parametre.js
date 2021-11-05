/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView ,SafeAreaView, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Header} from 'react-native-elements';
import {Switch,Button, Paragraph, Dialog, Portal, Provider} from 'react-native-paper';
import Modal from '../Composant/Modal';
import Share from 'react-native-share';

const {width, height} = Dimensions.get('window');

const myCustomShare = async() =>{
    const shareOptions = {
      message: "You can download your african market app with this link please click them",
      url: 'https://qtmd.org/wp-content/uploads/2019/07/howcuttingdo.jpg'
    }

    try{
      const ShareResponse = await Share.open(shareOptions);
    }catch(error){
      console.log('error=>',error)
    }
  };


const MyCustomLeftComponent =()=>{
    return(
      <View style={{width: 200}}><Text style={{color: 'white', fontSize: 20,marginVertical: 5}}>Parametre</Text></View>
    )
}

const MyCustomRightComponent =()=>{
    return(
      <MaterialCommunityIcons
          name="select-drag"
          size={25}
          color="#fff" />
    )
}

const Parametre = props => {
    //Declaration
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const [isNotifOn, setIsNotifOn] = React.useState(false);

    //Function
    const onToggleSwitch = () =>{setIsSwitchOn(!isSwitchOn)}
    const onNotifSwitch = () =>{setIsNotifOn(!isNotifOn)}

  return (
    <View style={styles.containerView}>
      <ScrollView showsVerticalScrollIndicator={false} vertical style={styles.containerView}>
        <SafeAreaView style={styles.container}>
            <View style={styles.containerItem}>
                <View style={{marginVertical: 10}}><Text style={styles.tilte}>Compte</Text></View>
                <View style={styles.card}>
                    <TouchableOpacity style={styles.button}>
                        <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                            <MaterialCommunityIcons name="account-edit" style={styles.buttonTitle} />
                            <Text style={styles.buttonTitle}>Editer mon profils</Text>
                        </View>
                        <MaterialCommunityIcons name="arrow-right" style={styles.buttonTitle} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                            <MaterialCommunityIcons name="key" style={styles.buttonTitle} />
                            <Text style={styles.buttonTitle}>Mots de passe</Text>
                        </View>
                        <MaterialCommunityIcons name="arrow-right" style={styles.buttonTitle} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerItem}>
                <View style={{marginVertical: 10}}><Text style={styles.tilte}>General</Text></View>
                <View style={styles.card}>
                    <TouchableOpacity style={styles.button}>
                        <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                            <MaterialCommunityIcons name="bell" style={styles.buttonTitle} />
                            <Text style={styles.buttonTitle}>Notification</Text>
                        </View>
                        <Switch value={isNotifOn} onValueChange={onNotifSwitch} style={styles.buttonTitle} color={"#2e3190"}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                            <MaterialCommunityIcons name="arrow-right" style={styles.buttonTitle} />
                            <Text style={styles.buttonTitle}>Son</Text>
                        </View>
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={styles.buttonTitle} color={"#2e3190"}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={{}} style={styles.button}>
                        <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                            <MaterialCommunityIcons name="exit-to-app" style={styles.buttonTitle} />
                            <Text style={styles.buttonTitle}>Deconnexion</Text>
                        </View>
                        <MaterialCommunityIcons name="arrow-right" style={styles.buttonTitle} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerItem}>
                <View style={{marginVertical: 10}}><Text style={styles.tilte}>Securité</Text></View>
                <View style={styles.card}>
                    <TouchableOpacity style={styles.button}>
                        <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                            <MaterialCommunityIcons name="wallet" style={styles.buttonTitle} />
                            <Text style={styles.buttonTitle}>Afrilink Pay</Text>
                        </View>
                        <MaterialCommunityIcons name="arrow-right" style={styles.buttonTitle} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                            <MaterialCommunityIcons name="map-marker" style={styles.buttonTitle} />
                            <Text style={styles.buttonTitle}>Localisation</Text>
                        </View>
                        <MaterialCommunityIcons name="arrow-right" style={styles.buttonTitle} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerItem}>
                <View style={{marginVertical: 10}}><Text style={styles.tilte}>Support</Text></View>
                <View style={styles.card}>
                    <TouchableOpacity  onPress={()=>props.navigation.navigate('Politique')} style={styles.button}>
                        <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between'}}>
                            <MaterialCommunityIcons name="shield" style={styles.buttonTitle} />
                            <Text style={styles.buttonTitle}>Politique de confidentialité</Text>
                        </View>
                        <MaterialCommunityIcons name="arrow-right" style={styles.buttonTitle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => myCustomShare()} style={styles.button}>
                        <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between'}}>
                            <MaterialCommunityIcons name="group" style={styles.buttonTitle} />
                            <Text style={styles.buttonTitle}>Partager l'application</Text>
                        </View>
                        <MaterialCommunityIcons name="arrow-right" style={styles.buttonTitle} />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=> props.navigation.navigate('Conditions')} style={styles.button}>
                        <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between'}}>
                            <MaterialCommunityIcons name="arrow-right" style={styles.buttonTitle} />
                            <Text style={styles.buttonTitle}>Condition d'utilisation </Text>
                        </View>
                        <MaterialCommunityIcons name="arrow-right" style={styles.buttonTitle} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    containerItem:{
        marginVertical: 10,
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
        color: '#6C6C6C',
        marginHorizontal: 5,
    },
})

export default Parametre;