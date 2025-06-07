import * as React from 'react';
import { styled, createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';

import { grey } from '@mui/material/colors';


import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

const drawerWidth = 240;




const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



export default function Home() {

  
const [mode,setmode]=React.useState(localStorage.getItem("mode") || "light");


React.useEffect(()=>{
  localStorage.setItem("mode",mode)
},[mode])

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
 const handleDrawerClose = () => {
    setOpen(false);
  };

const darkTheme = createTheme({
  palette: {
    mode: mode,
    primary: {
      main: '#1976d2',
    },
  
  },
});


  return (
     
    <Box sx={{ display: 'flex' ,width:"100%" }}  >
   

      
        <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <Topbar  handleDrawerOpen={handleDrawerOpen} open={open} setmode={setmode} />


<Sidebar open={open} handleDrawerClose={handleDrawerClose}  />


 <Box component="main" sx={{
            flexGrow: 1,
         p:2,
            width: '100%',
            overflowX: 'hidden',
          }} >
     
        <DrawerHeader />
        <Outlet/>
      
   </Box>
</ThemeProvider>
 </Box>

   
  );
  
}
