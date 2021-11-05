import React from 'react';
import { View,Text,TouchableOpacity,StyleSheet,Image } from 'react-native';

// import { Container } from './styles';

const MessageMenu = props => {
  return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={styles.rowFrontVisible}
          onPress={() => props.navigation.navigate('Message')}
          underlayColor={'#aaa'}>
          <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
            <View style={{width: 80,borderWidth: 0.4,borderRadius: 20}}>
                <Image source={require('./../assets/pizza.png')} resizeMode="cover" style={{width: "100%", height: "100%"}}/>
            </View>
            <View>
                <Text style={styles.title} numberOfLines={1}>
                Afrilink
                </Text>
                <Text style={styles.details} numberOfLines={1}>
                Nous avions remarqué un payement .........
                </Text>
                <Text style={styles.date}>{Date()}</Text>
            </View>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.rowFrontVisible}
          onPress={() => props.navigation.navigate('Message')}
          underlayColor={'#aaa'}>
          <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
            <View style={{width: 80,borderWidth: 0.4,borderRadius: 20}}>
                <Image source={require('./../assets/pizza.png')} resizeMode="cover" style={{width: "100%", height: "100%"}}/>
            </View>
            <View>
                <Text style={styles.title} numberOfLines={1}>
                Afrilink
                </Text>
                <Text style={styles.details} numberOfLines={1}>
                Nous avions remarqué un payement .........
                </Text>
                <Text style={styles.date}>{Date()}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
      rowFrontVisible: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 90,
        padding: 10,
        marginBottom: 8,
      },
      title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#666',
      },
      details: {
        fontSize: 12,
        color: '#999',
      },
      date:{
        fontSize: 12,
        color: '#999',
        marginTop: 5,
      }
})

export default MessageMenu;