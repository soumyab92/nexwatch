// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Get cart from localStorage
const savedCart = JSON.parse(localStorage.getItem('cart')) || { items: [] };

// Create the store with preloaded state
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: savedCart,
  },
});

// Save cart to localStorage whenever it changes
store.subscribe(() => {
  localStorage.setItem('cart', JSON.stringify(store.getState().cart));
});

export default store;