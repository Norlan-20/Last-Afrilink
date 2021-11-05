/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Dimensions,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Icon, Image, Header } from 'react-native-elements';

const {width,height} = Dimensions.get('window');
const primary = '#2e3190';
const secondary = '#fab917';
const fond = '#F7F7F7';

const FavorisScreen = props => {
    return (
        <View style={{flex: 1}}>
            <StatusBar hidden={false} />
            <Header backgroundColor={primary}
                leftComponent={<Icon type="feather" name="chevron-left" size={26} color={fond} />}
            />
            <ScrollView contentContainerStyle={{ justifyContent:'center', alignItems:'center' }}>
                <TouchableOpacity>
                    
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
    },
});

export default FavorisScreen;