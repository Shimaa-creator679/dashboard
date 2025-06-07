import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { Box, useTheme } from '@mui/material'


const data=[
  {
    "id": "stylus",
    "label": "stylus",
    "value": 378,
    "color": "hsl(348, 70%, 50%)"
  },
  {
    "id": "go",
    "label": "go",
    "value": 550,
    "color": "hsl(59, 70%, 50%)"
  },
  {
    "id": "hack",
    "label": "hack",
    "value": 358,
    "color": "hsl(17, 70%, 50%)"
  },
  {
    "id": "java",
    "label": "java",
    "value": 127,
    "color": "hsl(305, 70%, 50%)"
  },
  {
    "id": "php",
    "label": "php",
    "value": 576,
    "color": "hsl(27, 70%, 50%)"
  }
]

const Pie = ({legend,arc,height,enableArcLabels    }) => {

  const theme=useTheme();
  return (

    <Box height={height}  mx={"auto"} width={"80%"}>

    
   <ResponsivePie /* or Pie for fixed dimensions */
        data={data}
        margin={{ top: 40, right: 100, bottom: 80, left: 100 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
            enableArcLabels={enableArcLabels}

          enableArcLinkLabels={arc}

        arcLabelsSkipAngle={10}

        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={
          legend
            ? [
                {
                  anchor: 'bottom',
                  direction: 'row',
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: theme.palette.text.primary,
                  itemDirection: 'left-to-right',
                  symbolSize: 18,
                  symbolShape: 'circle'
                }
              ]
            : undefined
        }
    />

    </Box>
  )
}

export default Pie