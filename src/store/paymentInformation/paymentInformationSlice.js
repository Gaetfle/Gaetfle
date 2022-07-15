import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  method: "BIDV",
  cardNumber: "1280183911235"
};

const paymentInformationSlice = createSlice({
  name: "payment",
  initialState,

  reducers: {
    setMethod(state, action) {
        state.method = action.payload
    },
    setCardNumber(state, action) {
        state.cardNumber = action.payload
    }
  },
});

export const paymentInformationActions = paymentInformationSlice.actions;
export default paymentInformationSlice;