


import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Container, AppBar as MuiAppBar, Stack, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { styled,alpha, useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import NightlightIcon from '@mui/icons-material/Nightlight';

import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import LightModeIcon from '@mui/icons-material/LightMode';
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));







const drawerWidth = 240;





const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));


const Topbar = ({handleDrawerOpen, open,setmode}) => {

  const theme = useTheme();




  return (
      <StyledAppBar position="fixed" open={open}>


        
        <Toolbar>

   
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
        


                  <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase />



          </Search>

     <Box display="Flex" justifyContent={"end"} flexGrow={1}>     
<Stack direction={'row'}>

{theme.palette.mode==="light"?  (
  <IconButton aria-label="toggle dark mode" color='inherit' onClick={()=>{setmode("dark")}} >
    <LightModeIcon/>
  </IconButton>
) : (
  <IconButton aria-label="toggle light mode" color='inherit' onClick={()=>{setmode("light")}} >
    <NightlightIcon/>
  </IconButton>
)}




 


  <IconButton aria-label="delete">
<AddAlertIcon/>
</IconButton>


  <IconButton aria-label="delete">
<SettingsRoundedIcon/>
</IconButton>

  <IconButton aria-label="delete">
<PersonOutlineIcon/>
</IconButton>



</Stack>

          </Box>



     </Toolbar>
 
      </StyledAppBar>
  )
}


export default Topbar