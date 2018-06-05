import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import home from '../containers/Home/reducer';
import post from '../containers/Post/reducer';


/**
 * Import and combine our main reducers
 * @returns {Store<any>}
 */
function configureStore() {

  const enhancer = applyMiddleware(thunk);

  const reducer = combineReducers({
    home,
    post
  });

  return createStore(reducer, enhancer);
}

export default configureStore;