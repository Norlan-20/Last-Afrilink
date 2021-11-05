/* eslint-disable prettier/prettier */
// API list


const url = 'https://afrilink.herokuapp.com';

// Retrieve list of categorie

const listOfCategories = () => {
    return fetch(`${url}/categorie`,{
        method: 'GET',
        headers:{
            'Content-type': 'application/json'
        }
    }).then(

    ).catch()
}
