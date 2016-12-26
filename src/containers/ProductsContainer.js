import React  from 'react';
import { connect } from 'react-redux';
import { Item } from 'semantic-ui-react';
import Product from '../components/Product';

const ProductsList = ({ products }) => (
    <Item.Group divided>
        {products.map(product => (
            <Product
                key={product.id}
                id={product.id}
                name='Product 1'
                shortDescription='Product 1 Short Description'
                fullDescription='Product 1 Full Description'
                imageSrc='http://semantic-ui.com/images/wireframe/image.png'
                reviewsCount={5}
            />
        ))}
    </Item.Group>
);

const mapStateToProps = (state) => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onProductClick: (id) => {
            // dispatch(show(id))
        }
    };
};

const ProductsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsList);

export default ProductsContainer;
