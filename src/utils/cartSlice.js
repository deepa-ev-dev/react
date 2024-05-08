// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.card.info.id === newItem.card.info.id);
      if (existingItem) {
        existingItem.quantity++; // Increment quantity if the item already exists
      } else {
        state.items.push({ ...newItem, quantity: 1 }); // Add new item with quantity 1
      }
    },
    removeItem(state, action) {
      const itemId = action.payload.card.info.id;
      state.items = state.items.filter((item) => item.card.info.id !== itemId);
    },
    incrementItemQuantity(state, action) {
      const itemId = action.payload;
      const item = state.items.find((item) => item.card.info.id === itemId);
      if (item) {
        item.quantity++; // Increment item quantity
      }
    },
    decrementItemQuantity(state, action) {
      const itemId = action.payload;
      const item = state.items.find((item) => item.card.info.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity--; // Decrement item quantity, but keep at least 1
      }
    },
    clearCart(state) {
      state.items = []; // Clear the cart
    },
  },
});

export const { addItem, removeItem, incrementItemQuantity, decrementItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
