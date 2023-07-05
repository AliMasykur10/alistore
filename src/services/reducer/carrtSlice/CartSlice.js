import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push({ ...newItem, quantity: 1 });
      }
    },
    decrementFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.find((item) => item.id === itemId);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          return state.filter((item) => item.id !== itemId);
        } else {
          existingItem.quantity--;
        }
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.find((item) => item.id == itemId);

      if (existingItem) {
        return state.filter((item) => item.id !== itemId);
      }
    },
  },
});

export const { addToCart, decrementFromCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
