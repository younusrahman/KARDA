import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { store } from "app/store";



const  baseUrl = "https://localhost:7133/api";



async function GetAllAsync(props){

  const url = `${baseUrl}/${props.type}`

    await axios({
        method: 'GET',
        url, 
        headers:{'Content-Type': 'application/json; charset=utf-8'}
    })    
    .then((response) => {
      store.dispatch(ServerGetAllForStatus("fulfilled"))
      store.dispatch(props.func(response.data))
      return;
    })
    .catch((error) => {
      store.dispatch(ServerGetAllError( {status:"rejected", errorDetails : error}))
      return;

    });
  
}


async function AddAsync({type, values}){

  const url = `${baseUrl}/${type}`

    await axios({
        method: 'POST',
        url, 
        data: JSON.stringify(values), 
        headers:{'Content-Type': 'application/json; charset=utf-8'}
    })    
    .then((response) => {
      store.dispatch(ServerAddForStatus("fulfilled"))
      return;
    })
    .catch((error) => {
      store.dispatch(ServerAddError( {status:"rejected", errorDetails : error}))
      return;

    });
  
}


async function UpdateAsync({type, id, values}){
  const url = `${baseUrl}/${type}/${id}`

  console.log(id);
  console.log(JSON.stringify(values));

    await axios({
        method: 'PUT',
        url, 
        data: JSON.stringify(values), 
        headers:{'Content-Type': 'application/json; charset=utf-8'}
    })    
    .then((response) => {
      store.dispatch(ServerUpdateForStatus("fulfilled"))
      return;
    })
    .catch((error) => {
      store.dispatch(ServerUpdateError( {status:"rejected", errorDetails : error}))
      return;

    });
  
}


async function DeleteAsync({type, ids}){

  const url = `${baseUrl}/${type}`

    await axios({
        method: 'DELETE',
        url, 
        data: JSON.stringify(ids), 
        headers:{'Content-Type': 'application/json; charset=utf-8'}
    })    
    .then((response) => {
      store.dispatch(ServerAddForStatus("fulfilled"))
      return;
    })
    .catch((error) => {
      store.dispatch(ServerAddError( {status:"rejected", errorDetails : error}))
      return;

    });


  // const url = `${baseUrl}/${type}/${id}`

  //   console.log(url)
  //   console.log(type)
  //   console.log(id)
  //   await axios.delete(url)
  //   .then(response => store.dispatch(ServerDeleteForStatus("fulfilled")))
  //   .catch(error => {
  //     store.dispatch(ServerDeleteError( {status:"rejected", errorDetails : error}))
  //   });  
}




// ------------------------------------------Slice



const initialState = {
  GetAll: {
    status : "idle",
    ErrorMsg : "",
  },
  Add: {
    status : "idle",
    ErrorMsg : "",
  },
  Update: {
    status : "idle",
    ErrorMsg : "",
  },
  Delete: {
    status : "idle",
    ErrorMsg : "",
  }

  
}


export const ServerSlice = createSlice({
  name: 'server/CURD',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    ServerGetAll : (state, {payload}) => {
      state.GetAll.status = "waiting"
      GetAllAsync({type:payload.type, func : payload.func})

    },
  
    ServerGetAllForStatus : (state, {payload}) => {
      state.GetAll.status = payload
    },
    ServerGetAllError: (state, {payload}) => {
      state.GetAll.status = payload.status
      state.GetAll.ErrorMsg = payload.errorDetails;

    },



    ServerAdd : (state, {payload}) => {
      
      state.Add.status = "waiting"
      AddAsync({type:payload.type, values:payload.values})

    },
  
    ServerAddForStatus : (state, {payload}) => {
      state.Add.status = payload
    },
    ServerAddError: (state, {payload}) => {
      state.Add.status = payload.status
      state.Add.ErrorMsg = payload.errorDetails;

    },

    ServerUpdate : (state, {payload}) => {
      state.GetAll.status = "waiting"
      UpdateAsync({type:payload.type, id:payload.id, values:payload.values})

    },
  
    ServerUpdateForStatus : (state, {payload}) => {
      state.Update.status = payload
    },
    ServerUpdateError: (state, {payload}) => {
      state.Update.status = payload.status
      state.Update.ErrorMsg = payload.errorDetails;

    },
    ServerDelete : (state, {payload}) => {
      state.GetAll.status = "waiting"

      DeleteAsync({type:payload.type, ids:payload.ids})
      
      // DeleteAsync({type:payload.type, id:payload.id})
    },
  
    ServerDeleteForStatus : (state, {payload}) => {

      state.Delete.status = payload
    },
    ServerDeleteError: (state, {payload}) => {
      state.Delete.status = payload.status
      state.Delete.ErrorMsg = payload.errorDetails;

    }


    
  },
});

export const {
  ServerGetAll, ServerGetAllForStatus, ServerGetAllError,
  ServerAdd,ServerAddForStatus,ServerAddError,
  ServerUpdate,ServerUpdateForStatus,ServerUpdateError,
  ServerDelete,ServerDeleteForStatus,ServerDeleteError} = ServerSlice.actions;


export default ServerSlice.reducer;


















