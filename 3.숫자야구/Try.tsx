import * as React from 'react';
import { TryProps } from './types';

const Try: React.FunctionComponent<TryProps> = ({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
};

export default Try;
