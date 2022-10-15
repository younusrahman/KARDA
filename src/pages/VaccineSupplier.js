import React, {useEffect, useState} from 'react'
import { ServerGetAll, ServerUpdate, ServerDelete } from 'features/Slices/ServerSlice'
import { useDispatch, useSelector } from 'react-redux'
import { SetAllVaccineSuppliers } from 'features/Slices/VaccineSupplierSlice';
import TabelComponent from 'component/TabelComponent';
import ModalComponent from 'component/ModalComponent';
import AddIcon from '@mui/icons-material/Add';
import VaccineSuppliersForm from 'Form/VaccineSuppliersForm';
import { RefillDatabaseFunction } from 'features/RefillDatabase';




export default function Ordering() {
  const dispatch = useDispatch();
  const {GetAllVaccineSuppliers} = useSelector((state) => state.VaccineSupplier)
  const [GetRow, setRow]= useState()


  useEffect(() => {
    RefillDatabaseFunction()
    
}, [])

const modal = <ModalComponent text="Lägg till beställning"  icon={<AddIcon />} CustomizeForm={VaccineSuppliersForm}/>

  const Colums = [
    { field: 'supplierName', headerName: 'Leverantörs namn', width: 110, editable: true },
    { field: 'healthcareProvidersId', headerName: 'Vårdgivare ID',width: 300, editable: false },
    { field: 'id', headerName: 'Id',width: 300, editable: false },
  ];



  function handelDeleteEvent(ids) {
    dispatch(ServerDelete({type:"Orderings", ids:ids}))
  }



  return (
    <div>
    <TabelComponent title={"Vaccin leverantör"} 
    type="vaccineSupplier"
    editFunc={ServerUpdate}
    values={GetAllVaccineSuppliers} 
    allColumns={Colums} 
    CustomizedModal={modal} 
    deleteOnClick={handelDeleteEvent} 
    setRow={setRow}
     />
  </div>
  )
}
