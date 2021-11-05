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
import GridImageView from 'react-native-grid-image-viewer';

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
            <Text style={styles.title}>Catalogue</Text>
            <GridImageView data={[
                'https://previews.123rf.com/images/studioworkstock/studioworkstock1701/studioworkstock170100561/70957140-r%C3%A9duction-sp%C3%A9ciale-annonce-promo-banner.jpg',
                'https://previews.123rf.com/images/studioworkstock/studioworkstock1701/studioworkstock170100561/70957140-r%C3%A9duction-sp%C3%A9ciale-annonce-promo-banner.jpg',
                'https://previews.123rf.com/images/studioworkstock/studioworkstock1701/studioworkstock170100561/70957140-r%C3%A9duction-sp%C3%A9ciale-annonce-promo-banner.jpg',
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        color: primary,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: 5,
        width: width,
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',
        marginBottom: 4,
    },
});

export default CatalogueScreen;