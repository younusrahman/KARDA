import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { useDispatch } from "react-redux";



export default function TabelComponent({
  title,
  values,
  allColumns,
  CustomizedModal,
  deleteOnClick,
  editFunc,
  type,
}) {
  



  
  const [oldRowValue, setOldRowValue] = useState();
  const [removeRows, setRemoveRows] = useState();
  const dispatch = useDispatch()

  const CustomersTheme = (theme) => ({
    backgroundColor: "#163b60",
    color: "white",
    padding: "1rem",
    secondary: {
      main: "#163b60 ",
    },
    
  });
  



function handelDubbelClickEvent (e){
  setOldRowValue(e.row) 
}

const processRowUpdate = (newRow) => {


  const updatedRow = { ...newRow, isNew: false };

  const oldValues = Object.values(oldRowValue)
  const newValues = Object.values(updatedRow)

  let difference = oldValues.filter(value => !newValues.includes(value));

  if(difference.length >= 1 ){
      if(Object.values(updatedRow).includes("")){return oldRowValue}

    dispatch(editFunc({type:type, id:updatedRow.id, values:updatedRow}))
    return updatedRow
    
  }
  return oldRowValue;
};




const onRowsSelectionHandler = (ids) => {

  setRemoveRows(ids)
};

const EnsureArray = Array.isArray(values) ? values : []

  return (
    <>
      <Typography variant="h5" sx={CustomersTheme} align="center">
        {title}
      </Typography>
      <Typography variant="h5" align="center" sx={{ display: 'flex' , color:"secondary"}}>
      {CustomizedModal}
      <Button sx={{fontWeight:"bold", color:"#163b60"}}  onClick={() => deleteOnClick(removeRows)} color={"secondary"} startIcon={<DeleteIcon sx={{ display: 'flex' , color:"#163b60"}}/>}>
         Ta Bort
       </Button>
      </Typography>

      <Box sx={{ height: "75vh", width: "100%" }}>
        <DataGrid
          rows={EnsureArray}
          columns={allColumns}
         
          editMode="row"
          rowsPerPageOptions={[5,10,20]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          components={{Toolbar: GridToolbar}}
          processRowUpdate={processRowUpdate}

          onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
          onCellDoubleClick={e => handelDubbelClickEvent(e)}

          componentsProps={{
            panel: {
              sx: {
    
                '& .MuiTypography-root': {
                  color: '#1c3c61',
                  fontSize: 20,
                },
                '& .MuiDataGrid-filterForm': {
                  bgcolor: 'lightblue',
                }
              },
            },
          }}
        />
      </Box>
    </>
  );
}
