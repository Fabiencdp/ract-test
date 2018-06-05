import React from 'react';
import { connect } from 'react-redux';
import Comment from '../../components/Comment';
import { fetch } from './actions';

class Post extends React.PureComponent {

  componentDidMount() {
    this.props.dispatch(fetch(this.props.match.params.id));
  }

  renderCommentsList = () => {
    return this.props.comments.map(comment => (
      <Comment key={comment.id}
               authorEmail={comment.email}
               authorName={comment.name}
               content={comment.body} />
    ));
  };

  render() {

    console.log('props', this.props);

    const { post, user, comments } = this.props;

    if (post === null || user === null || comments === null) {
      return <p>Loading Post from API</p>;
    }

    return (
      <div>
        <h1>{ post.title }</h1>
        {user &&
        <p><i>By { user.name }, { user.company.name }, { user.address.city }</i></p>
        }
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
  post: post.post,
  comments: post.comments,
  error: post.error
}))(Post);
