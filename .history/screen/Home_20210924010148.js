/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = props => {
    return (
        <SafeAreaView>
            <Text>Hello bro</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
    }
});

export default HomeScreen;