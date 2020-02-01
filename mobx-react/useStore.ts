import * as React from 'react';
import { storeContext } from './Context';

function useStore() {
  const { userStore, postStore } = React.useContext(storeContext);

  return { userStore, postStore };
}

export default useStore;
