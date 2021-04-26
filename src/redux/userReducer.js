/* 4 parts of the reducer file: initial state, action types, action creators, reducer function */


// INITIAL STATE
const initialState = {
    user: {},
    isLoggedIn: false
    
}

// ACTION TYPES
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';



// ACTION CREATORS

export function loginUser(user) {
    return {
        type: LOGIN_USER,
        payload:{
             user,
             isLoggedIn: true
        }
        
    }
}
export function logoutUser() {
    return {
        type: LOGOUT_USER,
    }
}



// REDUCER dfault function 
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload.user,
                isLoggedIn: action.payload.isloggedIn
            }
        case LOGOUT_USER:
            return initialState;
        default: return state;
    }
}