/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    Dimensions,
    ScrollView,
    StatusBar,
    StyleSheet,
} from 'react-native';

import { Icon, Image, Header } from 'react-native-elements';

const {width,height} = Dimensions.get('window');
const primary = '#2e3190';
const secondary = '#fab917';
const fond = '#F7F7F7';

const CatalogueScreen = props => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden={false} />
            <Header backgroundColor={primary}
                leftComponent={<Icon type="feather" name="chevron-left" size={26} color={fond} />}
            />
            <Text>i WANNA</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CatalogueScreen;