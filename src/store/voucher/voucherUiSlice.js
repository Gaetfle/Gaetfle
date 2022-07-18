import { createSlice } from "@reduxjs/toolkit";

const voucherUiSlice = createSlice({
  name: "voucherUi",
  initialState: { voucherIsVisible: false, option: '', title: '', image: ''},

  reducers: {
    toggle(state) {
      state.voucherIsVisible = !state.voucherIsVisible;
    },
    setOption(state, action){
      // console.log(action.payload)
      state.option = action.payload[0].id;
      state.title = action.payload[0].title;
      state.image = action.payload[0].image;
    }
  },
});

export const voucherUiActions = voucherUiSlice.actions;
export default voucherUiSlice;