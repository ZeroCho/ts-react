import * as React from 'react';
import { TryProps } from './types';

const { Component } = React;

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
