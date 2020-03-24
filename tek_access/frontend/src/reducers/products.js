import { GET_PRODUCTS_SUCCESS, LOADING } from '../actions/types.js';

const initialState = {
    products: [],
    loading: true
}

export default function (state = initialState, action)
{
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        case LOADING:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
} 