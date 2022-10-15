import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  GetAllHCProveiders: "",
};



export const healthcareProviderSlice = createSlice({
  name: 'healthcareProviderSlice',
  initialState,
  reducers: {
    SetAllHCProveiders: (state, {payload}) => {

        state.GetAllHCProveiders = payload;
    }

  }
 
 
});

export const { SetAllHCProveiders } = healthcareProviderSlice.actions;


export default healthcareProviderSlice.reducer;
