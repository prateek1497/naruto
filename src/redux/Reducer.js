import { GET_RESULTS , LOAD_MORE } from './actions/actionsList'

const initialState = {
    data : [],
    queryValue : ''
};

const reducer = (state = initialState, action) =>{
    const newState = {
        data : [],
        queryValue : ''
    };
    if(action.type === GET_RESULTS){
        
        newState.data = [...action.payload.data],
        newState.queryValue = action.payload.queryValue
    }
    else if(action.type === LOAD_MORE){
        newState.data = [...state,...action.payload.data],
        newState.queryValue = action.payload.queryValue
    }
//    console.log('inside the reducer' ,state)
    return newState
}

export default reducer

