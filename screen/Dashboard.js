import React from 'react';
import { View,Text,TouchableOpacity,Dimensions, StyleSheet,FlatList,Image,ScrollView,TextInput, } from 'react-native';
import {Icon } from 'react-native-elements'
import * as animatable from 'react-native-animatable'
import AddProduit from './AddProduit'


const {width,height} = Dimensions.get('window');
const primary = '#2e3190';
const onTouch = {
    color: primary,
    backgroundColor: 'white'
}
const onPressColor={
    color: 'white',
    backgroundColor: primary
}

// import { Container } from './styles';
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

const DashboardMenu = [
    {
        id: '1',
        iconName:'home'
        
    },
    {
        id: '2',
        iconName:'add'
    },
    {
        id: '3',
        iconName:'photo-album'
    },
    {
        id: '4',
        iconName:'inventory'
    },
    {
        id: '5',
        iconName:'arrow-circle-down'
    },
    {
        id: '6',
        iconName:''
    },
    {
        id: '7', 
        iconName:''       
    },
    {
        id: '8',
        iconName:''
    },
    {
        id: '9',
        iconName:''
    },
    {
        id: '9',
        iconName:''
    }
]
const Dashboard = () => {

    const [pageNumbering, setPageNumbering] = React.useState(0);
    const [button,setButton] = React.useState(onTouch);


    const PageChanger = () =>{

        switch(pageNumbering) {

            case 0:
                return <DashboardHome />;
                break;
            case 1:
                return <ProductAddScreen />;
                break;
            case 2:
                return <CatalogueScreen />;
                break;
            case 3:
                return <InventoryScreen />; 
                 break;
            case 4:
                return <CommandeScreen /> ;
                break;
            case 5:
                return <View />;
                break;
            case 6:
                return <View />;
                break;
            case 7:
                return <View />;
                break;
            case 8:
                return <AddProduit />;
                break;
            case 9:
                return <View />;
                break;
        }
    }   
    const ProductAddScreen = () =>{

        return(
            <animatable.View>
                <TouchableOpacity style={{width: '100%',height: 40, justifyContent: 'center', elevation: 0.5, backgroundColor: '#E9E9E9',marginVertical:2,paddingLeft: 5}} onPress={()=>setPageNumbering(8)}>
                    <Text>Ajouter un Produit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%',height: 40, justifyContent: 'center', elevation: 0.5, backgroundColor: '#E9E9E9',marginVertical:2,paddingLeft: 5}} onPress={()=>setPageNumbering(0)}>
                    <Text>Modifier Produit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%',height: 40, justifyContent: 'center', elevation: 0.5, backgroundColor: '#E9E9E9',marginVertical:2,paddingLeft: 5}} onPress={()=>setPageNumbering(0)}>
                    <Text>Supprimer Prouit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%',height: 40, justifyContent: 'center', elevation: 0.5, backgroundColor: '#E9E9E9',marginVertical:2,paddingLeft: 5}} onPress={()=>setPageNumbering(0)}>
                    <Text>Afficher Les Produits</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%',height: 40, justifyContent: 'center', elevation: 0.5, backgroundColor: '#E9E9E9',marginVertical:2,paddingLeft: 5}} onPress={()=>setPageNumbering(8)}>
                    <Text>Ajouter un Produit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%',height: 40, justifyContent: 'center', elevation: 0.5, backgroundColor: '#E9E9E9',marginVertical:2,paddingLeft: 5}} onPress={()=>setPageNumbering(0)}>
                    <Text>Modifier Produit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%',height: 40, justifyContent: 'center', elevation: 0.5, backgroundColor: '#E9E9E9',marginVertical:2,paddingLeft: 5}} onPress={()=>setPageNumbering(0)}>
                    <Text>Supprimer Prouit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%',height: 40, justifyContent: 'center', elevation: 0.5, backgroundColor: '#E9E9E9',marginVertical:2,paddingLeft: 5}} onPress={()=>setPageNumbering(0)}>
                    <Text>Afficher Les Produits</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%',height: 40, justifyContent: 'center', elevation: 0.5, backgroundColor: '#E9E9E9',marginVertical:2,paddingLeft: 5}} onPress={()=>setPageNumbering(0)}>
                    <Text>Modifier Produit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%',height: 40, justifyContent: 'center', elevation: 0.5, backgroundColor: '#E9E9E9',marginVertical:2,paddingLeft: 5}} onPress={()=>setPageNumbering(0)}>
                    <Text>Supprimer Prouit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '100%',height: 40, justifyContent: 'center', elevation: 0.5, backgroundColor: '#E9E9E9',marginVertical:2,paddingLeft: 5}} onPress={()=>setPageNumbering(0)}>
                    <Text>Afficher Les Produits</Text>
                </TouchableOpacity>
            </animatable.View>
        )
    };

    /*
    <TouchableOpacity style={{backgroundColor: button.backgroundColor}} onPress={()=>setButton()} onPress={()=>{setPageNumbering(0)}}><Icon name="home" color= {button.color} /></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: button.backgroundColor}} onPress={()=>{setPageNumbering(1)}}><Icon name="home" color= {button.color} /></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: button.backgroundColor}} onPress={()=>{setPageNumbering(2)}}><Icon name="home" color= {button.color} /></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: button.backgroundColor}} onPress={()=>{setPageNumbering(3)}}><Icon name="home" color= {button.color} /></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: button.backgroundColor}} onPress={()=>{setPageNumbering(4)}}><Icon name="home" color= {button.color} /></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: button.backgroundColor}} onPress={()=>{setPageNumbering(5)}}><Icon name="home" color= {button.color} /></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: button.backgroundColor}} onPress={()=>{setPageNumbering(6)}}><Icon name="home" color= {button.color} /></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: button.backgroundColor}} onPress={()=>{setPageNumbering(7)}}><Icon name="home" color= {button.color} /></TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: button.backgroundColor}} onPress={()=>{setPageNumbering(8)}}><Icon name="home" color= {button.color} /></TouchableOpacity>
    <TouchableOpacity style={{backgroundColor: button.backgroundColor}} onPress={()=>{setPageNumbering(9)}}><Icon name="home" color= {button.color} /></TouchableOpacity>
     */

  return (
  <View style={{flex: 1}}>
    <View style={{height: '100%', width: width * 0.17, position: 'absolute',backgroundColor: 'white',elevation: 3}}>
        <FlatList 
            vertical
            data={DashboardMenu}
            keyExtractor={(item, index) => index.toString()}  
            renderItem={({item,index})=>(
                <TouchableOpacity style={{marginVertical: 22,backgroundColor: button.backgroundColor}} onPress={()=>{setPageNumbering(index)}}><Icon name= {DashboardMenu[index].iconName} color= {button.color} /></TouchableOpacity>
            )}
        />
    </View>
    <View style={{marginLeft: width*0.18,marginTop: 10}}>
       <PageChanger />
    </View>
  </View>
  );
}

