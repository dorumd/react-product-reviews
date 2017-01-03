export const REQUEST_PRODUCT = 'REQUEST_PRODUCT';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

export const requestProduct = (id) => {
    return {
        type: REQUEST_PRODUCT,
        id
    };
};

export const receiveProduct = ({ product }) => {
    return {
        type: RECEIVE_PRODUCT,
        product
    };
};

export const fetchProduct = (id) => {
    return dispatch => {
        dispatch(requestProduct(id));

        // Simulate slow api loading and enjoy loader!
        setTimeout(() => {
            return fetch(`/api/products/${id}`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(json => dispatch(receiveProduct(json)));
        }, 100);
    }
};
