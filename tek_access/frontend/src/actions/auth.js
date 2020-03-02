import axios from 'axios';
import { successMessage } from './messages'
import { GET_AUTH, DELETE_AUTH, ADD_USER, GET_ERRORS } from './types'

// Get Users
export const getAuth = () => dispatch =>
{
    axios.get('/api/user/')
        .then(res =>
        {
            dispatch({
                type: GET_AUTH,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

// Delete Users
export const deleteAuth = (id) => dispatch =>
{
    axios.delete(`/api/user/${id}`)
        .then(res =>
        {
            dispatch({
                type: DELETE_AUTH,
                payload: id
            });
        }).catch(err => console.log(err))
}

// Add User
export const addUser = (user) => dispatch =>
{
    axios.post('/api/user/', user)
        .then(res =>
        {
            dispatch(successMessage({ addUser: "Succesfully account created" }));
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
