import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';

const Hot = hot(App);

ReactDOM.render(
  <Provider store={store}>
    <Hot />
  </Provider>,
  document.querySelector('#root'),
);
