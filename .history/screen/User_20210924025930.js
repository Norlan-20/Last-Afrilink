/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const fond = '#F7F7F7';
const primary = '#2e3190';
const search = '#DDDDDD';

const UserScreen = props => {
    return (
        <View>
            <Text>User page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: fond,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default UserScreen;