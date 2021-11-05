/* eslint-disable prettier/prettier */
import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import {
    Header,
    SearchBar,
    Image,
} from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { SwiperFlatList } from 'react-native-swiper-flatlist';

const {width,height} = Dimensions.get('window');
const primary = '#2e3190';
const secondary = '#fab917';
const fond = '#F7F7F7';
const article = '#EEE';

const HOME_SLIDERS = [
    {
        id: 'az4',
        title: 'Styliste',
        prix: "2500 XOF",
        image: 'https://previews.123rf.com/images/studioworkstock/studioworkstock1701/studioworkstock170100561/70957140-r%C3%A9duction-sp%C3%A9ciale-annonce-promo-banner.jpg',
    },
    {
        id: 'az6',
        title: 'Mécano',
        prix: "2500 XOF",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTId7SmMUiLJctLeFhq7sZmwLxleL62n5Rk0g&usqp=CAU',
    },
    {
        id: 'az1',
        title: 'Chef',
        prix: "2500 XOF",
        image: 'https://media.istockphoto.com/vectors/sale-banner-template-design-vector-id945107144'
    },
    {
        id: 'az2',
        title: 'Plombier',
        prix: "2500 XOF",
        image: 'https://media.istockphoto.com/vectors/promo-coupon-fashion-sale-banner-special-offer-summer-discount-sale-vector-id958858512'
    },
    {
        id: 'az3',
        title: 'Chauffeur',
        prix: "2500 XOF",
        image: 'https://c8.alamy.com/compfr/wwbaf4/offre-speciale-vente-flash-banner-jusqu-a-50-de-reduction-wwbaf4.jpg'
    },
];

const Categorie = props => {

    const [heartColor, setHeartColor] = React.useState("#9F9F9F");

     return (
        <View style={styles.container}>
            <ScrollView>
                <SwiperFlatList
                    autoplay
                    autoplayDelay={3}
                    autoplayLoop
                    index={2}
                    showPagination={false}
                    data={HOME_SLIDERS}
                    renderItem={({ item }) => {
                        return <View style={{ width: width }} >
                            <Image
                                source={{ uri: item.image}}
                                style={{maxWidth: width,height: height / 4,}}
                            />
                        </View>;
                    }}
                />
                <View style={styles.cat}>
                    <FlatList
                        data={HOME_SLIDERS}
                        keyExtractor={ item => item.id }
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{margin: 5, marginBottom: 2,}}
                        contentContainerStyle={{flexDirection: 'row', alignItems: 'center'}}
                        renderItem={({item}) => <TouchableOpacity onPress={()=>{props.navigation.navigate('subCategorie')}} style={styles.categorieElementStyle} >
                                <Text style={styles.categorieElementTitle}>{item.title}</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>

                <View style={styles.cat}>
                    <Text style={styles.catTitle2}>Top Tandance</Text>
                    <FlatList
                        data={HOME_SLIDERS}
                        keyExtractor={ item => item.id }
                        numColumns={2}
                        showsHorizontalScrollIndicator={false}
                        style={{margin: 5, marginBottom: 2}}
                        contentContainerStyle={{}}
                        renderItem={({item}) => <TouchableOpacity style={styles.articleElementStyle} >
                                 <Image
                                    source={{uri: item.image}}
                                    style={{width: width / 3, height: width / 3}}
                                />
                                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center',alignContent: 'center'}}>
                                    <View>
                                        <View style={{width: width / 4, paddingTop: 3}}>
                                            <Text style={styles.articleElementTitle}>{item.title}</Text>
                                        </View>
                                        <View style={{width: width / 4, paddingTop: 2}}>
                                            <Text style={{fontSize: 12}}>{item.prix}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Ionicons name={"heart"} size={20} color={"#CC0000"}/>
                                    </View>
                               </View>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </ScrollView>
        </View>
     );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: fond,
    },
    cat:{
        paddingTop: 5,
    },
    catTitle:{
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 14,
        color: secondary,
        paddingLeft: 10,
    },
    catTitle2:{
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 14,
        color: secondary,
        paddingLeft: 10,
        paddingTop: 10,
    },
    categorieElementStyle:{
        width: width / 4,
        height: width / 12,
        marginRight: 5,
        marginVertical: 2,
        backgroundColor: primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width,
    },
    categorieElementTitle:{
        fontSize: 14,
        fontWeight: '300',
        color: '#FFF',
    },
    articleElementStyle:{
        width: width / 2,
        height: width / 2,
        marginRight: 5,
        marginVertical: 2,
        borderRadius: 5,
        backgroundColor: article,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    articleElementTitle:{
        fontSize: 15,
        fontWeight: '600',
        color: '#444',
        alignSelf: 'flex-start',
    },
});

export default Categorie;