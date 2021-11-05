/* eslint-disable prettier/prettier */
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const primary = '#2e3190';

export const Continuer = (width) => {
    return(
        <TouchableOpacity style={{width: width / 5, backgroundColor: primary, padding: 5, flexDirection: 'row', justifyContent: 'center' }}>
            <Text>Continuer</Text>
        </TouchableOpacity>
    );
};