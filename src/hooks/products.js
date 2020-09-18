import { createStore, createEvent } from 'effector';
import { useStore } from 'effector-react';
import { withPersist } from 'effector-persist';
import { toast } from 'react-toastify';

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
const removeFromCart = createEvent();
const updateProductQuantity = createEvent();

const clearStore = createEvent();

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

store.on(addToCart, (state, { product_id, quantity }) => {
  const { products, cart } = state;

  const productAdded = products.find(product => product.id === product_id);

  if (productAdded.quantity < quantity) {
    toast.error('Quantidade solicitada fora de estoque');
    return { ...state };
  }

  productAdded.quantity = quantity;

  let cartUpdated = cart.filter(product => product.id !== product_id);

  return {
    ...state,
    cart: [...cartUpdated, productAdded],
  };
});

store.on(addToCart, (state, { product_id, quantity }) => {
  const { products, cart } = state;

  const productAdded = products.find(product => product.id === product_id);

  if (productAdded.quantity < quantity) {
    toast.error('Quantidade solicitada fora de estoque');
    return { ...state };
  }

  productAdded.quantity = quantity;

  let cartUpdated = cart.filter(product => product.id !== product_id);

  return {
    ...state,
    cart: [...cartUpdated, productAdded],
  };
});

store.on(removeFromCart, (state, product_id) => {
  const { cart } = state;

  const cartUpdated = cart.filter(product => product.id !== product_id);

  return {
    ...state,
    cart: cartUpdated,
  };
});

store.on(updateProductQuantity, (state, { product_id, quantity }) => {
  const { cart } = state;

  const cartUpdated = cart.map(product => {
    if (product.id !== product_id) return product;

    return {
      ...product,
      quantity: quantity,
    };
  });

  return {
    ...state,
    cart: cartUpdated,
  };
});

store.reset(clearStore);

export function useProducts() {
  return {
    storeProducts: useStore(store),
    setProducts,
    setCategories,
    addToCart,
    removeFromCart,
    updateProductQuantity,
    clearStore,
  };
}
