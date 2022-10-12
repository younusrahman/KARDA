const routes = [{
    text: "Dash Board",
    path: '/',
    component: Dashboard,
    icon: <GridViewIcon />,
  }, {
    text: "Dash Board",
    path: '/dashBoard',
    component: Dashboard,
    icon: <GridViewIcon />
  }, {
    text: "Inleverans",
    path: '/deliveryStatus',
    component: DeliveryStatus,
    icon: <LocalShippingIcon />,
  }, {
    text: "Lagersaldo",
    path: '/inventoryBalance',
    component: InventoryBalance,
    icon: <InventoryIcon />,
  }, {
    text: "Förbrukning", 
    path: '/consumption',
    component: Consumption,
    icon: <VaccinesIcon />,
  }, {
    text: "Kapacitet", 
    path: '/capacity',
    component: Capacity,
    icon: <ReduceCapacityIcon />,
  }, {
    text: "Beställning",    
    path: '/ordering',
    component: Ordering,
    icon: <ViewListIcon />,
  }, ];




  