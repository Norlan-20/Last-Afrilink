/* eslint-disable prettier/prettier */
import React,{useCallback,useEffect,useState} from 'react';
import { View,StyleSheet,Text,StatusBar } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {Header} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import { Container } from './styles';

const inputFond = "#F5F7F8";

const Message = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() =>{
        setMessages([
            { 
                _id: 1,
                text: 'Salutation je suis votre assistant virtuel',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Joker',
                    avatar: 'https://placeimg.com/140/140/any',
                },
                system: true,
                sent: true,
                received: true,
                pendings: true,
            },
        ])
    },[])

    const onSend = useCallback((messages = [])=>{
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    },[])

  return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
          <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{_id: 1}}
            textInputStyle={{color: 'black'}}
            messagesContainerStyle={{ backgroundColor: inputFond}}
            />
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default Message;