import { GET_RESULTS, LOAD_MORE} from './actionsList'
import getData from '../getData'
const getResults = (query, limit, page) => {

    return function(dispatch){
        return getData(query, limit, page).then((data)=>{
            dispatch({
                type: GET_RESULTS,
                payload: {
                    data: data,
                    queryValue: query
                }
            })
        })
    }
    
}

export const loadMore = (query, limit, page) => {
      return function(dispatch){
        return getData(query, limit, page).then((data)=>{
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