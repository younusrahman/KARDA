import { createSlice } from '@reduxjs/toolkit';
import { ModelType } from 'features/ModelType';
import { AddAsync, UpdateAsync,DeleteAsync , RefillAsync } from "features/Slices/DatabaseIntegration/ServerSlice";


const initialState = {
  GetAllInventoryBalance: "",
};




export const InventoryBalanceSlice = createSlice({
  name: 'InventoryBalance',
  initialState,
  reducers: {
    SetAllInventoryBalance: (state, {payload}) => {

        state.GetAllInventoryBalance = payload;
    },
    RefillInventoryBalance: (state, {payload}) => {
      RefillAsync({type:ModelType.InventoryBalance, func:SetAllInventoryBalance})
    },
    AddInventoryBalance: (state, {payload}) => {
      AddAsync({type:ModelType.InventoryBalance, values:payload})
    },
    UpdateInventoryBalance: (state, {payload}) => {
      UpdateAsync({type:ModelType.InventoryBalance,id:payload.id,values:payload.values})
    },
    DeleteInventoryBalance: (state, {payload}) => {
      DeleteAsync({type:ModelType.InventoryBalance, ids:payload})
    },


  }
 
 
});

export const { SetAllInventoryBalance, RefillInventoryBalance, AddInventoryBalance, UpdateInventoryBalance, DeleteInventoryBalance } = InventoryBalanceSlice.actions;


export default InventoryBalanceSlice.reducer;
