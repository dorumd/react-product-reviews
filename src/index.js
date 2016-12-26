import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import rootReducer from './reducers';
import ProductsPage from './pages/ProductsPage';
import ProductReviewsPage from './pages/ProductReviewsPage';
import AppContainer from './containers/AppContainer';

const initialState = {
    products: [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        }
    ],
    productReviews: [
        {
            id: 1
        }
    ]
};

const store = createStore(
    rootReducer,
    initialState
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={AppContainer}>
                <IndexRoute component={ProductsPage} />
                <Route path="/:id/reviews" component={ProductReviewsPage} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
