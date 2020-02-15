import { addPost } from "./post";

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST' as const;
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS' as const;
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE' as const;
export const LOG_OUT = 'LOG_OUT';

export interface LogInRequestAction {
    type: typeof LOG_IN_REQUEST,
    data: { id: string, password: string },
}

export const logInRequest = (data: { id: string, password: string }): LogInRequestAction => {
    return {
        type: LOG_IN_REQUEST,
        data,
    }
}

export interface LogInSuccessAction {
    type: typeof LOG_IN_SUCCESS,
    data: { userId: number, nickname: string },
}

export const logInSuccess = (data: { userId: number, nickname: string }): LogInSuccessAction => {
    return {
        type: LOG_IN_SUCCESS,
        data,
    }
}

export interface LogInFailureAction {
    type: typeof LOG_IN_FAILURE,
    error: Error,
}

export const logInFailure = (error: Error): LogInFailureAction => {
    return {
        type: LOG_IN_FAILURE,
        error,
    }
}

export interface ThunkDispatch {
    (thunkAction: ThunkAction): void,
    <A>(action: A): A,
    <TAction>(action: TAction | ThunkAction): TAction;
}

type ThunkAction = (dispatch: ThunkDispatch) => void;
export const logIn = (data: { id: string, password: string }): ThunkAction => {
    return (dispatch) => {
        dispatch(logInRequest(data));
        try {
            setTimeout(() => {
                dispatch(logInSuccess({
                    userId: 1,
                    nickname: 'zerocho',
                }));
                dispatch(addPost(''));
            }, 1000)
        } catch (err) {
            dispatch(logInFailure(err));
        }
    }
};

export interface LogOutAction {
    type: typeof LOG_OUT,
}

export const logOut = () => {
    return {
        type: LOG_OUT,
    };
}