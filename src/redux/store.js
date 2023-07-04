import { configureStore } from "@reduxjs/toolkit";
const reducer = {
  //add slices
};
const store = configureStore({
  reducer: reducer,
  devTools: true,
});
export default store;
