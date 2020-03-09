import { combineReducers } from 'redux';
import authentication from './authentication';
import auth from './auth';
import errors from './errors';
import success from './success';

export default combineReducers({
    authReducer: authentication,
    errorsReducer: errors,
    successMessage: success,
    accountReducer: auth
});