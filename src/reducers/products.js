import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from '../actions/products';

const product = (state = [], action = {}) => {
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return state;
        case RECEIVE_PRODUCTS:
            return state;
        default:
            return state;
    }
};

const products = (state = [], action = {}) => {
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return state;
        case RECEIVE_PRODUCTS:
            return state.map(p => product(p, action));
        default:
            return state;
    }
};

export default products;
