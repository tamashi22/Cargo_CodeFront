import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  createCarrierApi,
  createCompanyApi,
  createOperatorApi,
  createShipperApi,
  loginApi,
} from "@/services/AuthService";
let token = null;
if (typeof window !== "undefined") {
  token = localStorage.getItem("access_token");
}

export const login = createAsyncThunk("auth/login", async (obj, thunkAPI) => {
  try {
    const data = await loginApi(obj);
    return data;
  } catch (error) {
    console.log(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const createCarrier = createAsyncThunk(
  "user/carrier",
  async (obj, thunkAPI) => {
    try {
      const data = await createCarrierApi(obj);
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue();
    }
  }
);
export const createShipper = createAsyncThunk(
  "user/shipper",
  async (obj, thunkAPI) => {
    try {
      const data = await createShipperApi(obj);
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue();
    }
  }
);
export const createCompany = createAsyncThunk(
  "companies/create-company",
  async (obj, thunkAPI) => {
    try {
      const data = await createCompanyApi(obj);
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue();
    }
  }
);
export const createOperator = createAsyncThunk(
  "users/operator",
  async (obj, thunkAPI) => {
    try {
      const data = await createOperatorApi(obj);
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue();
    }
  }
);
const IsLogin = () =>
  token
    ? { isLoggedIn: true, access_token: token }
    : { isLoggedIn: false, access_token: "" };
const initialState = {
  ...IsLogin(),
  IsSignUp: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.access_token = "";
      localStorage.removeItem("access_token");
    },
  },

  extraReducers: {
    [createCarrier.pending]: (state) => {
      state.IsSignUp = false;
    },
    [createCarrier.fulfilled]: (state) => {
      state.IsSignUp = true;
    },
    [createCarrier.rejected]: (state) => {
      state.IsSignUp = false;
    },

    [createShipper.pending]: (state) => {
      state.IsSignUp = false;
    },
    [createShipper.fulfilled]: (state) => {
      state.IsSignUp = true;
    },
    [createShipper.rejected]: (state) => {
      state.IsSignUp = false;
    },

    [createCompany.pending]: (state) => {
      state.IsSignUp = false;
    },
    [createCompany.fulfilled]: (state) => {
      state.IsSignUp = true;
    },
    [createCompany.rejected]: (state) => {
      state.IsSignUp = false;
    },

    [createOperator.pending]: (state) => {
      state.IsSignUp = false;
    },
    [createOperator.fulfilled]: (state) => {
      state.IsSignUp = true;
    },
    [createOperator.rejected]: (state) => {
      state.IsSignUp = false;
    },

    [login.pending]: (state) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.access_token = action.payload.access_token;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoggedIn = false;
      state.error = payload;
    },
  },
});
const { reducer } = authSlice;
export const { logout } = authSlice.actions;
export default reducer;
