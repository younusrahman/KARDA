import { createSlice } from '@reduxjs/toolkit';
import { AddAsync, UpdateAsync,DeleteAsync , RefillAsync } from "features/Slices/DatabaseIntegration/ServerSlice";
import { ModelType } from 'features/ModelType';

const initialState = {
  GetAllDeliveryStatus: "",
};


export const deliveryStatusSlice = createSlice({
  name: 'DeliveryStatus',
  initialState,
  reducers: {
    SetAllDeliveryStatus: (state, {payload}) => {

        state.GetAllDeliveryStatus = payload;
    },
    RefillDeliveryStatus: (state, {payload}) => {
      RefillAsync({type:ModelType.DeliveryStatus, func:SetAllDeliveryStatus})
    },
    AddDeliveryStatus: (state, {payload}) => {
      AddAsync({type:ModelType.DeliveryStatus, values:payload})
    },
    UpdateDeliveryStatus: (state, {payload}) => {
      UpdateAsync({type:ModelType.DeliveryStatus,id:payload.id,values:payload.values})
    },
    DeleteDeliveryStatus: (state, {payload}) => {
      DeleteAsync({type:ModelType.DeliveryStatus, ids:payload})
    },


  }
 
 
});

export const { SetAllDeliveryStatus,RefillDeliveryStatus, AddDeliveryStatus, UpdateDeliveryStatus, DeleteDeliveryStatus } = deliveryStatusSlice.actions;


export default deliveryStatusSlice.reducer;
