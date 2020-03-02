import axios from 'axios';
import { successMessage } from './messages'
import { tokenConfig } from './auth';
import { GET_AUTH, DELETE_AUTH, ADD_USER, GET_ERRORS } from './types'

// Get Users
export const getAuth = () => (dispatch, getState) =>
{
    axios.get('/api/users', tokenConfig(getState))
        .then(res =>
        {
            dispatch({
                type: GET_AUTH,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

// Delete Users
export const deleteAuth = (id) => (dispatch, getState) =>
{
    axios.delete(`/api/users/${id}`, tokenConfig(getState))
        .then(res =>
        {
            dispatch(successMessage({ deleteUser: 'Successfully user deleted' }));
            dispatch({
                type: DELETE_AUTH,
                payload: id
            });
        }).catch(err => console.log(err))
}

// Add User
export const addUser = (user) => (dispatch, getState) =>
{
    axios.post('/api/users/', user, tokenConfig(getState))
        .then(res =>
        {
            dispatch(successMessage({ addUser: "Succesfully new user added" }));
            dispatch({
                type: ADD_USER,
                payload: res.data
            });
        }).catch(err =>
        {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        })
}
