import { createSlice } from "@reduxjs/toolkit";

const appliedUiSlice = createSlice({
  name: "appliedUiSlice",
  initialState: { appliedIsVisible: false },

  reducers: {
    toggle(state) {
      state.appliedIsVisible = !state.appliedIsVisible;
    }
  },
});

export const appliedUiActions = appliedUiSlice.actions;
export default appliedUiSlice;