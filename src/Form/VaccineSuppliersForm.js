import React, { useState } from "react";
import Select from '@mui/material/Select';
import { ChangeModalStatus } from "features/Slices/OtherSlice/ModalSlice";
import { purple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SaveIcon from "@mui/icons-material/Save";
import { useSelector, useDispatch } from "react-redux";
import { AddSupplier } from "features/Slices/PagesSlices/VaccineSupplierSlice";
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
    supplierName: yup.string().min("3"),
    healthcareProvidersId: yup.string().min(36),
  })
  .required();

export default function VaccineSuppliersForm() {
  const {GetAllHCProveiders} = useSelector(state => state.HealthcareProvider)
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const initialValues = {
    supplierName: "",
    healthcareProvidersId: "",
  };
  const [allValues, setAllValues] = useState(initialValues);

  const handelOnChange = (data) => {

    const { value, name } = data.target;

    setAllValues({ ...allValues, [name]: value });
  };

  const [loading, setLoading] = React.useState(false);



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
    //Button status disable and loading animation on
    setLoading(true);
  
    //Send item to DB
    
    dispatch(AddSupplier(allValues))

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
          <Typography variant="h5" sx={FormHeader}>
          Vaccin Leverant??r
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
                    inputProps={register("supplierName")}
                    onChange={handelOnChange}
                    name="supplierName"
                    required
                    variant="standard"
                    sx={FormTextfild}
                    label="Leverant??rs name"
                    helperText={
                      errors.supplierName?.message }
                  />
                </Grid>
                
                <Grid
                  item
                  className="w-full mt-4" sx={{ display:"flex", justifyContent:"center" }}
                >
                   <FormControl variant="standard" className="w-11/12">
                    <InputLabel id="demo-simple-select-standard-label">
                    V??lja v??rdgivare
                    </InputLabel>
                    <Select
                      required
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={allValues.healthcareProvidersId}
                      onChange={handelOnChange}
                      label="V??lja v??rdgivare"
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
