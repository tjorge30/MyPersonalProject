/* 4 parts of the reducer file: initial state, action types, action creators, reducer function */

// INITIAL STATE
const initialState = {
    email: '',
    isLoggedIn: false
}

// ACTION TYPES
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

// ACTION CREATORS
export function loginUser(emailStr) {
    return {
        type: LOGIN_USER,
        payload: emailStr
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    }
}

// REDUCER
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                email: action.payload,
                isLoggedIn: true
            }
        case LOGOUT_USER:
            return initialState;
        default: return state;
    }
}