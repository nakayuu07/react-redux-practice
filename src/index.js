import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Counter from './components/Counter';
import reducer from './reducers'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
