import { createSlice } from "@reduxjs/toolkit";

const voucherUiSlice = createSlice({
  name: "voucherUi",
  initialState: { voucherIsVisible: false, option: ''},

  reducers: {
    toggle(state) {
      state.voucherIsVisible = !state.voucherIsVisible;
    },
    setOption(state, action){
      state.option = action.payload
    }
  },
});

export const voucherUiActions = voucherUiSlice.actions;
export default voucherUiSlice;
