import React from 'react';
import PropTypes from 'prop-types';

function Comment({authorName, authorEmail, content}) {
  return (
    <div>
      <h4 className="title is-6">{authorName}</h4>

      {/* Handle anon user */}
      {authorEmail &&
        <h6 className="subtitle has-text-grey-lighter">From {authorEmail}</h6>
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
