import { produce } from 'immer';
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT,
  LogInFailureAction,
  LogInRequestAction,
  LogInSuccessAction,
  LogOutAction,
} from '../actions/user';

export interface UserState {
  isLoggingIn: boolean,
  data: {
    nickname: string;
  } | null,
}

const initialState: UserState = {
  isLoggingIn: false,
  data: null,
};

const userReducer = (prevState = initialState, action: LogInRequestAction | LogInSuccessAction | LogInFailureAction | LogOutAction) => { // 새로운 state 만들어주기
  return produce(prevState, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.data = null;
        draft.isLoggingIn = true;
        break;
      case LOG_IN_SUCCESS:
        draft.data = action.data;
        draft.isLoggingIn = false;
        break;
      case LOG_IN_FAILURE:
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      case LOG_OUT:
        draft.data = null;
        break;
      default:
        break;
    }
  });
};

export default userReducer;
