import React, { useState } from "react";
import Select from '@mui/material/Select';
import { ChangeModalStatus } from "features/Slices/ModalSlice";
import { purple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SaveIcon from "@mui/icons-material/Save";
import { useSelector, useDispatch } from "react-redux";
import { AddOrders } from "features/Slices/OrderingSlice";
import {
  Typography,
  Card,FormControl,
  CardContent,
  Grid,MenuItem,
  TextField,InputLabel,
} from "@mui/material";


const schema = yup
  .object()
  .shape({
    desiredDeliveryDate: yup.date(),
    quantityDose: yup.number().min(1),
    healthcareProvidersId: yup.string().min(36),
  })
  .required();

export default function OrderForm({allHCProviders}) {
  const {GetAllHCProveiders} = useSelector(state => state.HealthcareProvider)
  const dispatch = useDispatch();
  const DesiredDeliveryDateField = new Date().toISOString().slice(0, 10);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });

  const initialValues = {
    desiredDeliveryDate: "",
    quantityDose: 0,
    healthcareProvidersId: "",
    gln: "",
  };
  const [allValues, setAllValues] = useState(initialValues);

  const handelOnChange = (data) => {
    const { value, name } = data.target;

    setAllValues({ ...allValues, [name]: value });
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
   //Button status disable and loading animation on
   setLoading(true);
  
   //Send item to DB
   
   dispatch(AddOrders(allValues))

   //Button status enable and loading animation off
    setLoading(false);

   //Close PopUp Form
   dispatch(ChangeModalStatus(false))


    e.preventDefault();
  };






  return (
    <>
      <form onSubmit={handleSubmit(handelSubmitForm)}>
        <ThemeProvider theme={theme}>
          <Typography variant="h5" sx={CustomersFormHeader}>
            Beställning
          </Typography>
          <Card className="mt-4" sx={{ border: "#163b60 solid 2px" }}>
            <CardContent className="flex justify-center">
              <Grid container spacing={1}>
                <Grid
                  item
                  className="w-full flex justify-center"
                >
                  <TextField
                    color="secondary"
                    className="w-11/12"
           
                    onChange={handelOnChange}
                    name="desiredDeliveryDate"
                    inputProps={{
                      min: DesiredDeliveryDateField
                    }}
                    required
                    variant="standard"
                    type="date"
                    sx={CustomersFormTextfild}
                    
                    helperText={
                      errors.desiredDeliveryDate?.message ||
                      "Önskat leveransdatum"
                    }
                  />
                </Grid>
                <Grid
                  item
    
                  className="w-full flex justify-center"
                  sx={CustomersFormTextfild}
                >
                  <TextField
                    color="secondary"
                    className="w-11/12"
                    onChange={handelOnChange}
                    required
                    type="number"
                    inputProps={register("quantityDose")}
                    label="Kvantitets dos"
                    variant="standard"
                    helperText={
                      errors.quantityDose?.message || "Endast siffror tillåtet"
                    }
                  />
                </Grid>
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
                  className="w-full flex justify-center"
                >
                  <TextField
                    color="secondary"
                    className="w-11/12"
                    onChange={handelOnChange}
                    inputProps={register("gln")}
                    label="GLN - Mottagare"
                    variant="standard"
                    sx={CustomersFormTextfild}
                    helperText={
                      errors.gln?.message && "Password do not match"
                    }
                  />
                </Grid>
                <Grid
                  item
    
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
