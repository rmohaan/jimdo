'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from './store';

configure({ adapter: new Adapter() });

class TestStoreProvider extends React.Component {
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    );
  }
}

TestStoreProvider.displayName = 'TestStoreProvider';

TestStoreProvider.propTypes = {
  children: PropTypes.node
};

export default TestStoreProvider;
