import { createStore, createEvent } from 'effector';
import { useStore } from 'effector-react';
import { withPersist } from 'effector-persist';

const store = withPersist(
  createStore({
    user: {},
    token: null,
    plans: [],
  })
);

const setUser = createEvent();
const setToken = createEvent();
const setUserPlans = createEvent();

const clearStore = createEvent();

store.on(setUser, (state, user) => ({
  ...state,
  user,
}));

store.on(setToken, (state, token) => ({
  ...state,
  token,
}));

store.on(setUserPlans, (state, plans) => ({
  ...state,
  plans,
}));

store.reset(clearStore);

export function useCart() {
  return {
    storeAuth: useStore(store),
    setUser,
    setToken,
    clearStore,
    setUserPlans,
  };
}
