import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TabelComponent from 'component/TabelComponent';
import ModalComponent from 'component/ModalComponent';
import AddIcon from '@mui/icons-material/Add';
import CapacitForm from 'Form/CapacitForm';
import { RefillDatabaseFunction } from 'features/RefillDatabase';
import { CapacityColums } from 'features/AllColumns';
import { DeleteCapacitie, UpdateCapacitie } from 'features/Slices/PagesSlices/CapacitieSlice';
import { ModelType } from 'features/ModelType';


export default function CapacithForm() {
  const dispatch = useDispatch();
  const {GetAllCapacitie} = useSelector((state) => state.Capacitie)



  useEffect(() => {
    RefillDatabaseFunction()
    
}, [])

const modal = <ModalComponent text="Lägg till kapacite"  icon={<AddIcon />} CustomizeForm={CapacitForm}/>





  return (
    <div>
    <TabelComponent title={"Kapacite"} 
    type={ModelType.Capacitie}
    editFunc={UpdateCapacitie}
    values={GetAllCapacitie} 
    allColumns={CapacityColums} 
    CustomizedModal={modal} 
    deleteOnClick={ids => dispatch(DeleteCapacitie(ids))} 
     />
  </div>
  )
}
