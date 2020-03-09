import axios from 'axios';
import { errorMessage } from './messages';

import
{
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

// CHECK TOKEN & LOAD USER

export const loadUser = () => (dispatch, getState) =>
{
    // user loading
    dispatch({
        type: USER_LOADING
    })

    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res =>
        {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        }).catch(err =>
        {
            dispatch(errorMessage(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })
}

// REGISTER USER

export const register = ({ username, email, password }) => dispatch =>
{
    // Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    // Request Body
    const body = JSON.stringify({ username, email, password })
    axios.post('/api/auth/register', body, config)
        .then(res =>
        {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        }).catch(err =>
        {
            dispatch(errorMessage(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

// LOGIN USER

export const login = (username, password) => dispatch =>
{
    // Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    // Request Body
    const body = JSON.stringify({ username, password })
    axios.post('/api/auth/login', body, config)
        .then(res =>
        {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        }).catch(err =>
        {
            dispatch(errorMessage(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

//LOGOUT USER

export const logout = () => (dispatch, getState) =>
{
    axios.post('/api/auth/logout', null, tokenConfig(getState))
        .then(res =>
        {
            dispatch({
                type: LOGOUT_SUCCESS,
            })
        }).catch(err =>
        {
            dispatch(errorMessage(err.response.data, err.response.status));
        })
}


//Setup config with token - helper function
export const tokenConfig = getState =>
{
    //  get token from the state
    const token = getState().accountReducer.token;

    // Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    // if token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
}