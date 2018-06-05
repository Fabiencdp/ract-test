import React from 'react';
import PropTypes from 'prop-types';

function Comment({authorName, authorEmail, content}) {
    return (
        <div>
            /**
             *
             * This one should be easy
             *
             * **/
        </div>
    );
}

Comment.propTypes = {
    authorName: PropTypes.string.isRequired,
    authorEmail: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default Comment;
