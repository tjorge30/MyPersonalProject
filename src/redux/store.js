import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';
import moonSignReducer from './moonSignReducer';

const rootReducer = combineReducers({
    userReducer, 
    moonSignReducer
})

export default createStore(rootReducer);
