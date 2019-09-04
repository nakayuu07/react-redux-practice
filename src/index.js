import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import * as serviceWorker from './serviceWorker';

render(<Counter />, document.getElementById('root'));

serviceWorker.unregister();
