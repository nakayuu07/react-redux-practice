import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Events from './components/Events';
import EventsNew from './components/EventsNew'
import reducer from './reducers'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/events/new' component={EventsNew} />
        <Route exact path='/' component={Events} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
