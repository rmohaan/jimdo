import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import * as reducers from '../reducers/index';
import defaultState from './defaultState';

const reducer = combineReducers({
  data: reducers.data,
  isLoading: reducers.isLoading,
  isSubmitted: reducers.isSubmitted,
  routing: routerReducer
});

const routingMiddleware = routerMiddleware(browserHistory);

const store = createStore(reducer, defaultState, compose(
  applyMiddleware(thunk, routingMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
