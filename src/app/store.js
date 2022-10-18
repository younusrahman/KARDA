import { configureStore } from '@reduxjs/toolkit';
import ServerReducer from 'features/Slices/DatabaseIntegration/ServerSlice';
import HealthcareProviderReducer from 'features/Slices/PagesSlices/HealthcareProviderSlice';
import ModalReducer from 'features/Slices/OtherSlice/ModalSlice';
import OrderingReducer from 'features/Slices/PagesSlices/OrderingSlice';
import CapacitieReducer from 'features/Slices/PagesSlices/CapacitieSlice';
import ConsumptionReducer from 'features/Slices/PagesSlices/ConsumptionSlice';
import VaccineSupplierReducer from 'features/Slices/PagesSlices/VaccineSupplierSlice';
import InventoryBalanceReducer from 'features/Slices/PagesSlices/InventoryBalanceSlice';
import DeliveryStatusReducer from 'features/Slices/PagesSlices/DeliveryStatusSlice';
export const store = configureStore({
  reducer: {
    Server : ServerReducer,
    HealthcareProvider:HealthcareProviderReducer,
    Ordering : OrderingReducer,
    Capacitie : CapacitieReducer,
    Consumption : ConsumptionReducer,
    VaccineSupplier : VaccineSupplierReducer,
    InventoryBalance:InventoryBalanceReducer,
    DeliveryStatus: DeliveryStatusReducer,
    Modal :  ModalReducer


  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
