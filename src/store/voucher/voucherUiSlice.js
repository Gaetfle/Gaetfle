import { createSlice } from "@reduxjs/toolkit";

const voucherUiSlice = createSlice({
  name: "voucherUi",
  initialState: { voucherIsVisible: false },

  reducers: {
    toggle(state) {
      state.voucherIsVisible = !state.voucherIsVisible;
    },
  },
});

export const voucherUiActions = voucherUiSlice.actions;
export default voucherUiSlice;
