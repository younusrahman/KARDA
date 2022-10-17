import { Typography } from '@mui/material'
import React, {useEffect} from 'react'
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import { CardComponent } from 'component/CardComponent';
import { useSelector} from 'react-redux';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import TocIcon from '@mui/icons-material/Toc';
import BusinessIcon from '@mui/icons-material/Business';
import { RefillDatabaseFunction } from 'features/RefillDatabase';

export default function Dashboard() {
  const {GetAllHCProveiders} = useSelector((state) => state.HealthcareProvider)
  const {GetAllVaccineSuppliers} = useSelector((state) => state.VaccineSupplier)
  const {GetAllOrders} = useSelector((state) => state.Ordering)
  const {GetAllConsumption} = useSelector((state) => state.Consumption)



  useEffect(() => {
    RefillDatabaseFunction()

    
}, [])

  return (
    <Typography component="div" sx={{display:'flex', margin:"1rem", width:"98%"}}>
      <Typography component="div" sx={{ width:"60%"}}>
        <h1>Charts</h1>
      </Typography>
      <Typography component="div" sx={{width:"40%"}}>
        <CardComponent titel="Vårdgivare" link={"/HealthcareProvider"} icon = {<PeopleIcon />} count={GetAllHCProveiders.length} />
        <CardComponent titel="vaccin Leverantörs" link={"/VaccineSupplier"} icon = {<VaccinesIcon />} count={GetAllVaccineSuppliers.length} />
        <CardComponent titel="Beställning" link={"/Ordering"} icon = {<TocIcon />} count={GetAllOrders.length} />
        <CardComponent titel="Förbrukning" link={"/consumption"} icon = {<BusinessIcon />} count={GetAllConsumption.length} />
      </Typography>
    </Typography>
  )
}
