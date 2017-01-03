import { combineReducers } from 'redux';
import product from './product';
import products from './products';

const productReviewsApp = combineReducers({
    product,
    products
});

export default productReviewsApp;
