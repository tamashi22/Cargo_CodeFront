import { getMyOrdersApi, getOrders } from "@/services/ordersService";
import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

const getUser = () => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem('access_token');
        if (token) {
            const user = jwt_decode(token);
            return user;
        }
    }
    return null;
}

const initialState = {
    orders: [],
    selectedOrder: null,
    selectedMyOrder: null,
    myOrders: [],
    myActiveOrder: null,
    user: getUser(),
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
        selectMyOrder: (state, { payload: orderId }) => {
            const order = state.myOrders.find(order => order.id === orderId);
            if (order) {
                state.selectedMyOrder = order;
            }
        },
        unselectOrder: (state) => {
            state.selectedOrder = null;
        },
        unselectMyOrder: (state) => {
            state.selectedMyOrder = null;
        },
        addOrder: (state, { payload: order }) => {
            if (!state.orders.some(item => item.id === order.id)) {
                state.orders.unshift(order);
            }
        },
        setAllMessage: (state, { payload }) => {
            const orderIndex = state.myOrders.findIndex(order => order.id === payload.orderId);
            if (orderIndex > -1) {
                state.myOrders[orderIndex]['chat'] = payload.data;
            }
        },
        setMessage: (state, { payload }) => {
            const orderIndex = state.orders.findIndex(order => order.id === payload.orderId);
            if (orderIndex > -1) {
                state.orders[orderIndex]['chat'] = [payload.data, ...state.orders[orderIndex]['chat']];
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
        },
        [getMyOrdersApi.pending]: (state) => {
            state.status = 'Loading my orders';
            state.error = null;
        },
        [getMyOrdersApi.fulfilled]: (state, { payload }) => {
            state.myOrders = payload;
            const activeStatuses = ['accepted', 'on_way'];
            const activeOrder = payload.find((order) => activeStatuses.includes(order.status));
            if (activeOrder) {
                state.myActiveOrder = activeOrder;
            }
        }
    }
});

export const {
    selectOrder,
    selectMyOrder,
    unselectMyOrder,
    addOrder,
    setAllMessage,
    unselectOrder
} = ordersSlice.actions;

export default ordersSlice;