import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import MineSearch from './MineSearch';

const Hot = hot(MineSearch);

ReactDOM.render(<Hot />, document.querySelector('#root'));
