import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalComponent from 'component/ModalComponent'
import TabelComponent from 'component/TabelComponent'
import AddIcon from '@mui/icons-material/Add';
import { RefillDatabaseFunction } from 'features/RefillDatabase'
import DeliveryStatusForm from 'Form/DeliveryStatusForm'
import { DeliveryStatusColumns } from 'features/AllColumns'
import { UpdateDeliveryStatus, DeleteDeliveryStatus  } from 'features/Slices/PagesSlices/DeliveryStatusSlice'
import { ModelType } from 'features/ModelType';


export default function DeliveryStatus() {
    const {GetAllDeliveryStatus} = useSelector((state) => state.DeliveryStatus)
    const dispatch = useDispatch()


    useEffect(() => {
        RefillDatabaseFunction();
        
    }, [])


    const modal = <ModalComponent text="Lagersaldo"  icon={<AddIcon />} CustomizeForm={DeliveryStatusForm}/>


  return (
    <div>
      <TabelComponent title={"Lagersaldo"} 
      type={ModelType.DeliveryStatus}
      editFunc={UpdateDeliveryStatus}
      values={GetAllDeliveryStatus} 
      allColumns={DeliveryStatusColumns} 
      CustomizedModal={modal} 
      deleteOnClick={ids => dispatch(DeleteDeliveryStatus(ids))}  
   
       />

    </div>
  )
}
