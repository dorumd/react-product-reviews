import { REQUEST_PRODUCT_REVIEWS, RECEIVE_PRODUCT_REVIEWS } from '../actions/productReviews';

const productReview = (state = [], action = {}) => {
    switch (action.type) {
        case REQUEST_PRODUCT_REVIEWS:
            return state;
        case RECEIVE_PRODUCT_REVIEWS:
            return state;
        default:
            return state;
    }
};

const productReviews = (state = [], action = {}) => {
    switch (action.type) {
        case REQUEST_PRODUCT_REVIEWS:
            return state;
        case RECEIVE_PRODUCT_REVIEWS:
            return state.map(review => productReview(review, action));
        default:
            return state;
    }
};

export default productReviews;
