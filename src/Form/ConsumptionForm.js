import React, { useState } from "react";
import { purple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SaveIcon from "@mui/icons-material/Save";
import { useSelector, useDispatch } from "react-redux";
import { ChangeModalStatus } from "features/Slices/OtherSlice/ModalSlice";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { AddConsumption } from "features/Slices/PagesSlices/ConsumptionSlice";

const schema = yup
  .object()
  .shape({
    useByDate: yup.date(),
    quantityVial: yup.number().min(1),
    vaccineSupplierId: yup.string().min(36),
    healthcareProvidersId: yup.string().min(36),
  })
  .required();

export default function HealthcareProviderForm() {
  const { GetAllHCProveiders } = useSelector(
    (state) => state.HealthcareProvider
  );
  const { GetAllVaccineSuppliers } = useSelector(
    (state) => state.VaccineSupplier
  );

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const initialValues = {
    useByDate: "",
    quantityVial: "",
    vaccineSupplierId: "",
    healthcareProvidersId: "",
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

    dispatch(AddConsumption(allValues));

    //Button status enable and loading animation off
    setLoading(false);

    //Close PopUp Form
    dispatch(ChangeModalStatus(false));

    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit(handelSubmitForm)}>
        <ThemeProvider theme={theme}>
          <Typography variant="h5" sx={CustomersFormHeader}>
            Vårdgivare
          </Typography>
          <Card className="mt-4" sx={{ border: "#163b60 solid 2px" }}>
            <CardContent className="flex justify-center">
              <Grid container spacing={1}>
                <Grid item className="w-full flex justify-center">
                  <TextField
                    color="secondary"
                    className="w-11/12"
                    onChange={handelOnChange}
                    name="useByDate"
                    required
                    variant="standard"
                    type="date"
                    sx={CustomersFormTextfild}
                    helperText={
                      errors.desiredDeliveryDate?.message ||
                      "Förbruknings Datum"
                    }
                  />
                </Grid>

                <Grid item className="w-full flex justify-center">
                  <TextField
                    color="secondary"
                    className="w-11/12"
                    inputProps={register("quantityVial")}
                    onChange={handelOnChange}
                    required
                    type="number"
                    label="kvantitet vial"
                    variant="standard"
                    sx={CustomersFormTextfild}
                    helperText={
                      errors.name?.message &&
                      errors.name?.message.charAt(0).toUpperCase() +
                        errors.name?.message.slice(1)
                    }
                  />
                </Grid>
                <Grid
                  item
                  className="w-full mt-4"
                  sx={{ display: "flex", justifyContent: "center" }}
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

                      {GetAllHCProveiders.map((HCProvider) => {
                        return (
                          <MenuItem key={HCProvider.id} value={HCProvider.id}>
                            {HCProvider.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  className="w-full mt-4"
                  sx={{ display: "flex", justifyContent: "center" }}
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

                      {GetAllVaccineSuppliers.map((supplier) => {
                        return (
                          <MenuItem key={supplier.id} value={supplier.id}>
                            {supplier.supplierName}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
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
