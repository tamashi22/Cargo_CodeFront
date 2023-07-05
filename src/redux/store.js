import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from "./slices/orders.slice";
import authReducer from "./slices/auth.slice";

const store = configureStore({
    reducer: {
        [ordersSlice.name]: ordersSlice.reducer,
        auth: authReducer
    },
    devTools: true,
});
export default store;