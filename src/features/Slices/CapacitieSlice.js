import {createSlice } from '@reduxjs/toolkit';
import { AddAsync, UpdateAsync,DeleteAsync , RefillAsync } from "features/Slices/ServerSlice";



const initialState = {
  GetAllCapacitie: "",
};

const type = "Capacities"

export const CapacitieSlice = createSlice({
  name: 'Capacitie',
  initialState,
  reducers: {
    SetAllCapacitie: (state, {payload}) => {
        state.GetAllCapacitie = payload;
    },
    RefillCapacitie: (state, {payload}) => {
      RefillAsync({type:type, func:SetAllCapacitie})
    },
    AddCapacitie: (state, {payload}) => {
      AddAsync({type:type, values:payload})
    },
    UpdateCapacitie: (state, {payload}) => {
      UpdateAsync({type:type,id:payload.id,values:payload.values})
    },
    DeleteCapacitie: (state, {payload}) => {
      DeleteAsync({type:type, ids:payload})
    },


  }
 
 
});

export const { SetAllCapacitie,RefillCapacitie, AddCapacitie, UpdateCapacitie, DeleteCapacitie } = CapacitieSlice.actions;


export default CapacitieSlice.reducer;
