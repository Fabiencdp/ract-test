import Api from '../../utils/Api'

export const FETCHED_POSTS = 'FETCHED_POSTS';

export function fetched(posts, error = null) {
  return {
    type: FETCHED_POSTS,
    posts, error
  }
}

export function fetch() {
  return dispatch => {
    Api.getPosts().then(data => {
      dispatch(fetched(data));
    }).catch(err => {
      // Return an empty object and error status if possible
      dispatch(fetched([], err));
    });
  }
}