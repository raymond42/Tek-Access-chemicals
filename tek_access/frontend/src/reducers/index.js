import { combineReducers } from 'redux';
import authentication from './authentication';
import auth from './auth';
import errors from './errors';
import success from './success';
import products from './products';
import product from './singleProduct';

export default combineReducers({
    authReducer: authentication,
    errorsReducer: errors,
    successMessage: success,
    accountReducer: auth,
    productsReducer: products,
    productReducer: product
});