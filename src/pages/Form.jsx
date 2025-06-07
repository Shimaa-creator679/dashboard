import { Alert, Box, Button, FormControl, TextField, Typography, useTheme } from '@mui/material'
import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from "react-hook-form"
import Select from '@mui/material/Select';

import Snackbar from '@mui/material/Snackbar';

const names = [
  'user',
  'admin',
  'menager',

];
const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const egyptPhoneRegex = /^(010|011|012|015)\d{8}$/;



function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Formm = () => {
    const [open, setOpen] = React.useState(false);
     const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


   const handleClick = () => {
    setOpen(true);
  };

    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = () => handleClick();

      const [personName, setPersonName] = React.useState([]);
       const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
    const theme = useTheme();
  return (
     <Box height={"75vh"}  mx={"auto"} width={"80%"}>
        <Box display={'flex'} flexDirection={"column"} gap={3} component={"form"}  onSubmit={handleSubmit(onSubmit)} >

            <Box display={"Flex"} sx={{position:"relative"}} flexDirection={"row"} gap={3} justifyContent={'space-between'} alignItems={'center'} >
                <TextField  helperText={
      errors.firstName?.type === "required"
        ? "This field is required"
        : errors.firstName?.type === "minLength"
        ? "Min length is 2"
        : ""
    }  error={errors.firstName}  fullWidth id="filled-basic" label="Filled" variant="filled" 
             {...register("firstName", { required: true, minLength: 2 })} />


             
             
                <TextField  error={errors.firstName}  
                 helperText={
      errors.lastName?.type === "required"
        ? "This field is required"
        : errors.lastName?.type === "minLength"
        ? "Min length is 2"
        : ""
    } fullWidth id="filled-basic" label="Filled" variant="filled" 
             {...register("lastName", { required: true, minLength: 2 })} />
             
            

            </Box>
           
        <TextField id="filled-basic" label="Email" variant="filled" error={errors.Email}  {...register("Email", { required: true, pattern: emailRegex})} 
         helperText={
      errors.Email?.type === "required"
        ? "This field is required"
        : errors.Email?.type === "pattern"
        ? "Invalid email address"
        : ""
    }
        
        
        />
        <TextField id="filled-basic" label="phone" variant="filled"   helperText={
      errors.phone?.type === "required"
        ? "This field is required"
        : errors.phone?.type === "pattern"
        ? "Invalid phone number"
        : ""
    }
     error={errors.phone}  {...register("phone", { required: true, pattern: egyptPhoneRegex})}
      />



                <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="filled-basic" label="Filled" variant="filled" /> 
           <FormControl fullWidth sx={{ m: 1,  }}>
        <InputLabel id="demo-multiple-name-label" variant='filled'>ROle</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
              sx={{fontSize:"10px"}}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl> 

      <Box sx={{display:"flex",justifyContent:"end"}} >
        <Button  type="submit" variant="contained" >create user</Button>
      </Box>


      <Snackbar  anchorOrigin={{ vertical:"top", horizontal:"left" }} open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert
    onClose={handleClose}
    severity="success"
    variant="filled"
    sx={{ width: '100%' }}
  >
  submitted succfuuly
  </Alert>
</Snackbar>
        </Box>
     
    


    </Box>
  )
}

export default Formm