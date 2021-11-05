/* eslint-disable prettier/prettier */
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const primary = '#2e3190';

export const Continuer = (width) => {
    return(
        <TouchableOpacity style={{ backgroundColor: primary, width: width }}>
            <Text>Continuer</Text>
        </TouchableOpacity>
    );
};