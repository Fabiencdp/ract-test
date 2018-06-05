import Api from '../../utils/Api'

export const FETCHED_POST = 'FETCHED_POST';
export const FETCHED_USER = 'FETCHED_USER';
export const FETCHED_COMMENTS = 'FETCHED_COMMENTS';
export const START_FETCH = 'START_FETCH';

export function fetchedPost(post = null, error = null) {
  return {
    type: FETCHED_POST,
    post,
    error
  }
}

export function fetchedUser(user = null) {
  return {
    type: FETCHED_USER,
    user
  }
}

export function fetchedComments(comments = [], error = null) {
  return {
    type: FETCHED_COMMENTS,
    comments,
    error
  }
}

export function startFetch() {
  return {
    type: START_FETCH
  }
}

export function fetch(postId) {
  return (dispatch) => {

    // Dispatch "loading" action
    dispatch(startFetch());

    // *
    // Get post and related stuff
    Api.getPost(postId).then(post => {

      dispatch(fetchedPost(post));

      // Get related user from post
      return Api.getPostUser(post.userId);

    }).then((user) => {

      dispatch(fetchedUser(user));

    }).catch(err => {

      // *
      // Error will trigger if we don't get user too
      // Post must have a user
      dispatch(fetchedPost(null, err));

    });


    // *
    // Get post comment
    Api.getPostComments(postId).then(data => {
      dispatch(fetchedComments(data));
    }).catch(err => {
      dispatch(fetchedComments(null, err));
    });

  }
}
