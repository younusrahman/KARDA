import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TabelComponent from 'component/TabelComponent';
import ModalComponent from 'component/ModalComponent';
import AddIcon from '@mui/icons-material/Add';
import VaccineSuppliersForm from 'Form/VaccineSuppliersForm';
import { RefillDatabaseFunction } from 'features/RefillDatabase';
import { VaccineSupplierColums } from 'features/AllColumns';
import { UpdateSupplier, DeleteSupplier } from 'features/Slices/PagesSlices/VaccineSupplierSlice';
import { ModelType } from 'features/ModelType';



export default function Ordering() {
  const dispatch = useDispatch();
  const {GetAllVaccineSuppliers} = useSelector((state) => state.VaccineSupplier)


  useEffect(() => {
    RefillDatabaseFunction()
    }, [])

const modal = <ModalComponent text="Lägg till beställning"  icon={<AddIcon />} CustomizeForm={VaccineSuppliersForm}/>




 return (
    <div>
    <TabelComponent title={"Vaccin leverantör"} 
    type={ModelType.VaccineSupplier}
    editFunc={UpdateSupplier}
    values={GetAllVaccineSuppliers} 
    allColumns={VaccineSupplierColums} 
    CustomizedModal={modal} 
    deleteOnClick={ids => dispatch(DeleteSupplier(ids))} 
   
     />
  </div>
  )
}
