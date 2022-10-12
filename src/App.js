import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Route, Router, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

//Icons
import GridViewIcon from "@mui/icons-material/GridView";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import ViewListIcon from "@mui/icons-material/ViewList";
import InventoryIcon from "@mui/icons-material/Inventory";
// Logo on banner
import logo from "./Logo.png";

//Pages
import Capacity from "./pages/capacity";
import Consumption from "./pages/consumption";
import DeliveryStatus from "./pages/deliveryStatus";
import InventoryBalance from "./pages/inventoryBalance";
import Ordering from "./pages/ordering";
import Dashboard from "./pages/dashboard";



import  { Suspense } from 'react';
import {  Switch } from 'react-router-dom';
import { MappingProvider, useMap } from 'react-router-mapping';



const MenuItems = [{
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
}, {
  text: "Beställning",    
  path: '/ordering',
  component: <Ordering/>,
  icon: <ViewListIcon />,
}, ];



const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const routeComponents = MenuItems.map(({text, path, component}) => (

    <Route path={path} element={component}  key={text}/>

  ));

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" className="p-3">
            <Box
              component="img"
              sx={{
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="The house from the offer."
              src={logo}
            />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {MenuItems.map(({ path, text, icon }, index) => (
            <ListItem component={Link} to={path} key={index}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
  
        <Routes>
        <Route path="/" element={<Dashboard />} />
        {routeComponents}
        </Routes>
      </Main>
    </Box>
  );
}
