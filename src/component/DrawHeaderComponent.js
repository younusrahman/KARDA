import React from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";

import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";

import { Link } from "react-router-dom";

import ListItemIcon from "@mui/material/ListItemIcon";

import ListItemText from "@mui/material/ListItemText";



export default function DrawHeaderComponent({
  MenuItems,
  setOpen,
  open,
  DrawerHeader,
  drawerWidth
}) {
  const handleDrawerClose = () => {

    setOpen(false);
  };
  return (
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
        <Typography
          variant="p"
          className="w-full flex justify-center font-semibold text-xl"
        >
          Huvud Menu
        </Typography>
        <IconButton onClick={handleDrawerClose}>
        <ChevronLeftIcon titleAccess="Send" />
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
  );
}
