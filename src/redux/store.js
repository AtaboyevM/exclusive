import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./like";
import cartReducer from "./cartSlice";
import clockReducer from './clockSlice'

export const store = configureStore({
  reducer: {
    like: likeReducer,
    cart: cartReducer,
    clock: clockReducer,
  },
});