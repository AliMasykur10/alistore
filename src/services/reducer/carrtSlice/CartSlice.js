import { createSlice, createAsyncThunk, createEntityAdapter, current } from "@reduxjs/toolkit";

const cartAdapter = createEntityAdapter();

const cartSlice = createSlice({
  name: "cart",
  initialState: cartAdapter.getInitialState({
    totalPrice: 0,
  }),
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.entities[newItem.id];

      if (existingItem) {
        existingItem.quantity++;
      } else {
        cartAdapter.addOne(state, { ...newItem, quantity: 1 });
      }

      state.totalPrice = calculateTotalPrice(state.entities);
    },
    decrementFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.entities[itemId];

      if (existingItem) {
        if (existingItem.quantity === 1) {
          cartAdapter.removeOne(state, itemId);
        } else {
          existingItem.quantity--;
        }
      }

      state.totalPrice = calculateTotalPrice(state.entities);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.entities[itemId];

      if (existingItem) {
        cartAdapter.removeOne(state, itemId);
      }

      state.totalPrice = calculateTotalPrice(state.entities);
    },
  },
});

const calculateTotalPrice = (items) => {
  return Object.values(items).reduce((total, item) => total + item.price * item.quantity, 0);
};

export const { addToCart, decrementFromCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
