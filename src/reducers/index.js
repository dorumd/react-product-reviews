import { combineReducers } from 'redux';
import productReviews from './productReviews';
import products from './products';

const productReviewsApp = combineReducers({
    productReviews,
    products
});

export default productReviewsApp;
