import { GET_RESULTS, LOAD_MORE} from './actionsList'
import getData from '../getData'
const getResults = (query) => {

    return function(dispatch){
        return getData(query).then((data)=>{
            dispatch({
                type: GET_RESULTS,
                payload: {
                    data: data,
                    queryValue: query
                }
            })
        })
    }


    // let data = []
    // data = getData(query)
    // setTimeout(()=>{
    //     // console.log('INSIDE GET RESULTS', data.value)
    //     return {
    //         type: GET_RESULTS,
    //         payload: data.value
    //     }
    // },3000)
    
   

    
}

export const loadMore = (query, limit) => {
      return function(dispatch){
        return getData(query, limit).then((data)=>{
            dispatch({
                type: LOAD_MORE,
                payload: {
                    data: data,
                    queryValue: query
                }
            })
        })
    }
}


export default getResults;