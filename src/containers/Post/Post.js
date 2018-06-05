import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { fetch } from './actions';
import Comment from '../../components/Comment';

class Post extends React.PureComponent {

  componentDidMount() {
    this.props.dispatch(fetch(this.props.match.params.id));
  }


  /**
   * Render our comment list
   * @returns {*}
   */
  renderCommentsList = () => {

    // *
    // Considering our comments as secondary,
    // We make a silent fail
    if ( this.props.commentsError || this.props.comments.length === 0) {
      return <div className="no-comments">There is no comment about this for the moment</div>
    }

    return this.props.comments.map(comment => (
      <Comment key={comment.id}
               authorEmail={comment.email}
               authorName={comment.name}
               content={comment.body} />
    ));
  };


  /**
   * Render our comment list
   * @returns {*}
   */
  renderPostError = () => {
    const { postError } = this.props;
    return (
      <div className="notification notification-danger">
        <p>
          Oopss, this post doesn't exist anymore or is not available right now <br/>
          error code: {postError}
        </p>
        <Link to='/'>Back to home</Link>
      </div>
    )
  };


  /**
   * Main render
   * @returns {*}
   */
  render() {

    const { post, user, comments, postError } = this.props;

    // Display an error if needed
    if ( postError ) {
      return this.renderPostError();
    }

    if (post === null || user === null || comments === null) {
      return <p>Loading Post from API</p>;
    }

    return (
      <div className="content">

        <div className="header">
          <h1 className="title">{ post.title }</h1>
          <h2 className="subtitle is-6 has-text-grey-light">By { user.name }, { user.company.name }, <i>{ user.address.city }</i></h2>
        </div>

        <p>{ post.body }</p>

        <div className="comments box">
          <p className="title is-5">Comments</p>
          <div className="comment-list">
            { this.renderCommentsList() }
          </div>
        </div>

      </div>
    );
  }
}

export default connect(({ post }) => ({
  post: post.post,
  user: post.user,
  comments: post.comments,
  postError: post.postError,
  commentsError: post.commentsError
}))(Post);
