import { privateApi } from "@/utils/axios.config";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getOrders = createAsyncThunk(
    'orders/getOrders',
    async(_, { rejectWithValue }) => {
        try {
            const res = await privateApi.get('orders');
            return res.data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)