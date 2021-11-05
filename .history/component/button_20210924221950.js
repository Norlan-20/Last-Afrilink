/* eslint-disable prettier/prettier */
import React from 'react'
import { TouchableOpacity, Text, Dimensions } from 'react-native'

const {width} = Dimensions.get('window');
const primary = '#2e3190';

export const Continuer = () => {
    return(
        <TouchableOpacity style={{ backgroundColor: primary, width: width - (width / 5) ,marginTop: 8}}>
            <Text>Continuer</Text>
        </TouchableOpacity>
    );
};