const DashboardHome = () =>{
    return(
        <ScrollView vertical style={styles.container}>
            <animatable.View animation="bounceIn">
                <View style={{marginVertical: 10}}><Text style={{fontWeight: 'bold', fontSize: 18}}>Achats et Vente</Text></View>
                <View style={styles.card}></View>
                <View style={{flexDirection: 'row',justifyContent: 'space-around', marginVertical: 10}}>
                    <View style={styles.card1}></View>
                    <View style={styles.card2}></View>
                </View>
                <View>
                    <View><Text style={{fontWeight: 'bold', fontSize: 18}}>Article recent</Text></View>
                    <View>
                        <FlatList
                            data={HOME_SLIDERS}
                            keyExtractor={ item => item.id }
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{margin: 5, marginBottom: 2,}}
                            contentContainerStyle={{flexDirection: 'row', alignItems: 'center'}}
                            renderItem={({item}) => <TouchableOpacity style={styles.articleElementStyle} >
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
                </View>
                <View>
                    <View><Text style={{fontWeight: 'bold', fontSize: 18}}>Vos Top tandance</Text></View>
                    <View>
                        <FlatList
                            data={HOME_SLIDERS}
                            keyExtractor={ item => item.id }
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{margin: 5, marginBottom: 2,}}
                            contentContainerStyle={{flexDirection: 'row', alignItems: 'center'}}
                            renderItem={({item}) => <TouchableOpacity style={styles.articleElementStyle} >
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
                </View>
                <View>
                    <View><Text style={{fontWeight: 'bold', fontSize: 18}}>Autre</Text></View>
                    <View>
                        <FlatList
                            data={HOME_SLIDERS}
                            keyExtractor={ item => item.id }
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{margin: 5, marginBottom: 2,}}
                            contentContainerStyle={{flexDirection: 'row', alignItems: 'center'}}
                            renderItem={({item}) => <TouchableOpacity style={styles.articleElementStyle} >
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
                </View>
            </animatable.View>
        </ScrollView>
    )
};


const CatalogueScreen = () =>{
    return(
        <animatable.View animation="bounceIn">
            <Text>Ici ajouter le catalogue</Text>
        </animatable.View>
    )
};


const CommandeScreen = () =>{
    return(
        <animatable.View animation="bounceIn">
            <Text>Ici ajouter les Produits Commander</Text>
        </animatable.View>
    )
};

const styles = StyleSheet.create({

    card: {
        width: width * 0.815,
        height: height * 0.2,
        elevation: 1,
        marginVertical: 5,
        backgroundColor: 'white'
    },
    card1: {
        width: width * 0.4,
        height: height * 0.2,
        backgroundColor: 'white',
        elevation: 1,
    },
    card2: {
        width: width * 0.4,
        height: height * 0.2,
        backgroundColor: 'white', 
        elevation: 1,
    },
    articleElementStyle:{
        width: width / 2.8,
        height: height / 4,
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
    },


})
export default Dashboard;