import React, { useState } from "react";


import {
  Typography,
  Card,FormControl,
  CardContent,
  Grid,MenuItem,
  TextField,InputLabel,
} from "@mui/material";
import { ServerAdd } from "features/Slices/ServerSlice";

import Select, { SelectChangeEvent } from '@mui/material/Select';

import { ChangeModalStatus } from "features/Slices/ModalSlice";
import { purple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import SaveIcon from "@mui/icons-material/Save";

import { useSelector, useDispatch } from "react-redux";

const schema = yup
  .object()
  .shape({
    capacityDate: yup.date(),
    capacityDoses: yup.number().min(1),
    healthcareProvidersId: yup.string().min(36),
  })
  .required();

export default function CapacitForm() {
  const {GetAllCapacitie} = useSelector(state => state.Capacitie)
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const initialValues = {
    capacityDate: "",
    capacityDoses: 0,
    healthcareProvidersId: ""
  };
  const [allValues, setAllValues] = useState(initialValues);
  const {GetAllHCProveiders} = useSelector(state => state.HealthcareProvider)

  const handelOnChange = (data) => {
    // console.log(data.target.value)
    const { value, name } = data.target;

    setAllValues({ ...allValues, [name]: value });
  };

  const [loading, setLoading] = React.useState(false);

  function handleClick() {
    setLoading(true);
  }

  const FormHeader = (theme) => ({
    backgroundColor: "#163b60",
    color: "white",
    padding: "1rem",
  });
  const FormTextfild = (theme) => ({
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
     
          const capacity = {

            capacityDate: allValues.capacityDate,
            capacityDoses: allValues.capacityDoses,
            healthcareProvidersId: allValues.healthcareProvidersId,

    };

    

    dispatch(ServerAdd({type:"Capacities", values:capacity}))

  setLoading(false);

      dispatch(ChangeModalStatus(false))
    e.preventDefault();
  };






  return (
    <>
      <form onSubmit={handleSubmit(handelSubmitForm)}>
        <ThemeProvider theme={theme}>
          <Typography variant="h5" sx={FormHeader}>
          Kapacite
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
                    name="capacityDate"

                    required
                    variant="standard"
                    type="date"
                    sx={FormTextfild}
                    
                    helperText={
                      errors.desiredDeliveryDate?.message ||
                      "Kapacitet Datum"
                    }
                  />
                </Grid>
                <Grid
                  item
    
                  className="w-full flex justify-center"
                  sx={FormTextfild}
                >
                  <TextField
                    color="secondary"
                    className="w-11/12"
                    onChange={handelOnChange}
                    required
                    type="number"
                    inputProps={register("capacityDoses")}
                    label="Kapacitet dos"
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
                  sx={FormTextfild}
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
