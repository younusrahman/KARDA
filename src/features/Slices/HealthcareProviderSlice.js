import {createSlice } from '@reduxjs/toolkit';
import { AddAsync, UpdateAsync,DeleteAsync , RefillAsync } from "features/Slices/ServerSlice";



const initialState = {
  GetAllHCProveiders: "",
};

const type = "HealthcareProviders"

export const healthcareProviderSlice = createSlice({
  name: 'HealthcareProvider',
  initialState,
  reducers: {
    SetAllHCProveiders: (state, {payload}) => {

        state.GetAllHCProveiders = payload;
    },
    RefillHealthcareProvider: (state, {payload}) => {
      RefillAsync({type:type, func:SetAllHCProveiders})
    },
    AddHealthcareProvider: (state, {payload}) => {
      AddAsync({type:type, values:payload})
    },
    UpdateHealthcareProvider: (state, {payload}) => {
      UpdateAsync({type:type,id:payload.id,values:payload.values})
    },
    DeleteHealthcareProvider: (state, {payload}) => {
      DeleteAsync({type:type, ids:payload})
    },


  }
 
 
});

export const { SetAllHCProveiders,RefillHealthcareProvider, AddHealthcareProvider, UpdateHealthcareProvider, DeleteHealthcareProvider } = healthcareProviderSlice.actions;


export default healthcareProviderSlice.reducer;
