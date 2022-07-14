import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Nguyễn Sơn",
  phone: "+84 0335 460 332",
  address: "17 Trường Sa, P4, Q.Tân Bình, Hồ Chí Minh",
  gmail: "nson19@gmail.com",
};

const orderInformationSlice = createSlice({
  name: "order",
  initialState,

  reducers: {
    // =========== add item ============
    setName(state, action) {
        state.name = action.payload
    },
    setPhone(state, action) {
        state.phone = action.payload
    },
    setAddress(state, action) {
        state.address = action.payload
    },
    setEmail(state, action) {
        state.gmail = action.payload
    },
  },
});

export const orderInformationActions = orderInformationSlice.actions;
export default orderInformationSlice;