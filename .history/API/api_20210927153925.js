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
    // .then(res => res)
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

export const categorieProduct = (id) => {
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