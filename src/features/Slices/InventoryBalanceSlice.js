import { createSlice } from '@reduxjs/toolkit';
import { AddAsync, UpdateAsync,DeleteAsync , RefillAsync } from "features/Slices/ServerSlice";


const initialState = {
  GetAllInventoryBalance: "",
};

const type = "InventoryBalances"

export const InventoryBalanceSlice = createSlice({
  name: 'InventoryBalance',
  initialState,
  reducers: {
    SetAllInventoryBalance: (state, {payload}) => {

        state.GetAllInventoryBalance = payload;
    },
    RefillInventoryBalance: (state, {payload}) => {
      RefillAsync({type:type, func:SetAllInventoryBalance})
    },
    AddInventoryBalance: (state, {payload}) => {
      AddAsync({type:type, values:payload})
    },
    UpdateInventoryBalance: (state, {payload}) => {
      UpdateAsync({type:type,id:payload.id,values:payload.values})
    },
    DeleteInventoryBalance: (state, {payload}) => {
      DeleteAsync({type:type, ids:payload})
    },


  }
 
 
});

export const { SetAllInventoryBalance, RefillInventoryBalance, AddInventoryBalance, UpdateInventoryBalance, DeleteInventoryBalance } = InventoryBalanceSlice.actions;


export default InventoryBalanceSlice.reducer;
