import { FunctionComponent } from 'react';
import * as React from 'react';
import { userStore, postStore } from './store';

export const storeContext = React.createContext({
  userStore,
  postStore,
});

export const StoreProvider: FunctionComponent = ({ children }) => {
  return (
    <storeContext.Provider value={{ userStore, postStore }}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
