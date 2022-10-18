import {createSlice } from '@reduxjs/toolkit';
import { AddAsync, UpdateAsync,DeleteAsync , RefillAsync } from "features/Slices/DatabaseIntegration/ServerSlice";
import { ModelType } from 'features/ModelType';

const initialState = {
  GetAllHCProveiders: "",
};



export const healthcareProviderSlice = createSlice({
  name: 'HealthcareProvider',
  initialState,
  reducers: {
    SetAllHCProveiders: (state, {payload}) => {

        state.GetAllHCProveiders = payload;
    },
    RefillHealthcareProvider: (state, {payload}) => {
      RefillAsync({type:ModelType.HealthcareProvider, func:SetAllHCProveiders})
    },
    AddHealthcareProvider: (state, {payload}) => {
      AddAsync({type:ModelType.HealthcareProvider, values:payload})
    },
    UpdateHealthcareProvider: (state, {payload}) => {
      UpdateAsync({type:ModelType.HealthcareProvider,id:payload.id,values:payload.values})
    },
    DeleteHealthcareProvider: (state, {payload}) => {
      DeleteAsync({type:ModelType.HealthcareProvider, ids:payload})
    },


  }
 
 
});

export const { SetAllHCProveiders,RefillHealthcareProvider, AddHealthcareProvider, UpdateHealthcareProvider, DeleteHealthcareProvider } = healthcareProviderSlice.actions;


export default healthcareProviderSlice.reducer;
