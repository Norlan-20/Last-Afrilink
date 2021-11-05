import React from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Dimensions
} from 'react-native';

import { SwiperFlatList } from 'react-native-swiper-flatlist';

const {width,height} = Dimensions.get('window');
const primary = '#2e3190';
const secondary = '#fab917';
const fond = '#F7F7F7';
const article = '#EEE';

const ProductScreen = () => {
    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <SwiperFlatList
                    autoplay
                    autoplayDelay={3}
                    autoplayLoop
                    index={2}
                    showPagination={false}
                    data={data.homeSliders}
                    renderItem={({ item }) => {
                        return <View style={{width: width}} >
                                <Image
                                source={{ uri: URL+item.path}}
                                style={{minWidth: width,height: height/3.3,}}
                            />
                        </View>
                    }}
                />
            </ScrollView>
        </View>
    );
};

export default ProductScreen;