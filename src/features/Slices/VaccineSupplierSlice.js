import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  GetAllVaccineSuppliers: "",
};



export const VaccineSupplierSlice = createSlice({
  name: 'VaccineSupplier',
  initialState,
  reducers: {
    SetAllVaccineSuppliers: (state, {payload}) => {

        state.GetAllVaccineSuppliers = payload;
    }

  }
 
 
});

export const { SetAllVaccineSuppliers } = VaccineSupplierSlice.actions;


export default VaccineSupplierSlice.reducer;
