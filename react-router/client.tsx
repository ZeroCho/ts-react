import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Games from './Games';

const Hot = hot(Games);

ReactDOM.render(<Hot />, document.querySelector('#root'));
