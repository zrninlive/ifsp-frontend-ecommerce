import { createStore, createEvent } from 'effector';
import { useStore } from 'effector-react';
import { withPersist } from 'effector-persist';

const store = withPersist(
  createStore({
    loading: {},
  })
);

const setLoading = createEvent();

store.on(setLoading, (state, loading) => ({
  ...state,
  loading,
}));

export function useLayout() {
  return {
    storeLayout: useStore(store),
    setLoading,
  };
}
