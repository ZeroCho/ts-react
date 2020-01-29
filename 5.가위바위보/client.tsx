import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import RSP from './RSP';

const Hot = hot(RSP);

ReactDOM.render(<Hot />, document.querySelector('#root'));
