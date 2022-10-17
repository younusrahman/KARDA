

import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ModalComponent from 'component/ModalComponent'
import TabelComponent from 'component/TabelComponent'
import AddIcon from '@mui/icons-material/Add';
import { RefillDatabaseFunction } from 'features/RefillDatabase'
import InventoryBalanceForm from 'Form/InventoryBalanceForm'
import { InventoryBalanceColumns } from 'features/AllColumns'
import { UpdateInventoryBalance, DeleteInventoryBalance } from "features/Slices/InventoryBalanceSlice";




export default function InventoryBalance() {


    const {GetAllInventoryBalance} = useSelector((state) => state.InventoryBalance)
   
    const dispatch = useDispatch()

    useEffect(() => {
        RefillDatabaseFunction();
        
    }, [])

  
    

    






    const modal = <ModalComponent text="Lägg till Lagersaldo"  icon={<AddIcon />} CustomizeForm={InventoryBalanceForm}/>


    

  return (
    <div>
      <TabelComponent title={"LagerSaldo"} 
      type="inventoryBalances"
      editFunc={UpdateInventoryBalance}
      values={GetAllInventoryBalance} 
      allColumns={InventoryBalanceColumns} 
      CustomizedModal={modal} 
      deleteOnClick={ids => dispatch(DeleteInventoryBalance(ids))} 
    
       />

    </div>
  )
}
