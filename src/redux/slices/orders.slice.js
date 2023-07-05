import { getOrders } from "@/services/ordersService";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    selectedOrder: null,
    myOrders: [],
    myActiveOrder: null,
    status: 'OK',
    error: null
}

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        selectOrder: (state, { payload: orderId }) => {
            const order = state.orders.find((order) => order.id === orderId);
            if (order) {
                state.selectedOrder = order;
            }
        },
        addOrder: (state, { payload: order }) => {
            if (!state.orders.some(item => item.id === order.id)) {
                state.orders.unshift(order);
            }
        }
    },
    extraReducers: {
        [getOrders.pending]: (state) => {
            state.status = 'Loading orders';
            state.error = null;
        },
        [getOrders.fulfilled]: (state, { payload }) => {
            state.orders = payload;
            state.status = 'OK';
        },
        [getOrders.rejected]: (state, { payload }) => {
            state.error = payload;
            state.status = 'ERROR';
        }
    }
});

export const {
    selectOrder,
    addOrder
} = ordersSlice.actions;

export default ordersSlice;