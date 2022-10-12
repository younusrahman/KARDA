import { Container, Typography } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { padding } from '@mui/system';


export default function Dashboard() {

const theme = createTheme({
    palette: {
      secondary: {
        main: '#E33E7F'
      }
    }
  });
  return (
    <Typography component="div" sx={{backgroundColor:"#4527a0", margin:"0", padding:"0"}}>
        <h1>hello</h1>
    </Typography>
  )
}
