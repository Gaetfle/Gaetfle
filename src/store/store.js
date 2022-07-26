import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import authSlice from "./auth/authSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import inforUiSlice from "./shipping-infor/inforUiSlice";
import voucherUiSlice from "./voucher/voucherUiSlice";
import orderInformationSlice from "./orderInformation/orderInformationSlice";
import paymentInformationSlice from "./paymentInformation/paymentInformationSlice";
import paymentUiSlice from "./payment/paymentUiSlice";
import orderlistSlice from "./order/orderSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    cartUi: cartUiSlice.reducer,
    inforUi: inforUiSlice.reducer,
    order: orderInformationSlice.reducer,
    orderlist: orderlistSlice.reducer,
    payment: paymentInformationSlice.reducer,
    paymentUi: paymentUiSlice.reducer,
    voucherUi: voucherUiSlice.reducer,
  },
});

export default store;
