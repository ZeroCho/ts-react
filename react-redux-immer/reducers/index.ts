import { combineReducers } from 'redux';
import userReducer from './user';
import postReducer from './post';

const reducer = combineReducers({
  user: userReducer,
  posts: postReducer,
});
export type RootState = ReturnType<typeof reducer>;

export default reducer;
