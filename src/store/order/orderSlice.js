import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderlistItems: [{
        id: "GT88",
        date: "19/7/2022",
        total: "1000000",
        status: "pending",
        payment: "BIDV",
    }, {
        id: "GT89",
        date: "19/7/2022",
        total: "1000000",
        status: "pending",
        payment: "BIDV",
    },
    {
        id: "GT90",
        date: "19/7/2022",
        total: "1000000",
        status: "pending",
        payment: "BIDV",
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
