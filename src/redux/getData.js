import React from 'react'

function getData(query, limit=16, page=1) {
    let data = [];
    let url = 'https://api.jikan.moe/v3/search/anime';
    url = `${url}?q=${query}&limit=${limit}&page=${page}`

    return fetch(url)
    .then((response)=> { 
        if(response.ok){
            return response.json();
        }
        else{
            return Promise.reject({
                status: response.status,
                statusText: response.statusText
            })
        }
        
    })
    .then((responseData) => {
        return responseData.results
    })
    .catch(({status, statusText})=>{
        console.log(status)
        console.log(statusText)
    })
   

}

export default getData
