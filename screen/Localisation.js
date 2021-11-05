import React from 'react';
import { View, StyleSheet, Dimensions, TextInput, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import {Switch,Button, Paragraph, Dialog, Portal, Provider} from 'react-native-paper';

// import { Container } from './styles';

const {width,height} = Dimensions.get('window');
const primary = '#2e3190';

const Localisation = () => {

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () =>{setIsSwitchOn(!isSwitchOn)};
  const [adresse,setAdress] = React.useState([]);

  return (
    <View style={styles.container}>
      <ScrollView vertical>
        <View style={{marginVertical: 10}}>
          <Text>Ville</Text>
          <View>
            <TextInput placeholder={'Ville'} placeholderTextColor={"black"} style={{width: width * 0.9,borderWidth: 0.5,borderColor: primary,marginTop: 10,borderRadius: 5,padding: 10,color: 'black'}} />
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <Text>Rue</Text>
          <View>
            <TextInput placeholder={'Rue'} placeholderTextColor={"black"} style={{width: width * 0.9,borderWidth: 0.5,borderColor: primary,marginTop: 10,borderRadius: 5,padding: 10,color: 'black'}} />
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <Text>Addresse</Text>
          <View>
            <TextInput placeholder={'Addresse'} placeholderTextColor={"black"} style={{width: width * 0.9,borderWidth: 0.5,borderColor: primary,marginTop: 10,borderRadius: 5,padding: 10,color: 'black'}} />
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <Text>Petite Description</Text>
          <View>
            <TextInput multiline={true} allowFontScaling={false} autoCapitalize="none" placeholder={'Description'} placeholderTextColor={"black"} style={{width: width * 0.9,borderWidth: 0.5,borderColor: primary,marginTop: 10,borderRadius: 5,padding: 10,height: 150,color: 'black'}} />
          </View>
        </View>
        <View style={{marginVertical: 20, justifyContent: 'space-between',flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold',fontSize: 13}}>Rendre Visible vos informations</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={styles.buttonTitle} color={"#2e3190"}/>
            </View>
        <View style={{justifyContent: 'center',alignItems: 'center',marginVertical: 15, backgroundColor: primary,borderRadius: 10}}>
          <TouchableOpacity onPress={{}} style={{width: width *0.3,justifyContent: 'center',alignItems: 'center',height: 40,borderRadius: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 16,color: 'white'}}>Enregistrer</Text>
          </TouchableOpacity>
        </View>
        <View>

        </View>
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})

export default Localisation;