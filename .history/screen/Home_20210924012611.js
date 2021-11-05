/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements';

const HomeScreen = props => {
    return (
        <SafeAreaView style={styles.container}>
            <Header
                leftComponent={<Icon name='user' type='font-awesome' color='#FFF' />}
                backgroundColor="#2e3190"
                
            />
            <Text>Hello bro</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
    },
});

export default HomeScreen;