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
  if (quantity < 1) return { ...state };

  const { products, cart } = state;

  const { quantity: stockQuantity } = products.find(
    product => product.id === product_id
  );

  if (stockQuantity < quantity) {
    toast.error('Quantidade solicitada fora de estoque');
    return { ...state };
  }

  let cartUpdated;

  const productAlreadyOnCart = cart.find(product => product.id === product_id);

  if (productAlreadyOnCart) {
    cartUpdated = cart.map(product => {
      if (product.id !== product_id) return { ...product };

      return { ...product, quantity };
    });
  } else {
    const [productAdded] = products
      .filter(product => product.id === product_id)
      .map(product => ({ ...product, quantity }));

    cartUpdated = cart.filter(product => product.id !== product_id);
    cartUpdated = [productAdded, ...cartUpdated];
  }

  return {
    ...state,
    cart: cartUpdated,
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
