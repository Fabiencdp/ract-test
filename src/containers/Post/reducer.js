import * as c from './actions';

/*
 * Comments ?
 */

const initialState = {
    post: null,
    user: null
};

export default function post(state = initialState, action) {
    switch (action.type) {
        case c.START_FETCH:
            return initialState;
        case c.FETCHED_USER:
            return {
                ...state,
                user: action.user
            };
        case c.FETCHED_POST:
            return {
                ...state,
                post: action.post
            };
        default:
            return state;
    }
}