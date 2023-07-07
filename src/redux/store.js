import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from "./slices/orders.slice";
import authReducer from "./slices/auth.slice";
import usersReducer from "./slices/users.slice";
const reducer = {
    //add slices
    auth: authReducer,
    users: usersReducer,
};
const store = configureStore({
    reducer: {
        [ordersSlice.name]: ordersSlice.reducer,
        auth: authReducer
    },
    devTools: true,
});
export default store;