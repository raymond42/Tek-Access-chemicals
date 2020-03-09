import { SUCCESS_MESSSAGE } from '../actions/types';

const initialState = {}

export default function (state = initialState, action)
{
    switch (action.type) {
        case SUCCESS_MESSSAGE:
            return (state = action.payload)
        default:
            return state;
    }
}