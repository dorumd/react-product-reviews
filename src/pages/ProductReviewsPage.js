import React from 'react';
import { Grid } from 'semantic-ui-react';
import ProductReviewsContainer from '../containers/ProductReviewsContainer';
import ProductInfo from '../components/ProductInfo';
import ProductReviewBreadCrumb from '../components/ProductReviewBreadcrumb';

const ProductReviewsPage = () => (
    <Grid>
        <Grid.Column width={6}>
            <ProductReviewBreadCrumb />
            <ProductInfo />
        </Grid.Column>

        <Grid.Column width={10}>
            <ProductReviewsContainer />
        </Grid.Column>
    </Grid>
);

export default ProductReviewsPage;
