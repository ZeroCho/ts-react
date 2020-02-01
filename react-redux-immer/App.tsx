import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { AddPostAction } from './actions/post';
import {
  logIn,
  LogInFailureAction,
  LogInRequestAction,
  LogInSuccessAction,
  logOut,
  LogOutAction,
} from './actions/user';
import { RootState } from './reducers';
import { UserState } from './reducers/user';

interface Props {
  dispatchLogIn: ({ id, password } : { id: string, password: string }) => void;
  dispatchLogOut: () => void;
  user: UserState;
}

class App extends Component<Props> {
  onClick = () => {
    this.props.dispatchLogIn({
      id: 'zerocho',
      password: '비밀번호',
    });
  };

  onLogout = () => {
    this.props.dispatchLogOut();
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        {user.isLoggingIn
          ? <div>로그인 중</div>
          : user.data
            ? <div>{user.data.nickname}</div>
            : '로그인 해주세요.'}
        {!user.data
          ? <button onClick={this.onClick}>로그인</button>
          : <button onClick={this.onLogout}>로그아웃</button>}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  user: state.user,
  posts: state.posts,
}); // reselect

interface ThunkDispatch {
  (thunkAction: ThunkAction): void;
  <A>(action: A): A;
  // This overload is the union of the two above (see TS issue #14107).
  <TAction>(
    action:
      | TAction
      | ThunkAction,
  ): TAction;
}

type ThunkAction = (dispatch: ThunkDispatch) => void;

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  dispatchLogIn: (data: { id: string, password: string }) => dispatch(logIn(data)),
  dispatchLogOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
