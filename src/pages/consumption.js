import React, {useEffect, useState} from 'react'
import { ServerGetAll, ServerUpdate, ServerDelete } from 'features/Slices/ServerSlice'
import { useDispatch, useSelector } from 'react-redux'
import ModalComponent from 'component/ModalComponent'
import TabelComponent from 'component/TabelComponent'
import AddIcon from '@mui/icons-material/Add';
import ConsumptionForm from 'Form/ConsumptionForm'
import { RefillDatabaseFunction } from 'features/RefillDatabase'



export default function HealthcareProvider() {


    const {GetAllConsumption} = useSelector((state) => state.Consumption)
    const dispatch = useDispatch()
    const [GetRow, setRow]= useState()


    useEffect(() => {
      RefillDatabaseFunction()        
    }, [])

    

    const columns = [
      
      { field: 'useByDate',
        headerName: 'Förbruknings Datum',
        typeof:"date",
        width: 150,
        editable: true,
      },
      { field: 'quantityVial',
        headerName: 'kvantitet vial',
        width: 150,
        editable: true,
      },
      { field: 'vaccineSupplierId',
        headerName: 'Vaccin leverantör',
        width: 150,
        editable: false,
      }
      ,
      { field: 'healthcareProvidersId',
        headerName: 'Vårdgivare Id',
        width: 150,
        editable: false,
      }
      ,
      { field: 'id', headerName: 'ID', width: 300,  editable: false},
            
    ];

    

    const modal = <ModalComponent text="Förbrukning"  icon={<AddIcon />} CustomizeForm={ConsumptionForm}/>

    function handelDeleteEvent(ids) {

      dispatch(ServerDelete({type:"consumptions", ids:ids}))
    }
    

  return (
    <div>
      <TabelComponent title={"Förbrukning"} 
      type="consumptions"
      editFunc={ServerUpdate}
      values={GetAllConsumption} 
      allColumns={columns} 
      CustomizedModal={modal} 
      deleteOnClick={handelDeleteEvent} 
      setRow={setRow}
       />
    </div>
  )
}
