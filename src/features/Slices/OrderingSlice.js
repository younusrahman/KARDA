import { createSlice } from '@reduxjs/toolkit';
import { AddAsync, UpdateAsync,DeleteAsync , RefillAsync } from "features/Slices/ServerSlice";



const initialState = {
  GetAllOrders: "",
};
const type = "Orderings"


export const OrderingSlice = createSlice({
  name: 'Ordering',
  initialState,
  reducers: {
    SetAllOrders: (state, {payload}) => {

        state.GetAllOrders = payload;
    },

    RefillOrders: (state, {payload}) => {
      RefillAsync({type:type, func:SetAllOrders})
    },
    AddOrders: (state, {payload}) => {
      AddAsync({type:type, values:payload})
    },
    UpdateOrders: (state, {payload}) => {
      UpdateAsync({type:type,id:payload.id,values:payload.values})
    },
    DeleteOrders: (state, {payload}) => {
      DeleteAsync({type:type, ids:payload})
    },




  }
 
 
});

export const { SetAllOrders, RefillOrders, AddOrders , UpdateOrders, DeleteOrders} = OrderingSlice.actions;


export default OrderingSlice.reducer;
