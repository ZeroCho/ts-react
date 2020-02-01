import * as React from 'react';
import { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import History = require('history');
import NumberBaseball from '../3.숫자야구/NumberBaseballClass';
import RSP from '../5.가위바위보/RSPClass';
import Lotto from '../6.로또/LottoClass';

class GameMatcher extends Component<RouteComponentProps<{ name: string }>> {
  render() {
    let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));
    console.log(urlSearchParams.get('hello'));
    if (this.props.match.params.name === 'number-baseball') {
      return <NumberBaseball />
    } else if (this.props.match.params.name === 'rock-scissors-paper') {
      return <RSP />
    } else if (this.props.match.params.name === 'lotto-generator') {
      return <Lotto />
    }
    return (
      <div>
        일치하는 게임이 없습니다.
      </div>
    );
  }
}

export default GameMatcher;
