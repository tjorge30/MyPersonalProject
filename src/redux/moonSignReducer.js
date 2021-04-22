/* 4 parts of the reducer file: initial state, action types, action creators, reducer function */

import axios from "axios";

// INITIAL STATE
const initialState = {
    moonSigns: []
}

// ACTION TYPES
const SHOW_SIGN_INFO = 'SHOW_SIGN_INFO';
const UPDATE_READING = 'UPDATE_READING';

// ACTION CREATORS
export function showSignInfo() {
    return {
        type: SHOW_SIGN_INFO,
        payload: axios.get('/api/sign')
    }
}

export function updateReading(text) {
    return {
        type: UPDATE_READING,
        payload: text
    }
}

// REDUCER
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SHOW_SIGN_INFO:
            return {
                ...state,
                moonSign: action.payload.data,
               
            }
        case UPDATE_READING:
            return initialState;
        default: return state;
    }
}