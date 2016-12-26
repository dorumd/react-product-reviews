import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';

class ProductReview extends Component {
    render() {
        return (
            <Comment>
                <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/matt.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>Matt</Comment.Author>
                    <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>How artistic!</Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>Upvote</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
        );
    }
}

export default ProductReview;
