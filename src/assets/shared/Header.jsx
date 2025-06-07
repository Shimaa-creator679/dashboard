import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

const Header = ({title,subtitle}) => {
    const theme=useTheme();
  return (
   <Box mb={4}>
    <Typography sx={{color:theme.palette.info.light}} variant='h4'>{title}</Typography>
    <Typography variant='body1'>{subtitle}</Typography>
   </Box>
  )
}

export default Header