import { ServerGetAll } from "../features/Slices/ServerSlice"
import { SetAllHCProveiders } from "../features/Slices/HealthcareProviderSlice"
import { store } from "app/store";
import { SetAllVaccineSuppliers } from "./Slices/VaccineSupplierSlice";
import { SetAllOrders } from "./Slices/OrderingSlice";
import { SetAllConsumption } from "./Slices/ConsumptionSlice";
import { SetAllCapacitie } from "./Slices/CapacitieSlice";
import { SetAllInventoryBalance } from "./Slices/InventoryBalanceSlice";
import { SetAllDeliveryStatus } from "./Slices/DeliveryStatusSlice";





export function RefillDatabaseFunction(){
    
    store.dispatch(ServerGetAll({ type: "HealthcareProviders", func: SetAllHCProveiders }))
    store.dispatch(ServerGetAll({ type: "VaccineSuppliers", func: SetAllVaccineSuppliers }))
    store.dispatch(ServerGetAll({ type: "Orderings", func: SetAllOrders }))
    store.dispatch(ServerGetAll({ type: "Consumptions", func: SetAllConsumption }))
    store.dispatch(ServerGetAll({ type: "Capacities", func: SetAllCapacitie }))
    store.dispatch(ServerGetAll({ type: "InventoryBalances", func: SetAllInventoryBalance }))
    store.dispatch(ServerGetAll({ type: "DeliveryStatus", func: SetAllDeliveryStatus }))

    
}