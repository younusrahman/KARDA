import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateOrders , DeleteOrders} from 'features/Slices/OrderingSlice';
import TabelComponent from 'component/TabelComponent';
import ModalComponent from 'component/ModalComponent';
import AddIcon from '@mui/icons-material/Add';
import OrderForm from 'Form/OrderForm';
import { RefillDatabaseFunction } from 'features/RefillDatabase';
import { OrderingColums } from 'features/AllColumns';



export default function Ordering() {
  const dispatch = useDispatch();
  const {GetAllOrders} = useSelector((state) => state.Ordering)


  useEffect(() => {
   RefillDatabaseFunction();}, [])

  const modal = <ModalComponent text="Lägg till beställning"  icon={<AddIcon />} CustomizeForm={OrderForm}/>




  return (
    <div>
    <TabelComponent title={"Order"} 
    type="Orderings"
    editFunc={UpdateOrders}
    values={GetAllOrders} 
    allColumns={OrderingColums} 
    CustomizedModal={modal} 
    deleteOnClick={ids => dispatch(DeleteOrders(ids))} 

     />
  </div>
  )
}
