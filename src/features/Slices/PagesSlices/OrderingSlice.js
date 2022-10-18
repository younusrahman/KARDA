import { createSlice } from '@reduxjs/toolkit';
import { ModelType } from 'features/ModelType';
import { AddAsync, UpdateAsync,DeleteAsync , RefillAsync } from "features/Slices/DatabaseIntegration/ServerSlice";


const initialState = {
  GetAllOrders: "",
};



export const OrderingSlice = createSlice({
  name: 'Ordering',
  initialState,
  reducers: {
    SetAllOrders: (state, {payload}) => {

        state.GetAllOrders = payload;
    },

    RefillOrders: (state, {payload}) => {
      RefillAsync({type:ModelType.Ordering, func:SetAllOrders})
    },
    AddOrders: (state, {payload}) => {
      AddAsync({type:ModelType.Ordering, values:payload})
    },
    UpdateOrders: (state, {payload}) => {
      UpdateAsync({type:ModelType.Ordering,id:payload.id,values:payload.values})
    },
    DeleteOrders: (state, {payload}) => {
      DeleteAsync({type:ModelType.Ordering, ids:payload})
    },




  }
 
 
});

export const { SetAllOrders, RefillOrders, AddOrders , UpdateOrders, DeleteOrders} = OrderingSlice.actions;


export default OrderingSlice.reducer;
