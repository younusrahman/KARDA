import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import { Route, Routes } from "react-router-dom";
//first Page
import Dashboard from "./pages/Dashboard";
// Other features/menu items
import { MenuItems } from "features/MenuItems";
import AppbarComponent from "component/AppbarComponent";
import DrawHeaderComponent from "component/DrawHeaderComponent";







const drawerWidth = 240;


//Styl
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

const AppBar = styled(MuiAppBar, {shouldForwardProp: (prop) => prop !== "open",})(({ theme, open }) => ({
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

  //Handel Sidebar 
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  //Register menu items to router
  const routeComponents = MenuItems.map(({text, path, component}) => (
    <Route path={path} element={component}  key={text}/>
  ));

  return (
    <Box className="flex">
      <CssBaseline />
    {/* Bar on top */}
      <AppbarComponent open={open} handleDrawerOpen={handleDrawerOpen} AppBar={AppBar}/>
      {/* Menu that slide from side */}
      <DrawHeaderComponent drawerWidth={drawerWidth} open={open} setOpen={setOpen} DrawerHeader={DrawerHeader} MenuItems={MenuItems}/>
      <Main open={open}>
        {/* {"space from top bar"} */}
        <DrawerHeader />
        <Routes>
        <Route path="/" element={<Dashboard />} />
        {routeComponents}
        </Routes>
      </Main>
    </Box>
  );
}
