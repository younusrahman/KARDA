import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  Status: false
};



export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    ChangeModalStatus: (state, {payload}) => {

        state.Status = payload;
    }

  }
 
 
});

export const { ChangeModalStatus } = modalSlice.actions;


export default modalSlice.reducer;
