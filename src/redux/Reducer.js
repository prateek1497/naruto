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
        let new_data = action.payload.data.slice(state.pageCount*16,(state.pageCount+1)*16)
        newState.data = [...state.data, ...new_data],
        newState.queryValue = action.payload.queryValue,
        newState.pageCount = state.pageCount+1
    }
    return newState
}

export default reducer

