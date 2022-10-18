import { store } from "app/store";
import { RefillOrders } from "features/Slices/PagesSlices/OrderingSlice";
import { RefillHealthcareProvider} from "features/Slices/PagesSlices/HealthcareProviderSlice"
import { RefillSupplier} from "features/Slices/PagesSlices/VaccineSupplierSlice";
import { RefillConsumption} from "features/Slices/PagesSlices/ConsumptionSlice";
import { RefillCapacitie} from "features/Slices/PagesSlices/CapacitieSlice";
import { RefillInventoryBalance} from "features/Slices/PagesSlices/InventoryBalanceSlice";
import { RefillDeliveryStatus } from "features/Slices/PagesSlices/DeliveryStatusSlice";

export function RefillDatabaseFunction(){
    store.dispatch(RefillOrders())
    store.dispatch(RefillHealthcareProvider())
    store.dispatch(RefillSupplier())
    store.dispatch(RefillConsumption())
    store.dispatch(RefillCapacitie())
    store.dispatch(RefillInventoryBalance())
    store.dispatch(RefillDeliveryStatus())
}