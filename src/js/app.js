// Main js file
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

import Auth from './components/Auth/Auth';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Auth />
  </Provider>,
  document.getElementById('auth-component-wrapper')
);

// for other components also use ReactDOM.render
