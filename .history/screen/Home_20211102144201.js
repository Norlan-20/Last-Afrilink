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

const BEAUTY = [
    {
        id: "B01",
        name: "Clinic Clear- Lait De Beauté Éclaircissa",
        uri: "https://www.ebcosmetique.com/606-large_default/clinic-clear-lait-de-beaute-eclaircissant-.jpg",
        price: "5400",
        image: [
            {
                id: "img1",
                url: "https://www.ebcosmetique.com/606-large_default/clinic-clear-lait-de-beaute-eclaircissant-.jpg"
            },
            {
                id: "img2",
                url: "https://www.ts-sitemarket.com/images/Image/Gamme-eclaircissant-Protecteur-Et-Unifiant-Clinic-Clear.jpg"
            },
            {
                id: "img3",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0F_NGAJ_WLYNeOGkGr2N0lhdZEa4m2uj9MxcwAIYsVGoaAHrRxXBWQ6eTmBo7bT9fxHc&usqp=CAU"
            },
            {
                id: "img4",
                url: "https://www.ethnilink.fr/images/Image/clinic-clear-creme-corps-eclaircissante-6186000199075.jpg"
            }
        ],
        description:"Baskets par Jordan Pour changer un peu Taille mi-haute Contrefort pour un meilleur maintien Fermeture avec lacets Logo virgule Nike et homme qui saute ... Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "B02",
        name: "Beurre de Carité ",
        uri: "http://www.commodafrica.com/sites/commodafrica.com/files/_beurre_karite.jpg",
        price: "10000",
        image: [
            {
                id: "img1",
                url: "http://www.commodafrica.com/sites/commodafrica.com/files/_beurre_karite.jpg"
            },
            {
                id: "img2",
                url: "https://locavor.fr/data/produits/1/791/1.jpg"
            },
            {
                id: "img3",
                url: "https://i1.wp.com/lunivertecolo.ca/wp-content/uploads/2019/05/Beurre-de-karite-2-WM.jpg"
            },
            {
                id: "img4",
                url: "https://www.ricaud.com/medias/api/airtable/fiches/c189.jpg"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "B03",
        name: "Crayon De Beauté",
        uri: "https://static.beaute-test.com/prod/img89706.jpg",
        price: "70000",
        image: [
            {
                id: "img1",
                url: "https://static.beaute-test.com/prod/img89706.jpg"
            },
            {
                id: "img2",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEx1c0z_xmcdcp-_rvNsFHi7I9LzbomahXsYlwA1zWEHS4FTm8LzcaL1RUbSxz_GsxqS4&usqp=CAU"
            },
            {
                id: "img3",
                url: "https://www.eka-beauty.com/wp-content/uploads/2021/03/Amuse-Bouche-8-300x300.jpg"
            },
            {
                id: "img4",
                url: "https://www.peggysage.com/media/catalog/product/cache/1/image/6b22e9cd373c1ec5032958ee18ff26b1/1/3/130217.png"
            }
        ],
        description:"Blender puissant de 600W avec système de verrouillage SmartLock pour un mixage quotidien sans effort Jusqu'à 3 minutes de mixage continu quelle que . You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "B04",
        name: "Courte Perruques Frisées ",
        uri: "https://www.cdiscount.com/pdt2/1/8/4/1/700x700/auc3570148964184/rw/courtes-perruques-frisees-bresilien-coiffe-vierge.jpg",
        price: "11000",
        image: [
            {
                id: "img1",
                url: "https://www.cdiscount.com/pdt2/1/8/4/1/700x700/auc3570148964184/rw/courtes-perruques-frisees-bresilien-coiffe-vierge.jpg"
            },
            {
                id: "img2",
                url: "https://www.cdiscount.com/pdt2/3/3/6/1/700x700/auc6112315146336/rw/perruque-courte-bouclee-8-pouces-de-cheveux-humai.jpg"
            },
            {
                id: "img3",
                url: "https://ae01.alicdn.com/kf/Ha68e8d764d744efbad16246415f0a7edE/Perruque-br-silienne-courte-cheveux-humains-boucl-s-pour-les-femmes-noires-SVT-13x4-avant-de.jpg"
            },
            {
                id: "img4",
                url: "https://www.dhresource.com/0x0/f2/albu/g9/M01/F6/5B/rBVaVVy-2ZqAbF9OAAIUsGBa0oQ781.jpg/13x6-short-curly-wig-lace-front-human-hair.jpg"
            }
        ],
        description:"Verre à vin Cabernet 45 cl. NB : commandes par rack de 25 verres. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "B05",
        name: "Faux cils",
        uri: "https://gaskiyani.info/wp-content/uploads/2020/11/Faux-cils-700x560.jpg",
        price: "8000",
        image: [
            {
                id: "img1",
                url: "https://gaskiyani.info/wp-content/uploads/2020/11/Faux-cils-700x560.jpg"
            },
            {
                id: "img2",
                url: "https://juditha8.cabanova.com/files/emnv-56u0yvhtknkn-6vi0t.jpg"
            },
            {
                id: "img3",
                url: "https://d397xw3titc834.cloudfront.net/images/width/575/6/bd/6bd1d0af79a8fc26db72f075829fa9f3.jpg"
            },
            {
                id: "img4",
                url: "https://www.pembeauty.com/61-large_default/faux-cils-mom.jpg"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    }
];

const TRANSPORT = [
    {
        id: "N01",
        name: "Bugatti",
        uri: "https://upload.wikimedia.org/wikipedia/commons/1/16/Bugatti_Divo%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0029%29.jpg",
        price: "25000",
        image: [
            {
                id: "img1",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqE3X3tzjREkPFt7Lnbw-SMJfK27-_VHK20a-q2kSdGVpXoKBcn9qtyYH6yVyKis-mB9k&usqp=CAU"
            },
            {
                id: "img2",
                url: "https://cdn-s-www.leprogres.fr/images/2426D93E-96CA-4B9F-9C3C-3F4ABFCF4F0B/MF_contenu/decouvrez-le-top-10-des-voitures-les-plus-cheres-du-monde-1614790182.jpg"
            },
            {
                id: "img3",
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Bugatti_Divo%2C_Paris_Motor_Show_2018%2C_IMG_0706.jpg/1200px-Bugatti_Divo%2C_Paris_Motor_Show_2018%2C_IMG_0706.jpg"
            },
            {
                id: "img4",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr6jwNLhwUUtP8VfZHBHQ9UBShFHofbtiAS0r5Hp8xci2ae9M5DMc-RNt9aipTOpiL1r4&usqp=CAU"
            }
        ],
        description:"Baskets par Jordan Pour changer un peu Taille mi-haute Contrefort pour un meilleur maintien Fermeture avec lacets Logo virgule Nike et homme qui saute ... Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "N02",
        name: "Lamborghini",
        uri: "https://sf2.auto-moto.com/wp-content/uploads/sites/9/2016/03/lamborghini-veneno-2013-1.jpg",
        price: "10000",
        image: [
            {
                id: "img1",
                url: "https://i.gaw.to/vehicles/photos/09/34/093492_2019_lamborghini_Aventador.jpg?1024x640"
            },
            {
                id: "img2",
                url: "https://i.gaw.to/content/photos/45/96/459613-lamborghini-svj-roadster-2020-la-creme-de-la-creme.jpeg"
            },
            {
                id: "img3",
                url: "https://i2.wp.com/blog.fast-auto.fr/wp-content/uploads/2012/12/Lamborghini-Aventador1.jpg?ssl=1"
            },
            {
                id: "img4",
                url: "https://sf2.auto-moto.com/wp-content/uploads/sites/9/2016/03/lamborghini-veneno-2013-1.jpg"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "N03",
        name: "Harley Davidson",
        uri: "https://i5.walmartimages.com/asr/cb95a164-26a4-4428-8bbb-823420a19b9d.fa5d5e818c6be47fb1f0cd326beb11d5.jpeg",
        price: "700000",
        image: [
            {
                id: "img1",
                url: "https://www.harley-davidson.com/content/dam/h-d/images/content-images/hero-cards/2-up/2021-street-bob-hero-card-2-up.jpg?impolicy=myresize&rw=650"
            },
            {
                id: "img2",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxZKcFsmbTs5WW0HRr20O_Nj13CsM9PhRkLZLfAMlYP2XkY-bUHX3Eu_sKgaAJlG_cCg&usqp=CAU"
            },
            {
                id: "img3",
                url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Harley_Davidson_%281%29.jpg"
            },
            {
                id: "img4",
                url: "https://m.media-amazon.com/images/I/513MaaN6j9L._AC_.jpg"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "N04",
        name: "Quad",
        uri: "https://cloud.leparking-moto.fr/2021/04/19/04/10/ktm-enduro-r-e-atv-ktm-640-lc4-explorer-prestige-racing-quad-atv-tuv-2023-smc_150385575.jpg",
        price: "11000",
        image: [
            {
                id: "img1",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuu5_KvwQZHyYzBp8N2PR59aRcg7DkbYQbDw&usqp=CAU"
            },
            {
                id: "img2",
                url: "https://www.mikadoracing.com/annonces/images/2021_10/719f223cb71491aa5b694e19fcc51295.jpeg"
            },
            {
                id: "img3",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwAg_0IFghWY_PjaLj6anjIu_FcEJqSs5K1g&usqp=CAU"
            },
            {
                id: "img4",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPRuTkoSFuuHeYk5-R13wxhj09rBH0efys_A&usqp=CAU"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "N05",
        name: "Yoat",
        uri: "https://media.gqmagazine.fr/photos/5f524256bd52a37161943b00/16:9/w_2560%2Cc_limit/loffit-avanguardia-swan-yacht-de-lazzarini-el-yate-mas-espectacular-del-mundo-09.png",
        price: "8000",
        image: [
            {
                id: "img1",
                url: "https://img.over-blog-kiwi.com/1/04/49/45/20141223/ob_f3d34b_jfa-yachts-115-power-catamaran-co.jpg"
            },
            {
                id: "img2",
                url: "https://img.over-blog-kiwi.com/1/04/49/45/20141109/ob_c74620_wally-118-1.jpg"
            },
            {
                id: "img3",
                url: "https://img.over-blog-kiwi.com/1/04/49/45/20141109/ob_c74620_wally-118-1.jpg"
            },
            {
                id: "img4",
                url: "https://www.usinenouvelle.com/mediatheque/0/4/2/000792240_896x598_c.jpg"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    }
];
const AGROALIMENTAIRE = [
    {
        id: "N01",
        name: "Tomate",
        uri: "https://s.rfi.fr/media/display/f57548c2-0da4-11ea-b6a2-005056a9aa4d/tomates_apilados_2_0.jpg",
        price: "25000",
        image: [
            {
                id: "img1",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg5RSxXhzYRtQV90IBEJE39nf_UKgMCNnsf0byJN4x7aii8E_mSQ60yPra1iLpKV3APeU&usqp=CAU"
            },
            {
                id: "img2",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRusrFK6sXPD-Qs4Ww7ppGotRFTv9E3CaqzXw&usqp=CAU"
            },
            {
                id: "img3",
                url: "https://mobile-img.lpcdn.ca/lpca/924x/r3996/79bde926-d1e6-11ea-b8ad-02fe89184577.jpg"
            },
            {
                id: "img4",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0d8yGrHvCEtr1pZMu1qQqdGVxNPsqQt3bEzLrrvLud2aLzY6OydWOel4edCo8iwNGnuI&usqp=CAU"
            }
        ],
        description:"Baskets par Jordan Pour changer un peu Taille mi-haute Contrefort pour un meilleur maintien Fermeture avec lacets Logo virgule Nike et homme qui saute ... Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "N02",
        name: "Piment",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0diGKTBjyFVGsPtStBgfd5mVIyEjgCsJSWw&usqp=CAU",
        price: "10000",
        image: [
            {
                id: "img1",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRonRQ_j0xZ1Obdbu5Tj10aovM3zJ47yGEgtQ&usqp=CAU"
            },
            {
                id: "img2",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vyiO9sAPqx_eflLJY4kVxWYHXXNWANhLCRcEyaeJnhAR5uRpSmfYe1aKkAauMWUPeMs&usqp=CAU"
            },
            {
                id: "img3",
                url: "https://www.altheaprovence.com/blog/wp-content/uploads/2020/01/bienfaits-du-piment-2.jpg"
            },
            {
                id: "img4",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG-TLHUlw1C9avue4G_3MdJdelzYT4JkOtZA&usqp=CAU"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "N03",
        name: "Champignon",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXXQPIdGIphMA99aZCTmHCN4I9KWCmUoI2HgAPVLFC8oKYkFeog-F6qJktEng7yNGwxQc&usqp=CAU",
        price: "700000",
        image: [
            {
                id: "img1",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEZd6--xfWvmwbEDNqPiMQuz2Y0va2QXqMg&usqp=CAU"
            },
            {
                id: "img2",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98rlvkIPJwkMwQRWJ4eGwzcvr7Tenz1wY1g&usqp=CAU"
            },
            {
                id: "img3",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_re8x0Xa0D6ALpB0jd9IsMdQKuv_WBz-5Q&usqp=CAU"
            },
            {
                id: "img4",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU-31mblcoBYdf7YFRJjQwk8qrO2w6m_xMaw&usqp=CAU"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "N04",
        name: "Oignon",
        uri: "https://static4.depositphotos.com/1020804/383/i/600/depositphotos_3834577-stock-photo-fresh-bulbs-of-onion-on.jpg",
        price: "11000",
        image: [
            {
                id: "img1",
                url: "data:image/jpeg;base64,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"
            },
            {
                id: "img2",
                url: "https://jardinsdiversibio.com/wp-content/uploads/2018/02/oignons-verts_small.jpg"
            },
            {
                id: "img3",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDCuiwwqZcwMD2_uL-NswMgu0cirukd5Dew&usqp=CAU"
            },
            {
                id: "img4",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ65QQ9DKAKiSYNKfGXL7xnxom6ejh4qwR1O8BWqqobPZuaALcpmVUi8Euiikr7EE_12I&usqp=CAU"
            }
        ],
        description:"Long Battery Life Up to 70 hours of music playback when fully charged with full-charge time: 3-4 hours.; 12 hours FM Radio playback. You can charge it . Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store.Actions are JavaScript objects that represent payloads of information that send data from your application to your Redux store."
    },
    {
        id: "N05",
        name: "Gingembre",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdSedJ9BEmMmkxP-VRI9FrtiY6NM_aTFJ8KA&usqp=CAU",
        price: "8000",
        image: [
            {
                id: "img1",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdSedJ9BEmMmkxP-VRI9FrtiY6NM_aTFJ8KA&usqp=CAU"
            },
            {
                id: "img2",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRGl--zL5J1SP9O_ZaZ1FQKPSo5mkA07SvwrZyyViG6VL6JIRV1MJnNT7ruE3kyJh63nk&usqp=CAU"
            },
            {
                id: "img3",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRGl--zL5J1SP9O_ZaZ1FQKPSo5mkA07SvwrZyyViG6VL6JIRV1MJnNT7ruE3kyJh63nk&usqp=CAU"
            },
            {
                id: "img4",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPYUuO5J0r2QTen2gIP2j--ae0FH6nK9VqZQ5R0jGXzyoDSsCVFjQ8ajhxMAChAqGealI&usqp=CAU"
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
                        data={BEAUTY}
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
                        <Text style={styles.catTitle2}>TRANSPORT</Text>
                        <TouchableOpacity><Text style={styles.seeAll}>Voir Plus</Text></TouchableOpacity>
                    </View>
                    <FlatList
                        data={TRANSPORT}
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
                        <Text style={styles.catTitle2}>AGROALIMENTAIRE</Text>
                        <TouchableOpacity><Text style={styles.seeAll}>Voir Plus</Text></TouchableOpacity>
                    </View>
                    <FlatList
                        data={AGROALIMENTAIRE}
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