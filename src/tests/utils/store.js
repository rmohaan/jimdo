import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../../reducers';
import defaultState from './defaultState';

const reducer = combineReducers({
  data: reducers.data
});

const store = createStore(reducer, defaultState, compose(
  applyMiddleware(thunk)
));

export default store;
