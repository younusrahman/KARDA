import React, {useEffect, useState} from 'react'
import { ServerUpdate, ServerDelete } from 'features/Slices/ServerSlice'
import { useDispatch, useSelector } from 'react-redux'
import ModalComponent from 'component/ModalComponent'
import TabelComponent from 'component/TabelComponent'
import AddIcon from '@mui/icons-material/Add';
import HealthcareProviderForm from 'Form/HealthcareProviderForm'

import {Snackbar} from '@mui/material';
import { RefillDatabaseFunction } from 'features/RefillDatabase'


export default function HealthcareProvider() {


    const {ErrorMsg} = useSelector((state) => state.Server)
    const {GetAllHCProveiders} = useSelector((state) => state.HealthcareProvider)
    const dispatch = useDispatch()
    const [GetRow, setRow]= useState()


    useEffect(() => {
        RefillDatabaseFunction();
        
    }, [])

    

    const columns = [
      { field: 'id', headerName: 'ID', width: 300 },
      { field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true,
      },
      { field: 'joinDate',
        headerName: 'Joined Date',
        width: 150,
        editable: false,
      }
            
    ];

    const [toastMessage, SetToastMessage]  = useState(true);
    useEffect(()=>{


    }, [GetAllHCProveiders])
    




    const modal = <ModalComponent text="Lägg till vårdgivare"  icon={<AddIcon />} CustomizeForm={HealthcareProviderForm}/>

    function handelDeleteEvent(ids) {
      
        dispatch(ServerDelete({type:"HealthcareProviders", ids:ids}))
        toastMessage(true)



    }
    

  return (
    <div>
      <TabelComponent title={"Vårdgivare"} 
      type="HealthcareProviders"
      editFunc={ServerUpdate}
      values={GetAllHCProveiders} 
      allColumns={columns} 
      CustomizedModal={modal} 
      deleteOnClick={handelDeleteEvent} 
      setRow={setRow}
       />

    </div>
  )
}
