import * as React from 'react';
import { Component } from 'react';

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
} as const;

const scores = {
    가위: 1,
    바위: 0,
    보: -1,
} as const;

type ImgCoords = typeof rspCoords[keyof typeof rspCoords];
const computerChoice = (imgCoords: ImgCoords) => {
    return (Object.keys(rspCoords) as ['바위', '가위', '보']).find((k) => {
        return rspCoords[k] === imgCoords;
    })!;
};

interface State {
    result: string,
    imgCoords: ImgCoords,
    score: number,
}
class RSP extends Component<{}, State> {
    state: State = {
        result: '',
        imgCoords: rspCoords.바위,
        score: 0,
    }

    interval: number | null = null;
    clicked: boolean = false;

    componentDidMount() { // 컴포넌트가 첫 렌더링된 후, 여기에 비동기 요청을 많이 해요
        this.interval = window.setInterval(this.changeHand, 100);
    }

    componentWillUnmount() { // 컴포넌트가 제거되기 직전, 비동기 요청 정리를 많이 해요
        clearInterval(this.interval!);
    }

    changeHand = () => {
        const { imgCoords } = this.state;
        if (imgCoords === rspCoords.바위) {
            this.setState({
                imgCoords: rspCoords.가위,
            });
        } else if (imgCoords === rspCoords.가위) {
            this.setState({
                imgCoords: rspCoords.보,
            });
        } else if (imgCoords === rspCoords.보) {
            this.setState({
                imgCoords: rspCoords.바위,
            });
        }
    };

    onClickBtn = (choice: keyof typeof rspCoords) => () => {
        if (!this.clicked) {
            const { imgCoords } = this.state;
            clearInterval(this.interval!);
            this.clicked = true;
            const myScore = scores[choice];
            const cpuScore = scores[computerChoice(imgCoords)!];
            const diff = myScore - cpuScore;
            if (diff === 0) {
                this.setState({
                    result: '비겼습니다!',
                });
            } else if ([-1, 2].includes(diff)) {
                this.setState((prevState) => {
                    return {
                        result: '이겼습니다!',
                        score: prevState.score + 1,
                    };
                });
            } else {
                this.setState((prevState) => {
                    return {
                        result: '졌습니다!',
                        score: prevState.score - 1,
                    };
                });
            }
            window.setTimeout(() => {
                this.interval = window.setInterval(this.changeHand, 100);
                this.clicked = false;
            }, 1000);
        }
    };

    render() {
        const { result, score, imgCoords } = this.state;
        return (
            <>
                <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoords} 0` }} />
                <div>
                    <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        );
    }
}

export default RSP;
