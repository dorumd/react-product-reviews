import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Comment, Header } from 'semantic-ui-react';
import AddProductReviewForm from '../components/AddProductReviewForm';
import ProductReview from '../components/ProductReview';

class ProductReviewsView extends Component {
    render() {
        const { reviews } = this.props;

        return (
            <Comment.Group>
                <Header as='h3' dividing>Reviews</Header>

                {reviews.map(review => (
                    <ProductReview key={review.id} />
                ))}

                <AddProductReviewForm />
            </Comment.Group>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        reviews: state.productReviews
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onProductClick: (id) => {
            // dispatch(show(id))
        }
    };
};

const ProductReviewsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductReviewsView);

export default ProductReviewsContainer;