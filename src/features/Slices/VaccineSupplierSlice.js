import { createSlice } from '@reduxjs/toolkit';
import { AddAsync, UpdateAsync,DeleteAsync , RefillAsync } from "features/Slices/ServerSlice";



const initialState = {
  GetAllVaccineSuppliers: "",

};

//This name have to match CURD oparation names
const type = "VaccineSuppliers"

export const VaccineSupplierSlice = createSlice({
  name: 'VaccineSupplier',
  initialState,
  reducers: {
    SetAllVaccineSuppliers: (state, {payload}) => {
        state.GetAllVaccineSuppliers = payload;
    },

    RefillSupplier: (state) => {
      RefillAsync({type:type, func:SetAllVaccineSuppliers})
    },
    AddSupplier: (state, {payload}) => {
      AddAsync({type:type, values:payload})
    },
    UpdateSupplier: (state, {payload}) => {
      UpdateAsync({type:type,id:payload.id,values:payload.values})
    },
    DeleteSupplier: (state, {payload}) => {
      DeleteAsync({type:type, ids:payload})
    },

    

  },
  
 
 
});

export const { SetAllVaccineSuppliers,RefillSupplier, AddSupplier, UpdateSupplier, DeleteSupplier  } = VaccineSupplierSlice.actions;


export default VaccineSupplierSlice.reducer;
