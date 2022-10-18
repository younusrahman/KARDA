//Pages
import Capacity from "pages/Capacity";
import Consumption from "pages/Consumption";
import DeliveryStatus from "pages/DeliveryStatus";
import InventoryBalance from "pages/InventoryBalance";
import Ordering from "pages/Ordering";
import Dashboard from "pages/Dashboard";
import HealthcareProvider from "pages/HealthcareProvider"
import VaccineSupplier from "pages/VaccineSupplier";

//Icons
import GridViewIcon from "@mui/icons-material/GridView";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import ViewListIcon from "@mui/icons-material/ViewList";
import InventoryIcon from "@mui/icons-material/Inventory";
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export const MenuItems = [{
  text: "Dash Board",
  path: '/dashBoard',
  component: <Dashboard/>,
  icon: <GridViewIcon />
  
}, {
  text: "Inleverans",
  path: '/deliveryStatus',
  component: <DeliveryStatus/>,
  icon: <LocalShippingIcon />,
}, {
  text: "Lagersaldo",
  path: '/inventoryBalance',
  component: <InventoryBalance/>,
  icon: <InventoryIcon />,
}, {
  text: "Förbrukning", 
  path: '/consumption',
  component: <Consumption/>,
  icon: <VaccinesIcon />,
}, {
  text: "Kapacitet", 
  path: '/capacity',
  component: <Capacity/>,
  icon: <ReduceCapacityIcon />,
}, 
{
  text: "vårdgivare",    
  path: '/HealthcareProvider',
  component: <HealthcareProvider/>,
  icon: <MedicationLiquidIcon />
}

,{
  text: "Beställning",    
  path: '/ordering',
  component: <Ordering/>,
  icon: <ViewListIcon />
} 
,{
  text: "Vaccin Leverantör",    
  path: '/vaccinesupplier',
  component: <VaccineSupplier/>,
  icon: <SupportAgentIcon />  
} ];