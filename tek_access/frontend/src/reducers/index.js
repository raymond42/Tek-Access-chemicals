import { combineReducers } from 'redux';
import auth from './authentication'
import errors from './errors';
import success from './success';

export default combineReducers({
    authReducer: auth,
    errorsReducer: errors,
    successMessage: success

});