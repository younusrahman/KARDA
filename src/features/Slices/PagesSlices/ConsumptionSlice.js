import {createSlice } from '@reduxjs/toolkit';
import { AddAsync, UpdateAsync,DeleteAsync , RefillAsync } from "features/Slices/DatabaseIntegration/ServerSlice";
import { ModelType } from 'features/ModelType';

const initialState = {
  GetAllConsumption: "",
};


export const ConsumptionSlice = createSlice({
  name: 'Consumption',
  initialState,
  reducers: {
    SetAllConsumption: (state, {payload}) => {
        state.GetAllConsumption = payload;
    },
    RefillConsumption: (state, {payload}) => {
      RefillAsync({type:ModelType.Consumption, func:SetAllConsumption})
    },
    AddConsumption: (state, {payload}) => {
      AddAsync({type:ModelType.Consumption, values:payload})
    },
    UpdateConsumption: (state, {payload}) => {
      UpdateAsync({type:ModelType.Consumption,id:payload.id,values:payload.values})
    },
    DeleteConsumption: (state, {payload}) => {
      DeleteAsync({type:ModelType.Consumption, ids:payload})
    },


  }
 
 
});

export const { SetAllConsumption,RefillConsumption, AddConsumption, UpdateConsumption, DeleteConsumption } = ConsumptionSlice.actions;


export default ConsumptionSlice.reducer;
