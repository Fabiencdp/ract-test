import React from 'react';
import PropTypes from 'prop-types';

import './comment.css';

function Comment({authorName, authorEmail, content}) {
  return (
    <div className="comment">
      <h4 className="title is-6">{authorName}</h4>

      {/* Allow anonymous user */}
      {authorEmail &&
        <h6 className="subtitle is-7 has-text-grey-light">From {authorEmail}</h6>
      }

      <p className="comment-content">{content}</p>
    </div>
  );
}

Comment.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorEmail: PropTypes.string,
  content: PropTypes.string.isRequired
};

export default Comment;
