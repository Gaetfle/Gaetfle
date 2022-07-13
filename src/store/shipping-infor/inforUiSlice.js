import { createSlice } from "@reduxjs/toolkit";

const inforUiSlice = createSlice({
  name: "inforUi",
  initialState: { inforIsVisible: false },

  reducers: {
    toggle(state) {
      state.inforIsVisible = !state.inforIsVisible;
    },
  },
});

export const inforUiActions = inforUiSlice.actions;
export default inforUiSlice;
