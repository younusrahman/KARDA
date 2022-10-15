import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  GetAllDeliveryStatus: "",
};



export const deliveryStatusSlice = createSlice({
  name: 'DeliveryStatus',
  initialState,
  reducers: {
    SetAllDeliveryStatus: (state, {payload}) => {

        state.GetAllDeliveryStatus = payload;
    }

  }
 
 
});

export const { SetAllDeliveryStatus } = deliveryStatusSlice.actions;


export default deliveryStatusSlice.reducer;
