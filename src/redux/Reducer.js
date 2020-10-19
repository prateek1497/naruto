import { GET_RESULTS , LOAD_MORE } from './actions/actionsList'

const initialState = {
    data : [],
    queryValue : '',
    pageCount: 0
};

const reducer = (state = initialState, action) =>{
    const newState = {
        data : [],
        queryValue : '',
        pageCount: 0,
    };
    if(action.type === GET_RESULTS){
        
        newState.data = [...action.payload.data],
        newState.queryValue = action.payload.queryValue
        newState.pageCount = 1
    }
    else if(action.type === LOAD_MORE){
        newState.data = [...state,...action.payload.data],
        newState.queryValue = action.payload.queryValue,
        newState.pageCount = state.pageCount+1
    }
    return newState
}

export default reducer

