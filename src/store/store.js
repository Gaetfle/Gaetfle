import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import authSlice from "./auth/authSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import inforUiSlice from "./shipping-infor/inforUiSlice";
import orderInformationSlice from "./orderInformation/orderInformationSlice";
import paymentUiSlice from "./payment/paymentUiSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    cartUi: cartUiSlice.reducer,
    inforUi: inforUiSlice.reducer,
    order: orderInformationSlice.reducer,
    paymentUi: paymentUiSlice.reducer,
  },
});

export default store;
