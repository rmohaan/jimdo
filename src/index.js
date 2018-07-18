import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import {Provider} from 'react-redux';
import store from './stores/index';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={App}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('root'));
