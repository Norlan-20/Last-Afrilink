import React from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    StatusBar,
    Dimensions
} from 'react-native';

import { Image, Header } from 'react-native-elements';

import { SwiperFlatList } from 'react-native-swiper-flatlist';

const {width,height} = Dimensions.get('window');
const primary = '#2e3190';
const secondary = '#fab917';
const fond = '#F7F7F7';

const HOME_SLIDERS = [
    {
        id: 'az4',
        title: 'Styliste',
        image: 'https://previews.123rf.com/images/studioworkstock/studioworkstock1701/studioworkstock170100561/70957140-r%C3%A9duction-sp%C3%A9ciale-annonce-promo-banner.jpg'
    },
    {
        id: 'az6',
        title: 'Mécano',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTId7SmMUiLJctLeFhq7sZmwLxleL62n5Rk0g&usqp=CAU'
    },
    {
        id: 'az1',
        title: 'Chef',
        image: 'https://media.istockphoto.com/vectors/sale-banner-template-design-vector-id945107144'
    },
    {
        id: 'az2',
        title: 'Plombier',
        image: 'https://media.istockphoto.com/vectors/promo-coupon-fashion-sale-banner-special-offer-summer-discount-sale-vector-id958858512'
    },
    {
        id: 'az3',
        title: 'Chauffeur',
        image: 'https://c8.alamy.com/compfr/wwbaf4/offre-speciale-vente-flash-banner-jusqu-a-50-de-reduction-wwbaf4.jpg'
    },
];

const ProductScreen = () => {
    return (
        <View style={{flex: 1}}>
            <StatusBar hidden={false} />
            <Header backgroundColor={primary} />
            <ScrollView style={{ padding: 10, }}  >
                <SwiperFlatList
                    index={1}
                    showPagination={true}
                    paginationStyleItem={{width: 10,height: 10,marginTop: -65,}}
                    paginationDefaultColor={primary}
                    paginationActiveColor={secondary}
                    data={HOME_SLIDERS}
                    renderItem={({ item }) => {
                        return <View style={{width: width - 20, }} >
                                <Image
                                    source={{ uri: item.image}}
                                    style={{maxWidth: width - 20,height: height/2, borderRadius: 10, marginBottom: 10,}}
                                />
                        </View>
                    }}
                />
                <View>
                    <Text>Apple Watch Series 6</Text>
                    <Text>$140</Text>
                    <Text>Description</Text>
                    <Text>
                        Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default ProductScreen;