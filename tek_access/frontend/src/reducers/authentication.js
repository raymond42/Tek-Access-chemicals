import { GET_AUTH, DELETE_AUTH, ADD_USER, ADD_USER_FAIL } from '../actions/types.js';

const initialState = {
    auth: []
}

export default function (state = initialState, action)
{
    switch (action.type) {
        case GET_AUTH:
            return {
                ...state,
                auth: action.payload
            }
        case DELETE_AUTH:
            return {
                ...state,
                auth: state.auth.filter(
                    user => user.id !== action.payload)
            }
        case ADD_USER:
            return {
                ...state,
                auth: [...state.auth, action.payload]
            }
        case ADD_USER_FAIL:
            return {
                ...state,
                auth: action.payload
            }
        default:
            return state;
    }
} 