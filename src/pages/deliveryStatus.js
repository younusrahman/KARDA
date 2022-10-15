import React, {useEffect, useState} from 'react'
import { ServerUpdate, ServerDelete } from 'features/Slices/ServerSlice'
import { useDispatch, useSelector } from 'react-redux'
import ModalComponent from 'component/ModalComponent'
import TabelComponent from 'component/TabelComponent'
import AddIcon from '@mui/icons-material/Add';

import {Snackbar} from '@mui/material';
import { RefillDatabaseFunction } from 'features/RefillDatabase'
import DeliveryStatusForm from 'Form/DeliveryStatusForm'


export default function DeliveryStatus() {


    const {ErrorMsg} = useSelector((state) => state.Server)
    const {GetAllDeliveryStatus} = useSelector((state) => state.DeliveryStatus)
    const dispatch = useDispatch()
    const [GetRow, setRow]= useState()


    useEffect(() => {
        RefillDatabaseFunction();
        
    }, [])

    

    const columns = [
      { field: 'id', headerName: 'ID', width: 300 },
      { field: 'deliveryDate',
        headerName: 'Leverans datum',
        width: 150,
        editable: true,
      }
      ,
      { field: 'plannedDeliveryDate',
        headerName: 'Planerat lev. datum',
        width: 150,
        editable: true,
      }
      ,
      { field: 'quantityVial',
        headerName: 'Kvantitet vial',
        width: 150,
        editable: true,
      }
      ,
      { field: 'gln',
        headerName: 'GLN - Mottagare',
        width: 150,
        editable: true,
      }
      ,
      { field: 'vaccineSupplierId',
        headerName: 'Vaccin leverantör',
        width: 150,
        editable: false,
      }
      ,
      { field: 'healthcareProvidersId',
        headerName: 'Välja vårdgivare',
        width: 150,
        editable: false,
      }
            
    ];


    




    const modal = <ModalComponent text="Lagersaldo"  icon={<AddIcon />} CustomizeForm={DeliveryStatusForm}/>

    function handelDeleteEvent(ids) {
      
        dispatch(ServerDelete({type:"DeliveryStatus", ids:ids}))
     

    }
    

  return (
    <div>
      <TabelComponent title={"Lagersaldo"} 
      type="DeliveryStatus"
      editFunc={ServerUpdate}
      values={GetAllDeliveryStatus} 
      allColumns={columns} 
      CustomizedModal={modal} 
      deleteOnClick={handelDeleteEvent} 
      setRow={setRow}
       />

    </div>
  )
}
