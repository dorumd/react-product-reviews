import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Comment, Header } from 'semantic-ui-react';
import AddProductReviewForm from '../components/AddProductReviewForm';
import ProductReview from '../components/ProductReview';

class ProductReviewsView extends Component {
    render() {
        const { product: { data, loading } } = this.props;

        return (
            <Comment.Group>
                <Header as='h3' dividing>Reviews</Header>

                {!loading && data.productReviews.map(review => (
                    <ProductReview key={review.id} />
                ))}

                <AddProductReviewForm />
            </Comment.Group>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product
    };
};

const ProductReviewsContainer = connect(
    mapStateToProps
)(ProductReviewsView);

export default ProductReviewsContainer;
