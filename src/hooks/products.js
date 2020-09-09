import { createStore, createEvent } from 'effector';
import { useStore } from 'effector-react';
import { withPersist } from 'effector-persist';

const store = withPersist(
  createStore({
    products: [],
    categories: [],
    cart: [],
  })
);

const setProducts = createEvent();
const setCategories = createEvent();

const addToCart = createEvent();

const clearStore = createEvent();

store.on(addToCart, (state, productAdded) => {
  console.log(productAdded);
});

store.on(setProducts, (state, products) => {
  console.log(state);

  return {
    ...state,
    products,
  };
});

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
    addToCart,
    clearStore,
  };
}
