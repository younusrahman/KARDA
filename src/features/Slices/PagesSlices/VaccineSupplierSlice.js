import { createSlice } from '@reduxjs/toolkit';
import { AddAsync, UpdateAsync,DeleteAsync , RefillAsync } from "features/Slices/DatabaseIntegration/ServerSlice";
import { ModelType } from 'features/ModelType';



const initialState = {
  GetAllVaccineSuppliers: "",

};

//This name have to match CURD oparation names


export const VaccineSupplierSlice = createSlice({
  name: 'VaccineSupplier',
  initialState,
  reducers: {
    SetAllVaccineSuppliers: (state, {payload}) => {
        state.GetAllVaccineSuppliers = payload;
    },

    RefillSupplier: (state) => {
      RefillAsync({type:ModelType.VaccineSupplier, func:SetAllVaccineSuppliers})
    },
    AddSupplier: (state, {payload}) => {
      AddAsync({type:ModelType.VaccineSupplier, values:payload})
    },
    UpdateSupplier: (state, {payload}) => {
      UpdateAsync({type:ModelType.VaccineSupplier,id:payload.id,values:payload.values})
    },
    DeleteSupplier: (state, {payload}) => {
      DeleteAsync({type:ModelType.VaccineSupplier, ids:payload})
    },

    

  },
  
 
 
});

export const { SetAllVaccineSuppliers,RefillSupplier, AddSupplier, UpdateSupplier, DeleteSupplier  } = VaccineSupplierSlice.actions;


export default VaccineSupplierSlice.reducer;
