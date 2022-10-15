import React, {useEffect, useState} from 'react'
import {  ServerUpdate, ServerDelete } from 'features/Slices/ServerSlice'
import { useDispatch, useSelector } from 'react-redux'
import TabelComponent from 'component/TabelComponent';
import ModalComponent from 'component/ModalComponent';
import AddIcon from '@mui/icons-material/Add';
import CapacitForm from 'Form/CapacitForm';
import { RefillDatabaseFunction } from 'features/RefillDatabase';



export default function CapacithForm() {
  const dispatch = useDispatch();
  const {GetAllCapacitie} = useSelector((state) => state.Capacitie)
  const [GetRow, setRow]= useState()



  useEffect(() => {
    RefillDatabaseFunction()
    
}, [])

const modal = <ModalComponent text="Lägg till kapacite"  icon={<AddIcon />} CustomizeForm={CapacitForm}/>

  const Colums = [
    { field: 'capacityDate', headerName: 'Kapacitet Datum (prognos)', width: 200, editable: true },
    { field: 'capacityDoses', headerName: 'Kvantitet dos',width: 100, editable: true },
    { field: 'healthcareProvidersId', headerName: 'Vårdgivare ID',width: 300, editable: false },
    { field: 'id', headerName: 'Order Id',width: 300, editable: false },
  ];

  function handelDeleteEvent(ids) {

    dispatch(ServerDelete({type:"Capacities", ids:ids}))
  }



  return (
    <div>
    <TabelComponent title={"Kapacite"} 
    type="Capacities"
    editFunc={ServerUpdate}
    values={GetAllCapacitie} 
    allColumns={Colums} 
    CustomizedModal={modal} 
    deleteOnClick={handelDeleteEvent} 
    setRow={setRow}
     />
  </div>
  )
}
