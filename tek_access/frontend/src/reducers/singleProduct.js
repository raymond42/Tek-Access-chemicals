import { LOADING, GET_SINGLE_PRODUCT } from '../actions/types.js';

const initialState = {
    product: {},
    loading: true
}

export default function (state = initialState, action)
{
    switch (action.type) {
        case GET_SINGLE_PRODUCT:
            return {
                ...state,
                product: action.payload,
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