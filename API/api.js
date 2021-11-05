/* eslint-disable prettier/prettier */
// API list


export const url = 'https://afrilink.herokuapp.com';

// Retrieve list of categorie

export const listOfCategories = () => {
    return fetch(`${url}/category`,{
        method: 'GET',
        headers:{
            Accept:'application/json',
            'Content-type': 'application/json',
        },
    })
    .then((response) => response.json())
    .catch((error)=> console.log('error'));
};

export const listOfProduct = () => {
    return fetch(`${url}/product`,{
        method: 'GET',
        headers:{
            Accept:'application/json',
            'Content-type': 'application/json',
        },
    })
    .then((response) => response.json())
    // .then(res => res)
    .catch((error)=> console.log('error'));
};

export const listOfProductVedette = () => {
    return fetch(`${url}/product/vedette`,{
        method: 'GET',
        headers:{
            Accept:'application/json',
            'Content-type': 'application/json',
        },
    })
    .then((response) => response.json())
    // .then(res => res)
    .catch((error)=> console.log('error'));
};

export const categorieProduct = (id) => {
    return fetch(`${url}/product/category/${id}`,{
        method: 'GET',
        headers:{
            Accept:'application/json',
            'Content-type': 'application/json',
        },
    })
    .then((response) => response.json())
    // .then(res => res)
    .catch((error)=> console.log('error'));
};

export const productById = (id) => {
    return fetch(`${url}/product/${id}`,{
        method: 'GET',
        headers:{
            Accept:'application/json',
            'Content-type': 'application/json',
        },
    })
    .then((response) => response.json())
    // .then(res => res)
    .catch((error)=> console.log('error'));
};

export const ListProductPanier = () => {
    return fetch(`${url}/product/`,{
        method: 'GET',
        headers:{
            Accept:'application/json',
            'Content-type': 'application/json',
        },
    })
    .then((response) => response.json())
    // .then(res => res)
    .catch((error)=> console.log('error'));
};

export const ListMessage = () => {
    return fetch(`${url}/message/`,{
        method: 'GET',
        headers:{
            Accept:'application/json',
            'Content-type': 'application/json',
        },
    })
    .then((response) => response.json())
    // .then(res => res)
    .catch((error)=> console.log('error'));
};

export const ListNotification = () => {
    return fetch(`${url}/notification/`,{
        method: 'GET',
        headers:{
            Accept:'application/json',
            'Content-type': 'application/json',
        },
    })
    .then((response) => response.json())
    // .then(res => res)
    .catch((error)=> console.log('error'));
};

export const AddToPanier=(user_id,qte,tab_product)=>{
    return fetch(`${url}/panier/`,{
        method: 'POST',
        headers:{
            Accept:'application/json',
            'Content-type': 'application/json',
        },
        body:{
            'user_id': user_id,
            'qte': qte,
            'Tab_product': tab_product,
        }
    })
    .then((response) => response.json())
    // .then(res => res)
    .catch((error)=> console.log('error'));
};

export const AddToFavory=(user_id,favory_product)=>{
    return fetch(`${url}/favory/`,{
        method: 'POST',
        headers:{
            Accept:'application/json',
            'Content-type': 'application/json',
        },
        body:{
            'user_id': user_id,
            'favory_product': favory_product,
        }
    })
    .then((response) => response.json())
    // .then(res => res)
    .catch((error)=> console.log('error'));
};

export const ListOfPanier =()=> {
    return fetch(`${url}/panier/`,{
        method: 'GET',
        headers:{
            Accept:'application/json',
            'Content-type': 'application/json',
        },
    })
    .then((response) => response.json())
    // .then(res => res)
    .catch((error)=> console.log('error'));
};

export const ListofFavory = () => {
    return fetch(`${url}/favory/`,{
        method: 'GET',
        headers:{
            Accept:'application/json',
            'Content-type': 'application/json',
        },
    })
    .then((response) => response.json())
    // .then(res => res)
    .catch((error)=> console.log('error'));
};

export const ListOfActuality = () => {
    return fetch(`${url}/actuality/`,{
        method: 'GET',
        headers:{
            Accept:'application/json',
            'Content-type': 'application/json',
        },
    })
    .then((response) => response.json())
    // .then(res => res)
    .catch((error)=> console.log('error'));
};