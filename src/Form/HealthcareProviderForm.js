import React, {useState, SyntheticEvent, useEffect} from "react";

import {
  FilledInput,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,useMediaQuery  

} from "@mui/material";
import Box from "@mui/material";
import { purple } from "@mui/material/colors";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import SaveIcon from '@mui/icons-material/Save';
import { ConstructionOutlined } from "@mui/icons-material";

import {IconButton, AttachFileIcon} from "@mui/material";
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { padding } from "@mui/system";
import { useSelector, useDispatch } from 'react-redux'
import { ChangeModalStatus } from "features/Slices/ModalSlice";
import { ServerGetAll,ServerAdd, ServerUpdate, ServerDelete } from 'features/Slices/ServerSlice'



const schema = yup
  .object()
  .shape({
    name: yup.string().min(3),
  })
  .required();


export default function HealthcareProviderForm() {

  const {Status} = useSelector(state => state.Modal)
  const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
      resolver: yupResolver(schema)
    });

    const initialValues = {
      name: "",
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
     
      
    
        const user = {
          Name:allValues.name,        
        }
        dispatch(ServerAdd({type:"HealthcareProviders", values:user}))
    
      setLoading(false);

          dispatch(ChangeModalStatus(false))
      e.preventDefault();

    }



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
            
                
              <Grid item  className="w-full flex justify-center">
                <TextField
                
                  color="secondary"
                  className="w-11/12"
                  inputProps={register('name')}
                  onChange={handelOnChange}
                  required
                  label="Name"
                  variant="standard"
                  sx={CustomersFormTextfild}
                  helperText= {errors.name?.message && errors.name?.message.charAt(0).toUpperCase() + errors.name?.message.slice(1)}
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
