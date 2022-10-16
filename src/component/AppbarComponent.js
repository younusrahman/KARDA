import React from 'react'
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// Logo on banner
import logo from "Logo.png";
export default function AppbarComponent({open, handleDrawerOpen, AppBar}) {
  return (
    <AppBar position="fixed" open={open} sx={{backgroundColor:"#1c3c61"}}>
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
      
  )
}
