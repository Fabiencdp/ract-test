import React from 'react';
import { connect } from 'react-redux';
import Comment from '../../components/Comment';
import { fetch } from './actions';

class Post extends React.PureComponent {

    componentDidMount() {
        /* Well I don't know :/ */
    }

    renderCommentsList = () => {
        return <div></div>;
    };

    render() {

        const { post, user, comments } = this.props;

        if (post === null || user === null || comments === null) {
            return <p>Loading Post from API</p>;
        }

        return (
            <div>
                <h1>{ post.title }</h1>
                <p><i>By { user.name }, { user.company.name }, { user.address.city }</i></p>
                <p>{ post.body }</p>
                <h3>Comments</h3>
                <ul>
                    { this.renderCommentsList() }
                </ul>
            </div>
        );
    }
}

export default connect(({ post }) => ({
    /*
     *
     * I want some props :)
     *
     * */
}))(Post);
