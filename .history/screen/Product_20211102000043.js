/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    StatusBar,
    Dimensions
} from 'react-native';

import { Image, Header, Icon } from 'react-native-elements';

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

const ProductScreen = (props) => {
    return (
        <View style={{flex: 1}}>
            <StatusBar hidden={false} />
            {/* <Header backgroundColor={primary}
                leftComponent={<Icon type="feather" name='chevron-left' size={26} color={fond} />}
            /> */}
            <ScrollView style={{ padding: 10, }}  >
                <View style={{ paddingBottom: 10, }} >
                    <SwiperFlatList
                        index={2}
                        showPagination={true}
                        paginationStyleItem={{width: 10,height: 10,marginTop: 20,}}
                        paginationDefaultColor={primary}
                        paginationActiveColor={secondary}
                        data={HOME_SLIDERS}
                        renderItem={({ item }) => {
                            return <View style={{width: width - 20, }} >
                                    <Image
                                        source={{ uri: item.image}}
                                        style={{maxWidth: width - 20,height: height/2, borderRadius: 10, }}
                                    />
                            </View>
                        }}
                    />
                </View>
                <View style={styles.infoBloc}>
                    <Text style={styles.title}>kjcbm</Text>
                    <Text style={styles.price}>cdb,;</Text>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text>
                    cdjkcnlkk {console.log(props.params)}
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    infoBloc:{
        paddingTop: 10,
    },
    title:{
        paddingTop: 20,
        paddingBottom: 5,
        fontWeight: 'bold',
        color: '#444',
        fontSize: 20,
    },
    price:{
        color: primary,
        fontSize: 18,
        fontWeight: 'bold',
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        paddingBottom: 8,
    },
    descriptionTitle:{
        paddingTop: 8,
        color: '#444',
        fontSize: 15,
        fontWeight: 'bold',
        width: '100%',
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 8,
    },
});

export default ProductScreen;