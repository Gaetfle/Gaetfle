import { createSlice } from "@reduxjs/toolkit";

const paymentUiSlice = createSlice({
  name: "paymentUi",
  initialState: { paymentIsVisible: false },

  reducers: {
    toggle(state) {
      state.paymentIsVisible = !state.paymentIsVisible;
    },
  },
});

export const paymentUiActions = paymentUiSlice.actions;
export default paymentUiSlice;
