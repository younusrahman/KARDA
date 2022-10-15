import React, {useState} from "react";

import {
    InputLabel,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  FormControl,
Select,
MenuItem,

} from "@mui/material";

import { purple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import SaveIcon from '@mui/icons-material/Save';
import { useSelector, useDispatch } from 'react-redux'
import { ChangeModalStatus } from "features/Slices/ModalSlice";
import { ServerAdd} from 'features/Slices/ServerSlice'



const schema = yup
  .object()
  .shape({
    qaccineSupplierId: yup.string().min(36),
    healthcareProvidersId : yup.string().min(36),
    quantityVial: yup.number().min(1),
    quantityDose : yup.number().min(1)

  })
  .required();


export default function InventoryBalanceForm() {

    const {GetAllHCProveiders} = useSelector((state) => state.HealthcareProvider)
const {GetAllVaccineSuppliers} = useSelector((state) => state.VaccineSupplier)
  const {Status} = useSelector(state => state.Modal)
  const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
      resolver: yupResolver(schema)
    });

    const initialValues = {
        qaccineSupplierId: "",
        healthcareProvidersId : "",
        quantityVial: 0,
        quantityDose : 0,
    };
    const [allValues, setAllValues] = useState(initialValues)



    


    const handelOnChange = (data) => {
        
        const {value, name}= data.target;

        setAllValues({...allValues, [name] : value})

    };

  const [loading, setLoading] = React.useState(false);
  

  const CustomersFormHeader = (theme) => ({
    backgroundColor: "#163b60",
    color: "white",
    padding: "1rem",
  });
  const CustomersFormTextfild = (theme) => ({
    marginTop: "1rem",
  });

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#163b60 ",
      },
    },
  });


    const handelSubmitForm = (e) => {
      setLoading(true);
     
      
    

        dispatch(ServerAdd({type:"InventoryBalances", values:allValues}))
    
      setLoading(false);

          dispatch(ChangeModalStatus(false))
      e.preventDefault();

    }



  return (
    <>
    <form onSubmit={handleSubmit(handelSubmitForm)}>
      <ThemeProvider theme={theme}>
        <Typography variant="h5" sx={CustomersFormHeader}>
            LagerSaldo
        </Typography>
        <Card className="mt-4" sx={{ border: "#163b60 solid 2px" }}>
          <CardContent className="flex justify-center">
            <Grid container spacing={1}>
            <Grid
                  item
                  className="w-full mt-4" sx={{ display:"flex", justifyContent:"center" }}
                >
                   <FormControl variant="standard" className="w-11/12">
                    <InputLabel id="demo-simple-select-standard-label">
                    Välja vårdgivare
                    </InputLabel>
                    <Select
                      required
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={allValues.healthcareProvidersId}
                      onChange={handelOnChange}
                      label="Välja vårdgivare"
                      className="w-full"
                      inputProps={register("healthcareProvidersId")}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>

                      {GetAllHCProveiders.map(HCProvider => {
                        return <MenuItem key={HCProvider.id} value={HCProvider.id}>{HCProvider.name}</MenuItem>
                      })}
               
                    </Select>
                  </FormControl> 
                </Grid>
                <Grid
                  item
                  className="w-full mt-4" sx={{ display:"flex", justifyContent:"center" }}
                >
                   <FormControl variant="standard" className="w-11/12">
                    <InputLabel id="demo-simple-select-standard-label">
                    Välja leverantör
                    </InputLabel>
                    <Select
                      required
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={allValues.vaccineSupplierId}
                      onChange={handelOnChange}
                      label="Välja leverantör"
                      className="w-full"
                      inputProps={register("vaccineSupplierId")}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>

                      {GetAllVaccineSuppliers.map(supplier => {
                        return <MenuItem key={supplier.id} value={supplier.id}>{supplier.supplierName}</MenuItem>
                      })}
               
                    </Select>
                  </FormControl> 
                </Grid>
                
              <Grid item  className="w-full flex justify-center">
                <TextField
                
                  color="secondary"
                  className="w-11/12"
                  inputProps={register('quantityDose')}
                  type="number"
                  onChange={handelOnChange}
                  required
                  label="kvantitet dos"
                  variant="standard"
                  sx={CustomersFormTextfild}
                  helperText= {errors.quantityDose?.message && errors.name?.message.charAt(0).toUpperCase() + errors.quantityDose?.message.slice(1)}
                />
              </Grid>
              <Grid item  className="w-full flex justify-center">
                <TextField
                
                  color="secondary"
                  className="w-11/12"
                  inputProps={register('quantityVial')}
                  type="number"
                  onChange={handelOnChange}
                  required
                  label="kvantitet vial"
                  variant="standard"
                  sx={CustomersFormTextfild}
                  helperText= {errors.quantityVial?.message && errors.name?.message.charAt(0).toUpperCase() + errors.quantityVial?.message.slice(1)}
                />
              </Grid>
       
             

              <Grid
       
                className="w-full flex justify-center"
                sx={CustomersFormTextfild}
              >
                <LoadingButton
                  color="secondary"
                  type="submit"
                  loading={loading}
                  loadingPosition="start"
                  startIcon={<SaveIcon />}
                  variant="contained"
                  className="w-11/12"
                >
                  Spara
                </LoadingButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </ThemeProvider>
      </form>
    </>
  );
}
