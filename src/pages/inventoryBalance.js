

import React, {useEffect, useState} from 'react'
import { ServerUpdate, ServerDelete } from 'features/Slices/ServerSlice'
import { useSelector, useDispatch } from 'react-redux'
import ModalComponent from 'component/ModalComponent'
import TabelComponent from 'component/TabelComponent'
import AddIcon from '@mui/icons-material/Add';
import { RefillDatabaseFunction } from 'features/RefillDatabase'
import InventoryBalanceForm from 'Form/InventoryBalanceForm'



export default function InventoryBalance() {


    const {GetAllInventoryBalance} = useSelector((state) => state.InventoryBalance)
    const [GetRow, setRow]= useState()
    const dispatch = useDispatch()

    useEffect(() => {
        RefillDatabaseFunction();
        
    }, [])

    

    const columns = [
      { field: 'id', headerName: 'ID', width: 300 },
      { field: 'inventoryDateTime',
        headerName: 'Datum Tid',
        type: 'date',
        width: 150,
        editable: true,
      },
      { field: 'quantityVial',
        headerName: 'Kvantitet vial',
        width: 150,
        editable: true,
      }
      ,
      { field: 'quantityDose',
        headerName: 'Kvantitet dos',
        width: 150,
        editable: true,
      }
      ,
      { field: 'healthcareProvidersId',
        headerName: 'Vårdgivare Id',
        width: 150,
        editable: false,
      },
      { field: 'vaccineSupplierId',
      headerName: 'Leverantör Id',
      width: 150,
      editable: false,
    }

            
    ];






    const modal = <ModalComponent text="Lägg till Lagersaldo"  icon={<AddIcon />} CustomizeForm={InventoryBalanceForm}/>

    function handelDeleteEvent(ids) {
      
        dispatch(ServerDelete({type:"inventoryBalances", ids:ids}))

    }
    

  return (
    <div>
      <TabelComponent title={"LagerSaldo"} 
      type="inventoryBalances"
      editFunc={ServerUpdate}
      values={GetAllInventoryBalance} 
      allColumns={columns} 
      CustomizedModal={modal} 
      deleteOnClick={handelDeleteEvent} 
      setRow={setRow}
       />

    </div>
  )
}
