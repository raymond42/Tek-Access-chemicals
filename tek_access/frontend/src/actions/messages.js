import { SUCCESS_MESSSAGE } from './types';

export const successMessage = msg =>
{
    return {
        type: SUCCESS_MESSSAGE,
        payload: msg
    }
}