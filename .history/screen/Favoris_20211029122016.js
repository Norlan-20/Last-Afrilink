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
            <ScrollView style={styles.container} contentContainerStyle={{ justifyContent:'center', alignItems:'center' }}>
                <TouchableOpacity style={styles.wish}>
                    <Text>jjdcj;b</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    wish:{
        width: width - 20,
        backgroundColor: fond,
        elevation: 10,
        padding: 5,
        borderRadius: 10,
        marginTop: 10,
    },
});

export default FavorisScreen;