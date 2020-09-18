import { createStore, createEvent } from 'effector';
import { useStore } from 'effector-react';
import { withPersist } from 'effector-persist';

import { useProducts } from './products';

const { storeProducts } = useProducts();

const store = withPersist(
  createStore({
    products: [],
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
