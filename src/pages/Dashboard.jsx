import { Box, Button } from '@mui/material'
import { GridDownloadIcon } from '@mui/x-data-grid'
import React from 'react'
import Row1 from '../components/Row1'
import Row2 from '../components/Row2'
import Row3 from '../components/Row3'
import Header from '../assets/shared/Header'

const Dashboard = () => {
  return (
   <Box width={"100%"} >

    <Header title={"Dashboard"} subtitle={"welcome to your Dashboard"}/>
    {/* button */}
    <Box textAlign={"end"}>
      <Button variant="contained" color="primary">
        <GridDownloadIcon/>
      Download
      </Button>
    </Box>

    <Row1/>
    <Row2/>
    <Row3/>




   </Box>
  )
}

export default Dashboard