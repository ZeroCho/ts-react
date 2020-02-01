export const ADD_POST = 'ADD_POST';

export interface AddPostAction {
  type: typeof ADD_POST,
  data: string,
}

export const addPost = (data: string): AddPostAction => {
  return {
    type: ADD_POST,
    data,
  }
};
