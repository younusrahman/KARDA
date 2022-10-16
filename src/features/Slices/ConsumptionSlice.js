import {createSlice } from '@reduxjs/toolkit';
import { AddAsync, UpdateAsync,DeleteAsync , RefillAsync } from "features/Slices/ServerSlice";


const initialState = {
  GetAllConsumption: "",
};

const type = "Consumptions"

export const ConsumptionSlice = createSlice({
  name: 'Consumption',
  initialState,
  reducers: {
    SetAllConsumption: (state, {payload}) => {
        state.GetAllConsumption = payload;
    },
    RefillConsumption: (state, {payload}) => {
      RefillAsync({type:type, func:SetAllConsumption})
    },
    AddConsumption: (state, {payload}) => {
      AddAsync({type:type, values:payload})
    },
    UpdateConsumption: (state, {payload}) => {
      UpdateAsync({type:type,id:payload.id,values:payload.values})
    },
    DeleteConsumption: (state, {payload}) => {
      DeleteAsync({type:type, ids:payload})
    },


  }
 
 
});

export const { SetAllConsumption,RefillConsumption, AddConsumption, UpdateConsumption, DeleteConsumption } = ConsumptionSlice.actions;


export default ConsumptionSlice.reducer;
