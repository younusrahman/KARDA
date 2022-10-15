import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  GetAllInventoryBalance: "",
};



export const InventoryBalanceSlice = createSlice({
  name: 'InventoryBalance',
  initialState,
  reducers: {
    SetAllInventoryBalance: (state, {payload}) => {

        state.GetAllInventoryBalance = payload;
    }

  }
 
 
});

export const { SetAllInventoryBalance } = InventoryBalanceSlice.actions;


export default InventoryBalanceSlice.reducer;
