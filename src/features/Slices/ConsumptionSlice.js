import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  GetAllConsumption: "",
};



export const ConsumptionSlice = createSlice({
  name: 'consumption',
  initialState,
  reducers: {
    SetAllConsumption: (state, {payload}) => {

        state.GetAllConsumption = payload;
    }

  }
 
 
});

export const { SetAllConsumption } = ConsumptionSlice.actions;


export default ConsumptionSlice.reducer;
