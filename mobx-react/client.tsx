import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import StoreProvider from './Context';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.querySelector('#root'),
);
