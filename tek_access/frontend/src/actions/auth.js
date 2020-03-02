import axios from 'axios';
import { GET_AUTH, DELETE_AUTH } from './types'

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