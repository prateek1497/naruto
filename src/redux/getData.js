import React from 'react'

function getData(query, limit=16) {
    let data = [];
    let url = 'https://api.jikan.moe/v3/search/anime';
    url = `${url}?q=${query}&limit=${limit}`

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
        console.log('responseData' , responseData)
        return responseData.results
    })
    .catch(({status, statusText})=>{
        console.log(status)
        console.log(statusText)
    })
    // let da = {
    //     request_hash: 1,
    //     results: 
    //     [{image_url: 	"https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6"},
    //     {image_url: 	"https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6"},
    //     {image_url: 	"https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6"},
    //     {image_url: 	"https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6"},
    //     {image_url: 	"https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6"},
    //     {image_url: 	"https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6"}
    //     ]
    // }
    // data = da.results

    // return data;

}

export default getData
