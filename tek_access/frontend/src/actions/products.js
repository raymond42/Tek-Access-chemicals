import axios from 'axios';
import
{
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    LOADING,
    GET_SINGLE_PRODUCT
} from './types'

// Get Products
export const getProducts = () => async dispatch =>
{
    await axios.get('/api/products')
        .then(res =>
        {
            dispatch({
                type: LOADING,
                payload: true
            });

            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

// Get Kits
export const getKits = () => async dispatch =>
{
    await axios.get('/api/kits')
        .then(res =>
        {
            dispatch({
                type: LOADING,
                payload: true
            });

            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

// get single product

export const getSingleProduct = id => async dispatch =>
{

    await axios.get(`/api/product/${id}`)
        .then(res =>
        {
            dispatch({
                type: LOADING,
                payload: true
            });

            dispatch({
                type: GET_SINGLE_PRODUCT,
                payload: res.data
            })
        })
}

// get single kit

export const getSingleKit = id => async dispatch =>
{

    await axios.get(`/api/kit/${id}`)
        .then(res =>
        {
            dispatch({
                type: LOADING,
                payload: true
            });

            dispatch({
                type: GET_SINGLE_PRODUCT,
                payload: res.data
            })
        })
}