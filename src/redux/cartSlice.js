// Importing createSlice from Redux Toolkit to create a slice of the Redux state
import { createSlice } from '@reduxjs/toolkit';

// Initial state of the cart
const initialState = {
  items: [], // The cart will store an array of item objects
};

// Creating a slice for cart-related state and logic
const cartSlice = createSlice({
  name: 'cart', // Name of the slice (used in action types like 'cart/addToCart')
  initialState, // Setting the initial state for this slice
  reducers: {
    // Action: Add an item to the cart
    addToCart: (state, action) => {
      const item = action.payload; // The item being added (comes from dispatch)
      const existing = state.items.find(i => i.id === item.id); // Check if the item already exists in the cart
      const qtyToAdd = parseInt(item.qty) || 1; // Convert qty to number; default to 1 if invalid

      if (existing) {
        // If item already exists, just increase its quantity
        existing.qty += qtyToAdd;
      } else {
        // If item doesn't exist, add it to the cart with the given quantity
        state.items.push({ ...item, qty: qtyToAdd });
      }
    },

    // Action: Remove an item from the cart by its id
    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload); // Keep all items except the one with matching id
    },

    // Action: Update the quantity of a specific item in the cart
    updateQty: (state, action) => {
      const { id, qty } = action.payload; // Destructure id and new qty from payload
      const item = state.items.find(i => i.id === id); // Find the item in the cart
      if (item) item.qty = qty; // If found, update its quantity
    },

    // Action: Clear the entire cart
    clearCart: (state) => {
      state.items = []; // Reset items to an empty array
    },
  },
});

// Exporting action creators so they can be used in components (via dispatch)
export const { addToCart, removeFromCart, updateQty, clearCart } = cartSlice.actions;

// Exporting the reducer so it can be included in the Redux store
export default cartSlice.reducer;