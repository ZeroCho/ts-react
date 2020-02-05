import * as React from 'react';
import { TryInfo } from './types';

class Try extends React.Component<{ tryInfo: TryInfo }> {
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
