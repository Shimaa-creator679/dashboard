import React from 'react'

import { ResponsiveMarimekko } from '@nivo/marimekko'
import { Box, useTheme } from '@mui/material'


 const data=[
  {
    "statement": "it's good",
    "participation": 12,
    "stronglyAgree": 32,
    "agree": 27,
    "disagree": 6,
    "stronglyDisagree": 1
  },
  {
    "statement": "it's sweet",
    "participation": 3,
    "stronglyAgree": 32,
    "agree": 29,
    "disagree": 13,
    "stronglyDisagree": 11
  },
  {
    "statement": "it's spicy",
    "participation": 29,
    "stronglyAgree": 29,
    "agree": 11,
    "disagree": 1,
    "stronglyDisagree": 28
  },
  {
    "statement": "worth eating",
    "participation": 10,
    "stronglyAgree": 5,
    "agree": 16,
    "disagree": 30,
    "stronglyDisagree": 30
  },
  {
    "statement": "worth buying",
    "participation": 28,
    "stronglyAgree": 22,
    "agree": 28,
    "disagree": 9,
    "stronglyDisagree": 0
  }
]

const Barchart = ({height}) => {

    const theme=useTheme();
  return (

    <Box height={height}  mx={"auto"} width={"100%"}>
     <ResponsiveMarimekko /* or Marimekko for fixed dimensions */
        data={data}

        theme={{
   
    "text": {
        "fontSize": 11,
        "fill": "#333333",
        "outlineWidth": 0,
        "outlineColor": "#ffffff"
    },
    "axis": {
        "domain": {
            "line": {
                "stroke": "#777777",
                "strokeWidth": 1
            }
        },
        "legend": {
            "text": {
                "fontSize": 12,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        },
        "ticks": {
            "line": {
                "stroke": "#777777",
                "strokeWidth": 1
            },
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        }
    },
    "grid": {
        "line": {
            "stroke": "#dddddd",
            "strokeWidth": 1
        }
    },
    "legends": {
        "title": {
            "text": {
                "fontSize": 11,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        },
        "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "#ffffff"
        },
        "ticks": {
            "line": {},
            "text": {
                "fontSize": 10,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        }
    },
    "annotations": {
        "text": {
            "fontSize": 13,
            "fill": "#333333",
            "outlineWidth": 2,
            "outlineColor": theme.palette.text.primary,
            "outlineOpacity": 1
        },
        "link": {
            "stroke": "#000000",
            "strokeWidth": 1,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "outline": {
            "stroke": "#000000",
            "strokeWidth": 2,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "symbol": {
            "fill": "#000000",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        }
    },
    "tooltip": {
        "wrapper": {},
        "container": {
            "background": "#ffffff",
            "color": "#333333",
            "fontSize": 12
        },
        "basic": {},
        "chip": {},
        "table": {},
        "tableCell": {},
        "tableCellValue": {}
    }
}}
      
        id="statement"
        value="participation"
        dimensions={[
            {
                id: 'disagree strongly',
                value: 'stronglyDisagree'
            },
            {
                id: 'disagree',
                value: 'disagree'
            },
            {
                id: 'agree',
                value: 'agree'
            },
            {
                id: 'agree strongly',
                value: 'stronglyAgree'
            }
        ]}
        innerPadding={9}
        axisRight={{}}
        axisBottom={{ legend: 'participation', legendOffset: 36 }}
        axisLeft={{ legend: 'opinions', legendOffset: -40 }}
        margin={{ top: 40,  bottom: 100, left: 40 ,right: 40 }}

        colors={{ scheme: 'pastel1' }}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 80,
                itemWidth: 140,
                itemHeight: 18,
                itemDirection: 'right-to-left'
            }
        ]}
    />
    </Box>
  )
}

export default Barchart