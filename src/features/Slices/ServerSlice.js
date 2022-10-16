import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { store } from "app/store";



const  baseUrl = "https://localhost:7133/api";
const statusType= {idle:"Idle", loading : "Loading", fulfilled : "Fulfilled", rejected : "Rejected"  }



export async function RefillAsync(props){

  
  const url = `${baseUrl}/${props.type}`

    await axios({
        method: 'GET',
        url, 
        headers:{'Content-Type': 'application/json; charset=utf-8'}
    })    
    .then((response) => {
      store.dispatch(ServerRefillSuccess())
      store.dispatch(props.func(response.data))
      return;
    })
    .catch((error) => {
      store.dispatch(ServerRefillError(error))
      return;

    });
  
}


export async function AddAsync({type, values}){


  const url = `${baseUrl}/${type}`

    await axios({
        method: 'POST',
        url, 
        data: JSON.stringify(values), 
        headers:{'Content-Type': 'application/json; charset=utf-8'}
    })    
    .then((response) => {
      store.dispatch(ServerAddSuccess())
      return;
    })
    .catch((error) => {
      store.dispatch(ServerAddError(error))
      return;

    });
  
}


export async function UpdateAsync({type, id, values}){
  const url = `${baseUrl}/${type}/${id}`
    
    await axios({
        method: 'PUT',
        url, 
        data: JSON.stringify(values), 
        headers:{'Content-Type': 'application/json; charset=utf-8'}
    })    
    .then((response) => {
      store.dispatch(ServerUpdateSuccess())
      return;
    })
    .catch((error) => {
      store.dispatch(ServerUpdateError(error))
      return;

    });
  
}


export async function DeleteAsync({type, ids}){

  const url = `${baseUrl}/${type}`

    await axios({
        method: 'DELETE',
        url, 
        data: JSON.stringify(ids), 
        headers:{'Content-Type': 'application/json; charset=utf-8'}
    })    
    .then((response) => {
      store.dispatch(ServerDeleteSuccess())
      return;
    })
    .catch((error) => {
      store.dispatch(ServerDeleteError(error))
      return;

    });

}




// ------------------------------------------Slice


//Status Variable
const initialState = {
  Refill: {
    status : statusType.idle,
    ErrorMsg : "",
  },
  Add: {
    status : statusType.idle,
    ErrorMsg : "",
  },
  Update: {
    status : statusType.idle,
    ErrorMsg : "",
  },
  Delete: {
    status : statusType.idle,
    ErrorMsg : "",
  }

  
}

//Maintain CURD oparations status only
export const ServerSlice = createSlice({
  name: 'server/status',
  initialState,
  reducers: {  
    ServerRefillSuccess : (state) => {
      state.Refill.status = statusType.fulfilled
    },
    ServerRefillError: (state, {payload}) => {
      state.Refill.status = statusType.rejected
      state.Refill.ErrorMsg = payload;

    },


    ServerAddSuccess : (state) => {
      state.Add.status = statusType.fulfilled
    },
    ServerAddError: (state, {payload}) => {
      state.Add.status = statusType.rejected
      state.Add.ErrorMsg = payload;
    },


  
    ServerUpdateSuccess: (state) => {
      state.Update.status = statusType.fulfilled
    },
    ServerUpdateError: (state,{payload}) => {
      state.Update.status = statusType.rejected
      state.Update.ErrorMsg = payload;

    },

  
    ServerDeleteSuccess : (state) => {
      state.Delete.status = statusType.fulfilled
    },
    ServerDeleteError: (state, {payload}) => {
      state.Delete.status = statusType.rejected
      state.Delete.ErrorMsg = payload;}
  
  },
});


  export const {
    ServerRefillSuccess, ServerRefillError,
    ServerAddSuccess , ServerAddError,
    ServerUpdateSuccess, ServerUpdateError,
    ServerDeleteSuccess, ServerDeleteError

  } = ServerSlice.actions;
export default ServerSlice.reducer;