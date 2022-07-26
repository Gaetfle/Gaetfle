import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Nguyễn Sơn",
  phone: "+84 0335 460 332",
  street: "17 Trường Sa",
  ward: "Phường 1",
  district: "Quận Tân Bình", 
  province: "Hồ Chí Minh",
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
    setStreet(state, action) {
        state.street = action.payload
    },
    setWard(state, action) {
        state.ward = action.payload
    },
    setDistrict(state, action) {
      state.district = action.payload
    },
    setProvince(state, action) {
      state.province = action.payload
    },
    setEmail(state, action) {
        state.gmail = action.payload
    },
  },
});

export const orderInformationActions = orderInformationSlice.actions;
export default orderInformationSlice;