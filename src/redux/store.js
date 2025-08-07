// Importing configureStore from Redux Toolkit to create the Redux store
import { configureStore } from '@reduxjs/toolkit';

// Importing the cart reducer from the cartSlice file
import cartReducer from './cartSlice';

// Creating the Redux store using Redux Toolkit's configureStore method
const store = configureStore({
  // The reducer field is an object where we define slices of state
  // In this case, we have a 'cart' slice managed by cartReducer
  reducer: {
    cart: cartReducer, // This means state.cart will be controlled by cartReducer
  },
});

export default store;