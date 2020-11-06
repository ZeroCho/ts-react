import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import App from './App';
import { StoreProvider } from './Context';

const Hot = hot(App); // HOC

ReactDOM.render(
    <StoreProvider>
        <Hot />
    </StoreProvider>,
    document.querySelector('#root')
);
