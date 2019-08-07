// Main js file
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

import Auth from '../components/Auth/Auth';
import SomeClass from '../components/SomeClass/SomeClass';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Auth />
  </Provider>,
  document.getElementById('auth-component-wrapper')
);
ReactDOM.render(
  <Provider store={store}>
    <SomeClass />
  </Provider>,
  document.getElementById('some-wrapper')
);
