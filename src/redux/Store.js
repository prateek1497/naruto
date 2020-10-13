import reducer from './Reducer'
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const redux = require('redux')
const createStore = redux.createStore

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(()=> {console.log('stre state',store.getState())})

export default store;
