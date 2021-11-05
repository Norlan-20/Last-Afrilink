/* eslint-disable prettier/prettier */
// API list


const url = 'https://afrilink.herokuapp.com';

// Retrieve list of categorie

export const listOfCategories = () => {
    return fetch(`${url}/category`,{
        method: 'GET',
        headers:{
            'Content-type': 'application/json'
        },
    }).then(
        (response) => console.log(response)
    ).catch((error)=> console.log('error'));
};
