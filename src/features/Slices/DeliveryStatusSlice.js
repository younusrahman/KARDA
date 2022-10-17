import { createSlice } from '@reduxjs/toolkit';
import { AddAsync, UpdateAsync,DeleteAsync , RefillAsync } from "features/Slices/ServerSlice";


const initialState = {
  GetAllDeliveryStatus: "",
};


const type = "DeliveryStatus"
export const deliveryStatusSlice = createSlice({
  name: 'DeliveryStatus',
  initialState,
  reducers: {
    SetAllDeliveryStatus: (state, {payload}) => {

        state.GetAllDeliveryStatus = payload;
    },
    RefillDeliveryStatus: (state, {payload}) => {
      RefillAsync({type:type, func:SetAllDeliveryStatus})
    },
    AddDeliveryStatus: (state, {payload}) => {
      AddAsync({type:type, values:payload})
    },
    UpdateDeliveryStatus: (state, {payload}) => {
      UpdateAsync({type:type,id:payload.id,values:payload.values})
    },
    DeleteDeliveryStatus: (state, {payload}) => {
      DeleteAsync({type:type, ids:payload})
    },


  }
 
 
});

export const { SetAllDeliveryStatus,RefillDeliveryStatus, AddDeliveryStatus, UpdateDeliveryStatus, DeleteDeliveryStatus } = deliveryStatusSlice.actions;


export default deliveryStatusSlice.reducer;
