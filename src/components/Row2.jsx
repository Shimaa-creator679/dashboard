import { Box, IconButton, Paper, Stack, Typography, useTheme } from '@mui/material'

import LineCart from '../pages/Line'
import { GridDownloadIcon } from '@mui/x-data-grid'
import Peper from './peper'
import Peperr from './peper'


const Row2 = () => {

    const theme=useTheme();
  return (
    <Stack direction={"row"} mt={2}  sx={{flexWrap:"wrap",gap:2,mt:3}} >
      
        <Paper sx={{flexGrow:1,maxWidth:"900px",mt:2}} >

<Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}  >

    <Box sx={{p:2}}>
        <Typography sx={{color:theme.palette.secondary.main}}>Revenew generated</Typography>
        <Typography>$198.456</Typography>
    </Box>
    <Box sx={{p:2}}>
        <IconButton>
          <GridDownloadIcon/>   
        </IconButton>
       
    </Box>
</Stack>



            <LineCart  isdashboard={true}/>

        </Paper>


        <Box sx={{flexGrow:1,height:"350px",overflow:"auto"}} >
   <Peperr/>
   <Peperr/>
   <Peperr/>
   <Peperr/>
   <Peperr/>
   <Peperr/>
   <Peperr/>
   <Peperr/>

        </Box>

    </Stack>
  )
}

export default Row2