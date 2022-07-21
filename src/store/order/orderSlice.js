import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderlistItems: [{
        id: "GT88",
        date: "19/7/2022",
        total: "2,350,000",
        status: "pending",
        payment: "VPBank",
    }, {
        id: "GT89",
        date: "19/7/2022",
        total: "2,000,000",
        status: "pending",
        payment: "VPBank",
    }]
};

const orderlistSlice = createSlice({
    name: "orderlist",
    initialState,

    reducers: {
        // =========== add item ============
        addItem(state, action) {
            const newItem = action.payload;
            state.orderlistItems.push({
                id: newItem.id,
                date: newItem.date,
                total: newItem.total,
                status: "pending",
                payment: newItem.payment,
            });
        },

    },
});

export const orderlistActions = orderlistSlice.actions;
export default orderlistSlice;
