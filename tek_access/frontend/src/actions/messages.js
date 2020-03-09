import { SUCCESS_MESSSAGE, GET_ERRORS } from './types';

export const successMessage = msg =>
{
    return {
        type: SUCCESS_MESSSAGE,
        payload: msg
    }
}

export const errorMessage = msg =>
{
    return {
        type: GET_ERRORS,
        payload: msg
    }
}