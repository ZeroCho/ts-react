import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import App from './App';
import StoreProvider from './Context';

const Hot = hot(App);

ReactDOM.render(
  <StoreProvider>
    <Hot />
  </StoreProvider>,
  document.querySelector('#root'),
);
