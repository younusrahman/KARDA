export const HealthcareProviderColumns = [
    { field: 'id', headerName: 'ID', width: 300 },
    { field: 'name', headerName: 'Name',  width: 150, editable: true,},
    { field: 'joinDate', headerName: 'Joined Date', width: 150, editable: false, valueGetter: ({ value }) => value && new Date(value)}];


export const VaccineSupplierColums = [
    { field: 'supplierName', headerName: 'Leverantörs namn', width: 110, editable: true },
    { field: 'healthcareProvidersId', headerName: 'Vårdgivare ID',width: 300, editable: false },
    { field: 'id', headerName: 'Id',width: 300, editable: false }];

export const OrderingColums = [
    { field: 'orderDate', headerName: 'Beställnings Datum', width: 110, editable: false },
    { field: 'desiredDeliveryDate', headerName: 'Önskat lev datum',typeof:"date",type: 'date' , width: 250, editable: true, valueGetter: ({ value }) => value && new Date(value) },
    { field: 'quantityDose', headerName: 'Kvantitet dos',width: 150, editable: true },
    { field: 'gln', headerName: 'GLN - Mottagare',width: 150, editable: true },
    { field: 'healthcareProvidersId', headerName: 'Vårdgivare ID',width: 300, editable: false },
    { field: 'id', headerName: 'Order Id',width: 300, editable: false }];

export const InventoryBalanceColumns = [
    { field: 'id', headerName: 'ID', width: 300 },
    { field: 'inventoryDateTime', headerName: 'Datum Tid', type: 'date', width: 150, editable: true, valueGetter: ({ value }) => value && new Date(value)},
    { field: 'quantityVial',headerName: 'Kvantitet vial',width: 150,editable: true,},
    { field: 'quantityDose',headerName: 'Kvantitet dos',width: 150,editable: true,},
    { field: 'healthcareProvidersId',headerName: 'Vårdgivare Id',width: 150, editable: false,},
    { field: 'vaccineSupplierId',headerName: 'Leverantör Id',width: 150, editable: false}];

export const DeliveryStatusColumns = [
    { field: 'id', headerName: 'ID', width: 300 },
    { field: 'deliveryDate',headerName: 'Leverans datum',width: 150,editable: true,},
    { field: 'plannedDeliveryDate',headerName: 'Planerat lev. datum',width: 150,editable: true,},
    { field: 'quantityVial',headerName: 'Kvantitet vial',width: 150,editable: true,},
    { field: 'gln',headerName: 'GLN - Mottagare',width: 150,editable: true},
    { field: 'vaccineSupplierId',headerName: 'Vaccin leverantör',width: 150,editable: false},
    { field: 'healthcareProvidersId',headerName: 'Välja vårdgivare',width: 150,editable: false}];

export const ConsumptionColumns = [
      
    { field: 'useByDate',headerName: 'Förbruknings Datum', typeof:"date",width: 150, editable: true, valueGetter: ({ value }) => value && new Date(value)},
    { field: 'quantityVial',headerName: 'kvantitet vial',width: 150,editable: true},
    { field: 'vaccineSupplierId',headerName: 'Vaccin leverantör',width: 150,editable: false},
    { field: 'healthcareProvidersId',headerName: 'Vårdgivare Id',width: 150,editable: false},
    { field: 'id', headerName: 'ID', width: 300,  editable: false}];

export const CapacityColums = [
    { field: 'capacityDate', headerName: 'Kapacitet Datum (prognos)', width: 200, editable: true },
    { field: 'capacityDoses', headerName: 'Kvantitet dos',width: 100, editable: true },
    { field: 'healthcareProvidersId', headerName: 'Vårdgivare ID',width: 300, editable: false },
    { field: 'id', headerName: 'Order Id',width: 300, editable: false }];
    
    