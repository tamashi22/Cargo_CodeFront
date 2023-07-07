import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import usersReducer from "./slices/users.slice";
const reducer = {
  //add slices
  auth: authReducer,
  users: usersReducer,
};
const store = configureStore({
  reducer: reducer,
  devTools: true,
});
export default store;
