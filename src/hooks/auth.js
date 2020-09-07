import { createStore, createEvent } from 'effector';
import { useStore } from 'effector-react';
import { withPersist } from 'effector-persist';

const store = withPersist(
  createStore({
    user: {},
    redirectTo: null,
  })
);

const setUser = createEvent();
const clearStore = createEvent();

store.on(setUser, (state, user) => ({
  ...state,
  user,
}));

store.reset(clearStore);

export function useAuth() {
  return {
    storeAuth: useStore(store),
    setUser,
    clearStore,
  };
}
