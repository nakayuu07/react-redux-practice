import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Events from './components/Events';
import EventsNew from './components/EventsNew'
import EventsShow from './components/EventsShow'
import reducer from './reducers'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Events} />
        <Route exact path='/events' component={Events} />
        <Route path='/events/new' component={EventsNew} />
        <Route path='/events/:id' component={EventsShow} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
