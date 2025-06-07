import { Box, Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import Pie from '../pages/Pie'
import { useAnimatedPath } from '@nivo/core'
import Barchart from '../pages/Barchart'
import Geography from '../pages/Geography'

const Row3 = () => {
    const theme=useTheme();
  return (
<Stack mt={4}  direction={"row"}   sx={{flexWrap: "wrap",gap:2}}>
    <Paper sx={{width:"33%",minWidth:"200px",flexGrow:1}}>
     <Typography  variant="h6" sx={{color:theme.palette.secondary.main,ml:2}}>Campaign</Typography>
        <Pie legend={false} arc={false} height={"400px"}     enableArcLabels={false}/>
        fvg
    </Paper>



    <Paper sx={{width:"33%",minWidth:"200px",flexGrow:1}}>
  <Typography  variant="h6" sx={{color:theme.palette.secondary.main,ml:2}}>sales quantity</Typography>
<Barchart height={"400px"}/>

    </Paper>
    <Paper sx={{width:"33%",minWidth:"200px",flexGrow:1}}>
        <Geography height={"400px"}/>
    </Paper>
</Stack>
  )
}

export default Row3