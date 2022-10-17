import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalComponent from 'component/ModalComponent'
import TabelComponent from 'component/TabelComponent'
import AddIcon from '@mui/icons-material/Add';
import HealthcareProviderForm from 'Form/HealthcareProviderForm'
import { RefillDatabaseFunction } from 'features/RefillDatabase'
import { useGridApiRef } from '@mui/x-data-grid';
import { HealthcareProviderColumns } from 'features/AllColumns'
import { UpdateHealthcareProvider, DeleteHealthcareProvider } from 'features/Slices/HealthcareProviderSlice'


export default function HealthcareProvider() {

    const apiRef = useGridApiRef
    const dispatch = useDispatch()
  
    const {GetAllHCProveiders} = useSelector((state) => state.HealthcareProvider)


    useEffect(() => {
        RefillDatabaseFunction();
    }, [])


    HealthcareProviderForm(apiRef)

    const modal = <ModalComponent text="Lägg till vårdgivare"  icon={<AddIcon />} CustomizeForm={HealthcareProviderForm}/>


    

  return (
    <div>
      <TabelComponent title={"Vårdgivare"} 
      type="HealthcareProviders"
      editFunc={UpdateHealthcareProvider}
      values={GetAllHCProveiders} 
      allColumns={HealthcareProviderColumns} 
      CustomizedModal={modal} 
      deleteOnClick={ids => dispatch(DeleteHealthcareProvider(ids))}  
      apiRef={apiRef}
       />

    </div>
  )
}
