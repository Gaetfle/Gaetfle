import { createSlice } from "@reduxjs/toolkit";

const confirmUiSlice = createSlice({
  name: "confirmUi",
  initialState: { confirmIsVisible: false },

  reducers: {
    toggle(state) {
      state.confirmIsVisible = !state.confirmIsVisible;
    }
  },
});

export const confirmUiActions = confirmUiSlice.actions;
export default confirmUiSlice;