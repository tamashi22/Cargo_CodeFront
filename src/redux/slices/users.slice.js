import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserApi,
  createOrderApi,
  createPaymentApi,
  changePaymentStatusApi,
} from "@/services/usersService";

export const getUser = createAsyncThunk("user/id", async (obj, thunkAPI) => {
  try {
    const data = await getUserApi(obj);
    return data;
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue();
  }
});
export const createOrder = createAsyncThunk(
  "order/create-order",
  async (obj, thunkAPI) => {
    try {
      const data = await createOrderApi(obj);
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue();
    }
  }
);
export const createPayment = createAsyncThunk(
  "order/payment",
  async (obj, thunkAPI) => {
    try {
      const data = await createPaymentApi(obj);
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue();
    }
  }
);
export const changePaymentStatus = createAsyncThunk(
  "order/paymentStatus",
  async (obj, thunkAPI) => {
    try {
      const data = await changePaymentStatusApi(obj);
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = {
  isStatusChange: false,
  isOrderCreated: false,
  isPaymentCreated: false,
  user: "",
  orderData: "",
  paymentData: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,

  extraReducers: {
    [getUser.pending]: (state) => {},
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [getUser.rejected]: (state) => {},

    [createOrder.pending]: (state) => {
      state.isOrderCreated = false;
    },
    [createOrder.fulfilled]: (state, action) => {
      state.isOrderCreated = true;
      state.orderData = action.payload;
    },
    [createOrder.rejected]: (state) => {
      state.isOrderCreated = false;
    },

    [createPayment.pending]: (state) => {
      state.isPaymentCreated = false;
    },
    [createPayment.fulfilled]: (state, action) => {
      state.isPaymentCreated = true;
      state.paymentData = action.payload;
    },
    [createPayment.rejected]: (state) => {
      state.isPaymentCreated = false;
    },

    [changePaymentStatus.pending]: (state) => {
      state.isStatusChange = false;
    },
    [changePaymentStatus.fulfilled]: (state, action) => {
      state.isStatusChange = true;
    },
    [changePaymentStatus.rejected]: (state) => {
      isStatusChange = false;
    },
  },
});
const { reducer } = usersSlice;
export const {} = usersSlice.actions;
export default reducer;
