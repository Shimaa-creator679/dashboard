import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const Peperr = () => {
  return (
    <Paper sx={{p:1,mt:2}}>

   
 <Stack direction={"row"} spacing={2} justifyContent={"space-between"} alignItems={"center"} >

<Box>
    

    <Typography>Test</Typography>
    <Typography>Test2</Typography>
</Box>
<Box>
<Typography>Test3</Typography>
</Box>
<Box>
<Button variant='contained'>Test4</Button>
</Box>



 </Stack>
  </Paper>
  )
}

export default Peperr