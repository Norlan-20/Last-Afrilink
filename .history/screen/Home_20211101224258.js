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

import { SwiperFlatList } from 'react-native-swiper-flatlist';

const {width,height} = Dimensions.get('window');
const primary = '#2e3190';
const secondary = '#fab917';
const fond = '#F7F7F7';
const article = '#EEE';

const Category= [
    {
        id: "cat1",
        name: "NEW"
    },
    {
        id: "cat2",
        name: "Supermarché"
    },
    {
        id: "cat3",
        name: "Mode et Beauté"
    },
    {
        id: "cat4",
        name: "Transport"
    },
    {
        id: "cat5",
        name: "Sport & Loisirs"
    },
    {
        id: "cat6",
        name: "Pour Enfant"
    },
    {
        id: "cat7",
        name: "Immobilier"
    },
]

const HOME_SLIDERS = [
    {
        id: 'az4',
        title: 'Styliste',
        image: 'https://previews.123rf.com/images/studioworkstock/studioworkstock1701/studioworkstock170100561/70957140-r%C3%A9duction-sp%C3%A9ciale-annonce-promo-banner.jpg',
    },
    {
        id: 'az6',
        title: 'Mécano',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTId7SmMUiLJctLeFhq7sZmwLxleL62n5Rk0g&usqp=CAU',
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

const NOUVEAUTE = [
    {
        id: "P01",
        name: "APPLE WATCH SERIES 7",
        uri: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ML173ref_VW_34FR+watch-45-alum-green-nc-7s_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1630364962000%2C1631661629000",
        price: "400000",
        image: [
            {
                id: "img1",
                url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ML173ref_VW_34FR+watch-45-alum-green-nc-7s_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1630364962000%2C1631661629000"
            },
            {
                id: "img2",
                url: "https://media.ldlc.com/r1600/ld/products/00/05/89/51/LD0005895111_1.jpg"
            },
            {
                id: "img3",
                url: "https://media.ldlc.com/r1600/ld/products/00/05/89/52/LD0005895293_1.jpg"
            },
            {
                id: "img4",
                url: "https://www.apple.com/newsroom/images/product/os/watchos/standard/Apple-watch-watchos7_06222020_big.jpg.large.jpg"
            }
        ],
        description:"Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store. Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "P02",
        name: "MP3 PLAYER AGPTEK A02",
        uri: "https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvZTJkOGU5YTItN2MzNC00ZmZmLWE4ZmQtNGY4ZDg2NGM1OTg2Ljg1OTE1YThkZTRjYTcwNjRmZmJiZWUwYTRkNWI1ZmFlLnBuZw.jpg",
        price: "10000",
        image: [
            {
                id: "img1",
                url: "https://www.ubuy.co.it/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvZTJkOGU5YTItN2MzNC00ZmZmLWE4ZmQtNGY4ZDg2NGM1OTg2Ljg1OTE1YThkZTRjYTcwNjRmZmJiZWUwYTRkNWI1ZmFlLnBuZw.jpg"
            },
            {
                id: "img2",
                url: "https://m.media-amazon.com/images/I/41aWw3RfUdL.jpg"
            },
            {
                id: "img3",
                url: "https://m.media-amazon.com/images/I/41-Srg65GML._AC_.jpg"
            },
            {
                id: "img4",
                url: "https://c1.neweggimages.com/ProductImage/AMZ1S200319wPkT7.jpg"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "P03",
        name: "Sony PlayStation 5",
        uri: "https://i5.walmartimages.com/asr/cb95a164-26a4-4428-8bbb-823420a19b9d.fa5d5e818c6be47fb1f0cd326beb11d5.jpeg",
        price: "700000",
        image: [
            {
                id: "img1",
                url: "https://i5.walmartimages.com/asr/cb95a164-26a4-4428-8bbb-823420a19b9d.fa5d5e818c6be47fb1f0cd326beb11d5.jpeg"
            },
            {
                id: "img2",
                url: "https://m.media-amazon.com/images/I/41aWw3RfUdL.jpg"
            },
            {
                id: "img3",
                url: "https://m.media-amazon.com/images/I/41-Srg65GML._AC_.jpg"
            },
            {
                id: "img4",
                url: "https://c1.neweggimages.com/ProductImage/AMZ1S200319wPkT7.jpg"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    }
]

const HomeScreen = props => {

    const showOneArticle = () => {
        props.navigation.navigate('Article')
    }

     return (
        <View style={styles.container}>
             <StatusBar hidden={false} />
            <Header barStyle="light-content" backgroundColor={"#2e3190"}>
                <SearchBar
                    placeholder="Rechercher"
                    containerStyle={{width: width - 20, backgroundColor: "#2e3190",borderColor: '#2e3190' }}
                    inputContainerStyle={{ maxHeight: 40, backgroundColor: fond }}
                    inputStyle={{ backgroundColor: fond }}
                    showCancel
                    cancelIcon
                    onClear
                />
            </Header>
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
                    {/* <Text style={styles.catTitle}>Categorie</Text> */}
                    <FlatList
                        data={Category}
                        keyExtractor={ item => item.id }
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{margin: 5, marginBottom: 2,}}
                        contentContainerStyle={{flexDirection: 'row', alignItems: 'center'}}
                        renderItem={({item}) => <TouchableOpacity style={styles.categorieElementStyle} >
                                <Text style={styles.categorieElementTitle}>{item.name}</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>

                <View style={styles.cat}>
                    <View style={styles.catLine}>
                        <Text style={styles.catTitle2}>Nouveaute</Text>
                        <TouchableOpacity><Text style={styles.seeAll}>Voir Plus</Text></TouchableOpacity>
                    </View>
                    <FlatList
                        data={NOUVEAUTE}
                        keyExtractor={ item => item.id }
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{margin: 5, marginBottom: 2,}}
                        contentContainerStyle={{flexDirection: 'row', alignItems: 'center'}}
                        renderItem={({item}) => <TouchableOpacity onPress={ () => showOneArticle() } style={styles.articleElementStyle} >
                                <Image
                                    source={{uri: item.uri}}
                                    style={{width: width / 3, height: width / 3}}
                                />
                                <View style={{width: width / 3, paddingTop: 8}}>
                                    <Text numberOfLines={1} style={styles.articleElementTitle}>{item.name}</Text>
                                    <Text style={styles.articleElementTitle}>{item.price} XOF</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>

                <View style={styles.cat}>
                    <View style={styles.catLine}>
                        <Text style={styles.catTitle2}>Mieux Notés</Text>
                        <TouchableOpacity><Text style={styles.seeAll}>Voir Plus</Text></TouchableOpacity>
                    </View>
                    <FlatList
                        data={HOME_SLIDERS}
                        keyExtractor={ item => item.id }
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{margin: 5, marginBottom: 2,}}
                        contentContainerStyle={{flexDirection: 'row', alignItems: 'center'}}
                        renderItem={({item}) => <TouchableOpacity onPress={ () => showOneArticle() } style={styles.articleElementStyle} >
                                <Image
                                    source={{uri: item.image}}
                                    style={{width: width / 3, height: width / 3}}
                                />
                                <View style={{width: width / 3, paddingTop: 8}}>
                                    <Text style={styles.articleElementTitle}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>
                
                {/* Banner code */}
                <View style={styles.banner}> 
                    <Image
                        source={{uri: 'https://previews.123rf.com/images/studioworkstock/studioworkstock1701/studioworkstock170100561/70957140-r%C3%A9duction-sp%C3%A9ciale-annonce-promo-banner.jpg'}}
                        style={{width: "100%", height: width / 3}}
                    />
                </View>

                <View style={styles.cat}>
                    <View style={styles.catLine}>
                        <Text style={styles.catTitle2}>Electroménager</Text>
                        <TouchableOpacity><Text style={styles.seeAll}>Voir Plus</Text></TouchableOpacity>
                    </View>
                    <FlatList
                        data={HOME_SLIDERS}
                        keyExtractor={ item => item.id }
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{margin: 5, marginBottom: 2,}}
                        contentContainerStyle={{flexDirection: 'row', alignItems: 'center'}}
                        renderItem={({item}) => <TouchableOpacity onPress={ () => showOneArticle() } style={styles.articleElementStyle} >
                                <Image
                                    source={{uri: item.image}}
                                    style={{width: width / 3, height: width / 3}}
                                />
                                <View style={{width: width / 3, paddingTop: 8}}>
                                    <Text style={styles.articleElementTitle}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>

                <View style={styles.cat}>
                    <View style={styles.catLine}>
                        <Text style={styles.catTitle2}>MODE & BEAUTE</Text>
                        <TouchableOpacity><Text style={styles.seeAll}>Voir Plus</Text></TouchableOpacity>
                    </View>
                    <FlatList
                        data={HOME_SLIDERS}
                        keyExtractor={ item => item.id }
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{margin: 5, marginBottom: 2,}}
                        contentContainerStyle={{flexDirection: 'row', alignItems: 'center'}}
                        renderItem={({item}) => <TouchableOpacity onPress={ () => showOneArticle() } style={styles.articleElementStyle} >
                                <Image
                                    source={{uri: item.image}}
                                    style={{width: width / 3, height: width / 3}}
                                />
                                <View style={{width: width / 3, paddingTop: 8}}>
                                    <Text style={styles.articleElementTitle}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>

                {/* Banner code */}
                <View style={styles.banner}>   
                    <Image
                        source={{uri: 'https://c8.alamy.com/compfr/wwbaf4/offre-speciale-vente-flash-banner-jusqu-a-50-de-reduction-wwbaf4.jpg'}}
                        style={{width: "100%", height: width / 3}}
                    />
                </View>

                <View style={styles.cat}>
                    <View style={styles.catLine}>
                        <Text style={styles.catTitle2}>MODE & BEAUTE</Text>
                        <TouchableOpacity><Text style={styles.seeAll}>Voir Plus</Text></TouchableOpacity>
                    </View>
                    <FlatList
                        data={HOME_SLIDERS}
                        keyExtractor={ item => item.id }
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{margin: 5, marginBottom: 2,}}
                        contentContainerStyle={{flexDirection: 'row', alignItems: 'center'}}
                        renderItem={({item}) => <TouchableOpacity onPress={ () => showOneArticle() } style={styles.articleElementStyle} >
                                <Image
                                    source={{uri: item.image}}
                                    style={{width: width / 3, height: width / 3}}
                                />
                                <View style={{width: width / 3, paddingTop: 8}}>
                                    <Text style={styles.articleElementTitle}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>

                <View style={styles.cat}>
                    <View style={styles.catLine}>
                        <Text style={styles.catTitle2}>MODE & BEAUTE</Text>
                        <TouchableOpacity><Text style={styles.seeAll}>Voir Plus</Text></TouchableOpacity>
                    </View>
                    <FlatList
                        data={HOME_SLIDERS}
                        keyExtractor={ item => item.id }
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{margin: 5, marginBottom: 2,}}
                        contentContainerStyle={{flexDirection: 'row', alignItems: 'center'}}
                        renderItem={({item}) => <TouchableOpacity onPress={ () => showOneArticle() } style={styles.articleElementStyle} >
                                <Image
                                    source={{uri: item.image}}
                                    style={{width: width / 3, height: width / 3}}
                                />
                                <View style={{width: width / 3, paddingTop: 8}}>
                                    <Text style={styles.articleElementTitle}>{item.title}</Text>
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
        // width: width / 4,
        height: width / 12,
        marginRight: 5,
        marginVertical: 2,
        paddingHorizontal: 15,
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
        width: width / 2.5,
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
    catLine:{
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10,
    },
    seeAll:{
        fontWeight: 'bold',
        color: '#444',
    },
    banner:{
        padding: 10,
    }
});

export default HomeScreen;