import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  GetAllOrders: "",
};



export const OrderingSlice = createSlice({
  name: 'Ordering',
  initialState,
  reducers: {
    SetAllOrders: (state, {payload}) => {

        state.GetAllOrders = payload;
    }

  }
 
 
});

export const { SetAllOrders } = OrderingSlice.actions;


export default OrderingSlice.reducer;
