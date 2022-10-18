import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalComponent from 'component/ModalComponent'
import TabelComponent from 'component/TabelComponent'
import AddIcon from '@mui/icons-material/Add';
import ConsumptionForm from 'Form/ConsumptionForm'
import { RefillDatabaseFunction } from 'features/RefillDatabase'
import { ConsumptionColumns } from 'features/AllColumns'
import { DeleteConsumption, UpdateConsumption } from 'features/Slices/PagesSlices/ConsumptionSlice';
import { ModelType } from 'features/ModelType';



export default function HealthcareProvider() {


    const {GetAllConsumption} = useSelector((state) => state.Consumption)
    const dispatch = useDispatch()


    useEffect(() => {
      RefillDatabaseFunction()        
    }, [])

  

    

    const modal = <ModalComponent text="Förbrukning"  icon={<AddIcon />} CustomizeForm={ConsumptionForm}/>


    

  return (
    <div>
      <TabelComponent title={"Förbrukning"} 
      type={ModelType.Consumption}
      editFunc={UpdateConsumption}
      values={GetAllConsumption} 
      allColumns={ConsumptionColumns} 
      CustomizedModal={modal} 
      deleteOnClick={ids => dispatch(DeleteConsumption(ids))} 
      
       />
    </div>
  )
}
