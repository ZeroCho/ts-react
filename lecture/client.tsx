import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Games from './Games';

const Hot = hot(Games); // HOC

ReactDOM.render(<Hot />, document.querySelector('#root'));
