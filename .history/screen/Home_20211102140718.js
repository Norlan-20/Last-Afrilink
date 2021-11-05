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
];

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
        uri: "https://www.cdiscount.com/pdt2/3/9/4/1/700x700/auc8765302742394/rw/blender-moulinex-lm420510-blender-mixeur-eacute-l.jpg",
        price: "700000",
        image: [
            {
                id: "img1",
                url: "https://i5.walmartimages.com/asr/cb95a164-26a4-4428-8bbb-823420a19b9d.fa5d5e818c6be47fb1f0cd326beb11d5.jpeg"
            },
            {
                id: "img2",
                url: "https://i5.walmartimages.com/asr/5f18a046-a71f-439f-9a6c-7063ef86d680.7067b7c81224ebb4552a2da435bef17e.jpeg"
            },
            {
                id: "img3",
                url: "data:image/jpeg;base64,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"
            },
            {
                id: "img4",
                url: "https://m.media-amazon.com/images/I/41yLxa7R6KS._SL500_.jpg"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "P04",
        name: "iPhone 13 mini 128 Gb",
        uri: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000",
        price: "700000",
        image: [
            {
                id: "img1",
                url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000"
            },
            {
                id: "img2",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwekDxg1QFcfr3vpOrZ--qSzWggmb0Ln0ZrRjCLXkuNMI66Z1SG6RSwdbwocQDRNuSt-s&usqp=CAU"
            },
            {
                id: "img3",
                url: "https://c8.alamy.com/compfr/2gktb04/vinnytsia-ukraine-15-septembre-2021-apple-iphone-13-couleur-rose-apple-iphone-12-pro-ou-pro-max-en-couleur-graphite-vue-avant-de-l-ecran-maquette-2gktb04.jpg"
            },
            {
                id: "img4",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsG-dMNY9mDR8kQMxUoujUCRrWmLFMu3RYpM6xN9B9KwXP0oHVN2qbWyk4JabVV1mKugE&usqp=CAU"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "P05",
        name: "Air Pod 3",
        uri: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1632861342000",
        price: "8000",
        image: [
            {
                id: "img1",
                url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1632861342000"
            },
            {
                id: "img2",
                url: "https://img.phonandroid.com/2021/09/Airpods-3-03.jpg"
            },
            {
                id: "img3",
                url: "https://i2.wp.com/iphoneislam.com/wp-content/uploads/2019/10/EGDk6FUXUAI9Ftc.jpg?resize=590%2C590&ssl=1"
            },
            {
                id: "img4",
                url: "https://cdn2.ettoday.net/images/5915/d5915690.jpg"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    }
];

const NOTES = [
    {
        id: "N01",
        name: "AIR NIKE JORDAN",
        uri: "https://fr.basketzone.net/zdjecia/2020/07/02/307/43/NIKE_AIR_JORDAN_1_RETRO_MID_SMOKE_GREY.jpg",
        price: "25000",
        image: [
            {
                id: "img1",
                url: "https://fr.basketzone.net/zdjecia/2020/07/02/307/43/NIKE_AIR_JORDAN_1_RETRO_MID_SMOKE_GREY.jpg"
            },
            {
                id: "img2",
                url: "https://images.asos-media.com/products/nike-air-jordan-1-baskets-mi-hautes-gris-blanc/14027155-1-greywhite"
            },
            {
                id: "img3",
                url: "https://images.asos-media.com/products/nike-air-jordan-1-baskets-mi-montantes-blanc/10265049-1-white?$n_640w$&wid=513&fit=constrain"
            },
            {
                id: "img4",
                url: "https://images.asos-media.com/products/nike-air-jordan-1-baskets-mi-hautes-gris-blanc/14027155-2?$n_640w$&wid=513&fit=constrain"
            }
        ],
        description:"Baskets par Jordan Pour changer un peu Taille mi-haute Contrefort pour un meilleur maintien Fermeture avec lacets Logo virgule Nike et homme qui saute ... Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "N02",
        name: "Louis Vuitton LV Men",
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
        id: "N03",
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
                url: "https://i5.walmartimages.com/asr/5f18a046-a71f-439f-9a6c-7063ef86d680.7067b7c81224ebb4552a2da435bef17e.jpeg"
            },
            {
                id: "img3",
                url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8TEBUQEBIWFhIVFRUVFRYXFRIXFRYVFRcWFxcSFxcYHSggGBolGxUVIjEhJSkrLi4uFx8zODUtNygtLisBCgoKDg0OFRAQFyseHR0tKy0rLS0rLS0rKy0tLTgrLS0tNy0rLS4wLS0tKzMrKy0tKystNy0uNystLS0rLS03N//AABEIAMABBwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgj/xAA8EAACAQIDBQUFBQgDAQEAAAAAAQIDEQQFIQYSMUFRB2FxgZETIjKhwTNCUmLwFHKCkqKxstEj4fFDFf/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAJBEBAQEBAAECBQUAAAAAAAAAAAERAjESIQRBUZHhA6GxwfD/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAeZzSV2B6BhPGu/DT5l6GKi+7xLiavgJgigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFqvWUV38kB6q1VFXZrqtVyd36FJzbd2eTcjNoACisZtcHYyKeNfNXMUEwbKGJg+dvEvGnPUKklwZPSutsDBhjXzV/AyIYmD528SYavAAigAAAAAAAAAAAAAAAAAAAAAAAABZxFdRXf8ArUBiK6iu818pNu7Em27sobkxm0ABQAAAoVKAAAAAAHqFSS4OxkQxr5q5igmDZQxUHzt4l5M056jNrg7E9K62wMCGMkuOvyL8MZF8dCYayAUjJPg7lSKAAAAAAAAAAAAAAB4qzSV2B5r1VFd/I18m27s9Tm27s8m5MZqhQ9FCigKlAAAAAACgKlAAAAAAAAAAAAJ9C/DEzXO/iWCoGbDGLmi9CtF8GaxGspYjFSUJunuJ2cqb3HJLdd4uUZPW7Wq/C9Nbkw1KgajD4iVr2lHudvo2ZEcbLha75JcX+upnF1ngoipFAAAAABswK1TefdyM9kU7Qs2ngMBUxlGKnKEqS3Z33Wp1Iweq1T94sStvYHLcr7a8LKyxWFq03+KnKNWPi092XomS/K9vMpxFlTxdNSf3ajdKV+lqlr+RtEiAi01dO6fBrVPzKgeQVKAUBUoAAAAAAUAAAAAAAAAAAqUAFQDmvaT2kxwylhcHJSxGsZ1FZqk+DUeTmuvBd70Qbfb3tAoYBeyglVxUl7tO/uw/NVa4L8q1fdxJJ2cYurWy2jiK8t6tV9pOcrJXvVnupJcEo2S7kfKXt5zqb85OUm2222229W23q33vVn0h2b5rWjg8PR3U4KEbaNSs9ePPiSwjoYAMNAAAAAAQztJwdbF5fVwlOFnPcabvxhUjPlw+EmZSSXMsHyFmeR4rDu1ajJd9m4vzRrZRTPrfNaVFp70Iy8Uc/wA52Wyes3v03Rk/vRWn9P8AouxHEcvzDEUHfD1qlJ3v/wAdScLvvUXZ+ZK8t7U84paSqwrLpVpxb/mhuv1ubnMeyebTng68asel0/K8eHmiGZpsvjsO/wDloSsvvJb0fVFR0TLe2xcMTg2vzUaif9E0v8iVZb2o5PV0dd0n0qwnH+pJx+Z88tFN0D6vwGZ4eut6hWp1V1p1IT/xZlWPkWCs1KOklwa0a8GuBvcu2yzShZUsZWsuUpe0XpUuNH04DhWX9sOZQ0rU6NVfuypy9Yu39JJ8v7ZsJKyr4arTfNwcKi+e6xo6cCLYDtDymrwxUYPpUjOFv4pLd+ZIcJjaNVXpVIVF1hOMl8mUZBQqUAAAAAAAAAAHJe1PtF3N7A4KfvaxrVIvh1pwa4d8lryXNqyC52ndpCp72DwU/f1jUqxfDk6dNrnyc1w4LW7jxScm3d8SkpNu74/rTuRdwmGnUnGnTV5ydkv1yINlstkU8XiI0l8Cs6kukeni9V/4fUWymUxp04tKyilGK8Fb5EM7OtlIYelGP3nrOXNvm/8AR1GlFJJLRIzasewAZUAAAAACkkVAGtxmFbI/jcnb5EyZblSTA5zVymcXvRumuDTafqj0sxxUdKijVj0mtbfvKz9bk8q4GLMDEZPF8gIDj8rynE/b0HRm/vJXV/3o6+qI3mfZPvJzwVdTj0upLwutV5nS8XkPcamrk84S3oNxkuDi2n6oupjima7J47D39pRlZfej7y+RqKlSTW7LlZK61VuXgfQqzPEx0qxjVj+ZWl/Mvrc1+PynKcVpVpeym+bWl+6cfqkX2HC6koPgrOy68UkuN/F8OZZsdTzfsmlb2mEqqUeV2mvKSIPmuy2Nw/2lKVuq1RcRpLHqFacXvRk0+vP1DR4Ylwb3AbbZnR+zxVW3Rzc16Vd6K9CR4DtgzCFlUVKovzU91v8AipyS/pOdyPDNzv6yX/fdHacB20Un9thWu+lVjL+moof3JHge1DKalt6pUpN8qlKenjKClH5nznEyaZd4+c/f8X+T3fUeB2gwNb7HFUZvpGpBv0vc2R8tUop8VckeR42tTaVOrUglyjUnFeidhZx8rft+f6H0EDm+C2kxkY39q5fvKMvm1c1W1e3eO/Z5U4OEHL3XOEZKaT0e67+67c1qYVc7Ve0Rw38DgZ+/rGvWi/g60qb/ABdZcuC1vbiplYhGKEekjrvZlsg4L9orR/5JcF+GP4fHr/0aDs52RdWccTVj7q1pxf8Am/p69DvWRZakk7aLgS1WdlWD3UbRFIqxUw0AAAAAAAAAAAAABbrV4R1nJK+iu+L6LqW8XiVBdW+C+pp68pSd3dt8eGnk/Esmpa2FTMqd93dk++2nqeXUoydno++xCM72zweGqujL2k6kfiUFdQb1s7ySctb6dbGdkGe4fG1JTpPSm7RhKym2461d297Wbiv4uqNziVNSOtlUJcLPwNTjNnl0Nki9DEzXO/jr/wBmfSuojLKa1KW9SlKD6xbV/Hr5nv8A/UrL3cRSjUXNpbk/O3uv0Jeq8HpKPpqWZ4GjU+Fpk94IJj9nspxejSpzfKS9m79z+F+pEM97Jasfew87rkpfR8zq+N2bT4I1iwGKofYzkl+HjH+V6F0xwDNtmsZQdqlKVuqTaNNNNOzVmfTMsyi1u4rD6c5QWnnCX0ZqMfsRlmM1pbu/3e7NfwPUssR8+RMqmdDzfsmrQbdGd1+F8V66kVxmzGMou06b+Zuc2+EY1A3eWcUamFGS4xa8jb5bxJZZ5glVD4SMbU/ZvxX9yTUn7pHs7ws6q3aau214cRJb4VBsSSbYnZGeImqtWLVJO6i18Xe/y93Pw47/AGe2EvJVK2ttUvury5+Z1PIsnStGKt9O8WZ5GTs9k6SUUtFx/wBEupwSVkeMNQUIqKLxztaAAQAAAAAAAAAAALWIrKEXJ/8Ar6F00GbY2LbcpJU6abbbslZe9JvoiyalWsRiklKrVkopaybdkkcv227RqlnTwbcIt23+FSXevwL5+HA1O2W11XGVfY4dS9ipWhFJ705cN9patvkuXiaytsHmTh7SVLv3d+G//Lf5cToiP08RUnKUnVSbbbck5Sbfnqy/has4tyUmkvvXa1/Sv5lrEYScXbcamuKaakvFPge6eOsrTi1YCT5Rt1mNHT2vtILlUvKy8+XgSfDdqVVNOrhouH3nCclLxSldeV/M5Vi6qbtBe7bVLS9xShFrWVRvpeKj/a4H0LkOavHUPbxju03KUVTvdvd0vNq3H8K0tx3r6bicLR0aVl5eCvwRBexy7wVaD4Ktw5K9OGnyOgU6CSsloBdwuNasm7xbtrxVzaTpRfFGilC8lFc5IkBjpYwMRldOXI0uN2Wi9Y8SUgyqFuljaOl/aQX3ai3vSXxL1KLMcPL3a9N033rfh6pXXmiaOKfExMRltKfGKNTqzwmIpX2YwdVb6hCUX96FmvVGtqbDYTkmvMk1bZlRlv0JyhLrFtX8evmWZSxdP7WmqsfxR92fy0fyPVx8b+pz7azeUejsXhlyb8zLw+Q0YfDBG4o4ulN2jPdl+Cot2V+ivo/Jl+dJriu5d76I138X33PJJjAoYPVJLV8F+uRJcDhFTjbnzZ4y/B7q3pfE/kuiM08fXWtSAAMqAAAAAAAAAAAAAMXMq+5TbXHgvFnEO0jaWdSostwt5Peiqu7xnUdt2iuttG++y5M7PtDR38POKm4Ss92aSbhKztKz0duhyPs62U9hVrYvEWdSM5QpNu9rq8693zlvWu9fi6m+Urc7GbI08FTVSpaWKkvelxUE/wD5w+sufhoXszzBybhTfi/ojc/sVfEe7TTjS5zejl3Lov7mbQ2ShFcdRevoSIBiMFvK04qS6SSfpfh5GkxmzFCXDehx0XvRfipe8/5jrlXZ3oazE5C+hnVcfxGyVSOtPdn4Pdl5qVl6NmlzHLa9Nb0qc4pPi4tL14HZMTlLXI0O0dBxwtbe4ezn/bT52LOkxs+w+m/2GrN/exEreCp0vq2dEqOxDeyHDuGVUm+M5VZ+TqSS+UUSytM0j3gbOqm+Cu/p9TdIjVCo/aWRIMO9DHXlYugAigAAAADGxOAo1FacE/I8YTLaVP4U9OF23bwvwMwAAAAAAAAAAAAAAAAAAAB5nBNWauma6jkOGjNzUNW72bur9bcDZgCiRUAAeZQT4o9ADDr5fCXIgHargFRy2tUXPcj/ADTiv7XOlkC7a6Ep5W1FO3tqbn3R97V9190s8lZOx9D2WX4Wn0oUr+MoqT+bZn1qhDdmdu8HKlRoVJONdRhT3VCUlKUUo3Tino7X14Epw0XXluw+BP3pcn+VdV3m7cZZmV0W3vPmSCnGyLWGw6irF85tAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWMbhY1YOnK9mrOxfAEQwnZ/hYVN9N+CUVfxaRKsNh4QiowVki6AAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k="
            },
            {
                id: "img4",
                url: "https://m.media-amazon.com/images/I/41yLxa7R6KS._SL500_.jpg"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "N04",
        name: "Godet Bob Lacoste",
        uri: "https://cdna.lystit.com/photos/miinto/988b5469/lacoste-green-Lightweight-Reversible-Colourblock-Bob.jpeg",
        price: "11000",
        image: [
            {
                id: "img1",
                url: "https://cdna.lystit.com/photos/miinto/988b5469/lacoste-green-Lightweight-Reversible-Colourblock-Bob.jpeg"
            },
            {
                id: "img2",
                url: "https://medias-cache.citadium.com/fr/lacoste-bob-reversible-lacoste-x-walk-in-paris-multicolore/image/43/7/3018437.426.jpg"
            },
            {
                id: "img3",
                url: "https://medias-cache.citadium.com/fr/lacoste-bob-reversible-lacoste-x-walk-in-paris-multicolore/image/43/6/3018436.426.jpg"
            },
            {
                id: "img4",
                url: "https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-BE-Site/Sites-master/fr_BE/dw1121a8af/RK2056_HDE_20.jpg?imwidth=375&impolicy=product"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "N05",
        name: "Air Pod 3",
        uri: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1632861342000",
        price: "8000",
        image: [
            {
                id: "img1",
                url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1632861342000"
            },
            {
                id: "img2",
                url: "https://img.phonandroid.com/2021/09/Airpods-3-03.jpg"
            },
            {
                id: "img3",
                url: "https://i2.wp.com/iphoneislam.com/wp-content/uploads/2019/10/EGDk6FUXUAI9Ftc.jpg?resize=590%2C590&ssl=1"
            },
            {
                id: "img4",
                url: "https://cdn2.ettoday.net/images/5915/d5915690.jpg"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    }
];

const ELECTRO = [
    {
        id: "E01",
        name: "Combi Frigo Congélateur W7913T OX H",
        uri: "https://media.krefel.be/sys-master/products/8898085847070/570x450.11003326_02.jpg",
        price: "250000",
        image: [
            {
                id: "img1",
                url: "https://media.krefel.be/sys-master/products/8898085847070/570x450.11003326_02.jpg"
            },
            {
                id: "img2",
                url: "https://cdn.niwzi.be/images/ez_prod/2652/469109/hires/w84be-72-x-2--1603266102_1000x1000.jpg"
            },
            {
                id: "img3",
                url: "https://radiaelectro.ma/wp-content/uploads/2020/01/859991544640_1000x1000_view6.jpg"
            },
            {
                id: "img4",
                url: "https://img.archiexpo.fr/images_ae/photo-g/708-7916928.jpg"
            }
        ],
        description:"Baskets par Jordan Pour changer un peu Taille mi-haute Contrefort pour un meilleur maintien Fermeture avec lacets Logo virgule Nike et homme qui saute ... Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "E02",
        name: "Asus ROG Strix GL553VD-DS71 ",
        uri: "https://www.notebookcheck.net/uploads/tx_nbc2/Stock_photo.jpg",
        price: "10000",
        image: [
            {
                id: "img1",
                url: "https://www.notebookcheck.net/uploads/tx_nbc2/Stock_photo.jpg"
            },
            {
                id: "img2",
                url: "https://cdn.comparez-malin.fr/img/asus/2017/596cdd29f84140d4488b457e/asus-rog-g553vw-1.jpg"
            },
            {
                id: "img3",
                url: "https://m.media-amazon.com/images/I/41-Srg65GML._AC_.jpghttps://m.media-amazon.com/images/I/81RIr5YR3QL._AC_SL1500_.jpg"
            },
            {
                id: "img4",
                url: "https://m.media-amazon.com/images/I/81RIr5YR3QL._AC_SL1500_.jpg"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "E03",
        name: "BLENDER Moulinex LM420510 Blende",
        uri: "https://www.cdiscount.com/pdt2/3/9/4/1/700x700/auc8765302742394/rw/blender-moulinex-lm420510-blender-mixeur-eacute-l.jpg",
        price: "70000",
        image: [
            {
                id: "img1",
                url: "https://www.cdiscount.com/pdt2/3/9/4/1/700x700/auc8765302742394/rw/blender-moulinex-lm420510-blender-mixeur-eacute-l.jpg"
            },
            {
                id: "img2",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWVCppqT2RbJkoBNZagkFn9tRExQGYxAda53MVb3mPs9j4dO9G3olYmTHJ-9wNGBKgyOg&usqp=CAU"
            },
            {
                id: "img3",
                url: "https://www.moulinex.be/medias/?context=bWFzdGVyfGltYWdlc3w3MTE0MnxpbWFnZS9qcGVnfGltYWdlcy9oOGUvaDg0LzE0MjYyODQ4MzIzNjE0LmpwZ3w2ZjhkNmM3NDcwMWIwNjlkNDgwZDgzYTFjNDdlY2M3MWRiYjk4ZDFjNmVhZGZmOGY3YjgyMjBhNjg5YjUyODE1"
            },
            {
                id: "img4",
                url: "https://perfdiscount.com/wp-content/uploads/2020/12/8-12.jpg"
            }
        ],
        description:"Blender puissant de 600W avec système de verrouillage SmartLock pour un mixage quotidien sans effort Jusqu'à 3 minutes de mixage continu quelle que . You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "E04",
        name: "Verre à vin rouge ",
        uri: "https://www.degrenne.fr/media/catalog/product/cache/3cad9a4c0382b605775980a9bb3efcef/1/8/184548_muse_verre_a_vin_rouge_01.jpg",
        price: "11000",
        image: [
            {
                id: "img1",
                url: "https://www.degrenne.fr/media/catalog/product/cache/3cad9a4c0382b605775980a9bb3efcef/1/8/184548_muse_verre_a_vin_rouge_01.jpg"
            },
            {
                id: "img2",
                url: "https://www.parlapapa.com/artdelatable/1676-large_default/4-verres-de-cristal-a-vin-rouge-authentis-01-spiegelau.jpg"
            },
            {
                id: "img3",
                url: "https://www.doyondespres.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/5/l5635_arc.jpg"
            },
            {
                id: "img4",
                url: "https://ml-locations.be/wp-content/uploads/2018/06/location-verre-vin-cabernet45cl.jpg"
            }
        ],
        description:"Verre à vin Cabernet 45 cl. NB : commandes par rack de 25 verres. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "E05",
        name: "Assiette en bois de noyer, artisanat",
        uri: "https://www.verger-de-barnabe.com/wp-content/uploads/2019/06/Assiettes.jpg",
        price: "8000",
        image: [
            {
                id: "img1",
                url: "https://www.verger-de-barnabe.com/wp-content/uploads/2019/06/Assiettes.jpg"
            },
            {
                id: "img2",
                url: "https://m.media-amazon.com/images/I/81+K9Q9m5HL._AC_SX425_.jpg"
            },
            {
                id: "img3",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcza5dSo7cVtsKelUck5s3g3_eVURqT6UYyqRdeVp8Wtnfjnx3fK02bTu4UaHztOUMjWg&usqp=CAU"
            },
            {
                id: "img4",
                url: "https://m.media-amazon.com/images/I/6126FhZb9eL._AC_SY450_.jpg"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    }
];

const HomeScreen = props => {

    const showOneArticle = (info) => {
        props.navigation.navigate('Article',{data: info})
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
                        renderItem={({item}) => <TouchableOpacity onPress={ () => showOneArticle(item) } style={styles.articleElementStyle} >
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
                        data={NOTES}
                        keyExtractor={ item => item.id }
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{margin: 5, marginBottom: 2,}}
                        contentContainerStyle={{flexDirection: 'row', alignItems: 'center'}}
                        renderItem={({item}) => <TouchableOpacity onPress={ () => showOneArticle(item) } style={styles.articleElementStyle} >
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
                        data={ ELECTRO }
                        keyExtractor={ item => item.id }
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{margin: 5, marginBottom: 2,}}
                        contentContainerStyle={{flexDirection: 'row', alignItems: 'center'}}
                        renderItem={({item}) => <TouchableOpacity onPress={ () => showOneArticle(item) } style={styles.articleElementStyle} >
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
                        renderItem={({item}) => <TouchableOpacity onPress={ () => showOneArticle(item) } style={styles.articleElementStyle} >
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
                        renderItem={({item}) => <TouchableOpacity onPress={ () => showOneArticle(item) } style={styles.articleElementStyle} >
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
                        renderItem={({item}) => <TouchableOpacity onPress={ () => showOneArticle(item) } style={styles.articleElementStyle} >
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