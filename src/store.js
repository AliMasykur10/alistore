import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./services/reducer/carrtSlice/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
