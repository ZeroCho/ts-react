import * as React from 'react';
import { Component } from 'react';
import { TryProps } from './types';

class Try extends Component<TryProps> {
  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}

export default Try;
