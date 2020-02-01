import { observable, configure, action } from 'mobx';

configure({ enforceActions: 'always' });

interface User {
  nickname: string;
  password: string;
}
interface UserStore {
  isLoggingIn: boolean;
  data: User | null;
  logIn: (data: User) => void;
  logOut: () => void;
}

const userStore = observable<UserStore>({
  isLoggingIn: false,
  data: null,
  logIn: action((data: User) => {
    userStore.isLoggingIn = true;
    setTimeout(action(() => {
      userStore.data = data;
      userStore.isLoggingIn = false;
      postStore.data.push('1');
    }), 2000);
  }),
  logOut() {
    userStore.data = null;
  },
});

interface PostStore {
  data: string[];
  addPost: (data: string) => void;
}

const postStore = observable<PostStore>({
  data: [],
  addPost(data) {
    this.data.push(data);
  },
});

export { userStore, postStore };
