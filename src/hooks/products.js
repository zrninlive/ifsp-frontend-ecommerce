import { createStore, createEvent } from 'effector';
import { useStore } from 'effector-react';
import { withPersist } from 'effector-persist';

const store = withPersist(
  createStore({
    products: [],
    categories: [],
  })
);

const setProducts = createEvent();
const setCategories = createEvent();

const clearStore = createEvent();

store.on(setProducts, (state, products) => ({
  ...state,
  products,
}));

store.on(setCategories, (state, categories) => ({
  ...state,
  categories,
}));

store.reset(clearStore);

export function useProducts() {
  return {
    storeProducts: useStore(store),
    setProducts,
    setCategories,
    clearStore,
  };
}
