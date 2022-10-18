import {createSlice } from '@reduxjs/toolkit';
import { AddAsync, UpdateAsync,DeleteAsync , RefillAsync } from "features/Slices/DatabaseIntegration/ServerSlice";
import { ModelType } from 'features/ModelType';


const initialState = {
  GetAllCapacitie: "",
};



export const CapacitieSlice = createSlice({
  name: 'Capacitie',
  initialState,
  reducers: {
    SetAllCapacitie: (state, {payload}) => {
        state.GetAllCapacitie = payload;
    },
    RefillCapacitie: (state, {payload}) => {
      RefillAsync({type:ModelType.Capacitie, func:SetAllCapacitie})
    },
    AddCapacitie: (state, {payload}) => {
      AddAsync({type:ModelType.Capacitie, values:payload})
    },
    UpdateCapacitie: (state, {payload}) => {
      UpdateAsync({type:ModelType.Capacitie,id:payload.id,values:payload.values})
    },
    DeleteCapacitie: (state, {payload}) => {
      DeleteAsync({type:ModelType.Capacitie, ids:payload})
    },


  }
 
 
});

export const { SetAllCapacitie,RefillCapacitie, AddCapacitie, UpdateCapacitie, DeleteCapacitie } = CapacitieSlice.actions;


export default CapacitieSlice.reducer;
