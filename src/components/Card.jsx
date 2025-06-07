
import {   Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from '@nivo/pie'


import EmailIcon from "@mui/icons-material/Email";

const data=[
  {
    "id": "rust",
    "label": "rust",
    "value": 48,
    "color": "hsl(8, 70%, 50%)"
  },
  {
    "id": "ruby",
    "label": "ruby",
    "value": 61,
    "color": "hsl(316, 70%, 50%)"
  },
  {
    "id": "css",
    "label": "css",
    "value": 397,
    "color": "hsl(320, 70%, 50%)"
  },
  {
    "id": "hack",
    "label": "hack",
    "value": 343,
    "color": "hsl(309, 70%, 50%)"
  },
  {
    "id": "elixir",
    "label": "elixir",
    "value": 521,
    "color": "hsl(301, 70%, 50%)"
  }
]

const Card = ({icon,title,subtitle,increase,scheme}) => {

  const theme=useTheme();
  return (
  <Paper

            sx={{ p: 2, display: "flex", justifyContent: "space-between",alignItems:"center" }}>
            <Stack>
          <Box sx={{color:theme.palette.secondary.main}}>    {icon}</Box>
              <Typography>{title}</Typography>
              <Typography>{subtitle}</Typography>
            </Stack>

            <Stack sx={{ display: "flex", alignItems: "center" ,justifyContent:"center"}}>
             <Box sx={{ width: "80px", height: "80px" ,marginBottom:1, }}>
                 <ResponsivePie /* or Pie for fixed dimensions */
        data={data}
             colors={{ scheme: scheme }}
        margin={{   top: 10, bottom: 10 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
       enableArcLinkLabels={false}
       enableArcLabels={false}
        activeOuterRadiusOffset={8}
       
        
    />
             </Box>

              <Typography sx={{textAlign:"center"}}>{increase}</Typography>
            </Stack>
          </Paper>
  )
}

export default Card