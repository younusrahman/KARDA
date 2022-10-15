import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  GetAllCapacitie: "",
};



export const CapacitieSlice = createSlice({
  name: 'Capacitie',
  initialState,
  reducers: {
    SetAllCapacitie: (state, {payload}) => {
        state.GetAllCapacitie = payload;
    }

  }
 
 
});

export const { SetAllCapacitie } = CapacitieSlice.actions;


export default CapacitieSlice.reducer;
