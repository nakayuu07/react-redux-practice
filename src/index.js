import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import Events from './components/Events';
import reducer from './reducers'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <Events />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
