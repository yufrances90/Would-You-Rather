import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import middleware from './middleware';

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
        <App />
    </Provider>, 
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
