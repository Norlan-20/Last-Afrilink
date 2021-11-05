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
                    <View>
                        <Image
                            source={{ uri: 'https://previews.123rf.com/images/studioworkstock/studioworkstock1701/studioworkstock170100561/70957140-r%C3%A9duction-sp%C3%A9ciale-annonce-promo-banner.jpg' }}
                            style={{  width: 60, height: 60, borderRadius: width, }}
                        />
                    </View>
                    <View></View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        padding: 10,
    },
    wish:{
        width: width - 20,
        backgroundColor: fond,
        elevation: 1,
        padding: 8,
        borderRadius: 9,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default FavorisScreen;