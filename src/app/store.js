import { configureStore } from '@reduxjs/toolkit';
import ServerReducer from '../features/Slices/ServerSlice';
import HealthcareProviderReducer from 'features/Slices/HealthcareProviderSlice';
import ModalReducer from 'features/Slices/ModalSlice';
import OrderingReducer from 'features/Slices/OrderingSlice';
import CapacitieReducer from 'features/Slices/CapacitieSlice';
import ConsumptionReducer from 'features/Slices/ConsumptionSlice';
import VaccineSupplierReducer from 'features/Slices/VaccineSupplierSlice';
import InventoryBalanceReducer from 'features/Slices/InventoryBalanceSlice';
import DeliveryStatusReducer from 'features/Slices/DeliveryStatusSlice';
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
