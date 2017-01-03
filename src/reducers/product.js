import { REQUEST_PRODUCT, RECEIVE_PRODUCT } from '../actions/product';

const product = (state = [], action = {}) => {
    switch (action.type) {
        case REQUEST_PRODUCT:
            return Object.assign({}, state, {
                loading: true
            });
        case RECEIVE_PRODUCT:
            return Object.assign({}, state, {
                data: action.product,
                loading: false
            });
        default:
            return state;
    }
};

export default product;
