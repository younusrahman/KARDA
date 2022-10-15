import React, {useEffect, useState} from 'react'
import { ServerGetAll, ServerUpdate, ServerDelete } from 'features/Slices/ServerSlice'
import { useDispatch, useSelector } from 'react-redux'
import { SetAllOrders } from 'features/Slices/OrderingSlice';
import TabelComponent from 'component/TabelComponent';
import ModalComponent from 'component/ModalComponent';
import AddIcon from '@mui/icons-material/Add';
import OrderForm from 'Form/OrderForm';
import { SetAllHCProveiders } from 'features/Slices/HealthcareProviderSlice';
import { RefillDatabaseFunction } from 'features/RefillDatabase';



export default function Ordering() {
  const dispatch = useDispatch();
  const {GetAllOrders} = useSelector((state) => state.Ordering)
  const [GetRow, setRow]= useState()


  useEffect(() => {
   RefillDatabaseFunction();}, [])

const modal = <ModalComponent text="Lägg till beställning"  icon={<AddIcon />} CustomizeForm={OrderForm}/>

  const Colums = [
    { field: 'orderDate', headerName: 'Beställnings Datum', width: 110, editable: false },
    { field: 'desiredDeliveryDate', headerName: 'Önskat lev datum',typeof:"date",type: 'date' , width: 150, editable: true },
    { field: 'quantityDose', headerName: 'Kvantitet dos',width: 150, editable: true },
    { field: 'gln', headerName: 'GLN - Mottagare',width: 150, editable: true },
    { field: 'healthcareProvidersId', headerName: 'Vårdgivare ID',width: 300, editable: false },
    { field: 'id', headerName: 'Order Id',width: 300, editable: false },
  ];

  function handelDeleteEvent(ids) {
    dispatch(ServerDelete({type:"Orderings", ids:ids}))
  }



  return (
    <div>
    <TabelComponent title={"Order"} 
    type="Orderings"
    editFunc={ServerUpdate}
    values={GetAllOrders} 
    allColumns={Colums} 
    CustomizedModal={modal} 
    deleteOnClick={handelDeleteEvent} 
    setRow={setRow}
     />
  </div>
  )
}
