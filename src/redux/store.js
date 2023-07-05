import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from "./slices/orders.slice";
const reducer = {
    //add slices
};
const store = configureStore({
    reducer: {
        [ordersSlice.name]: ordersSlice.reducer
    },
    devTools: true,
});
export default store;