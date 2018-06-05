import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetch } from './actions';

class Home extends React.PureComponent {

  componentDidMount() {
    this.props.dispatch(fetch());
  }


  /**
   * Render a list of post
   * @returns {any[]}
   */
  renderPostsList = () => (
    this.props.posts.map(post => (
      <li className="post-list-item" key={post.id}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </li>
    ))
  );


  /**
   * Main render
   * @returns {*}
   */
  render() {
    return (
      <div>
        <h1 className="title">This is the home page</h1>
        <h2 className="subtitle">Here you can find a great list of posts:</h2>

        {this.props.error &&
          <div className="notification is-danger">
            We are really sorry, an error occurred :( <br/> Error code: {this.props.error}
          </div>
        }

        {!this.props.error &&
          <ul className="post-list">{this.renderPostsList()}</ul>
        }
      </div>
    );
  }
}


export default connect(({ home }) => ({
  posts: home.posts,
  error: home.error
}))(Home);