import { store } from "app/store";
import { RefillOrders } from "./Slices/OrderingSlice";
import { RefillHealthcareProvider} from "../features/Slices/HealthcareProviderSlice"
import { RefillSupplier} from "./Slices/VaccineSupplierSlice";
import { RefillConsumption} from "./Slices/ConsumptionSlice";
import { RefillCapacitie} from "./Slices/CapacitieSlice";
import { RefillInventoryBalance} from "./Slices/InventoryBalanceSlice";
import { RefillDeliveryStatus } from "./Slices/DeliveryStatusSlice";

export function RefillDatabaseFunction(){
    store.dispatch(RefillOrders())
    store.dispatch(RefillHealthcareProvider())
    store.dispatch(RefillSupplier())
    store.dispatch(RefillConsumption())
    store.dispatch(RefillCapacitie())
    store.dispatch(RefillInventoryBalance())
    store.dispatch(RefillDeliveryStatus())
}