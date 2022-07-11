import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import authSlice from "./auth/authSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    cartUi: cartUiSlice.reducer,
  },
});

export default store;
