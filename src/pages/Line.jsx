import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { Box, useMediaQuery, useTheme } from '@mui/material'

const LineCart = ({isdashboard}) => {

    const isMobile = useMediaQuery('(max-width: 480px)');
  const isTablet = useMediaQuery('(min-width: 481px) and (max-width: 900px)');

    const responsiveHeight = isMobile ? 250 : isTablet ? 350 :  450;
     const boxWidth = isMobile ? '95%' : isTablet ? '90%' : '80%';
     const responsiveMargin = isMobile
    ? { top: 30, bottom: 30, left: 30, right: 10 }
    : isTablet
    ? { top: 40, bottom: 50, left: 50, right: 20 }
    : { top: 50, bottom: 50, left:40, right: 40 };

const theme=useTheme();
    const data=[
  {
    "id": "japan",
    "data": [
      {
        "x": "plane",
        "y": 9
      },
      {
        "x": "helicopter",
        "y": 59
      },
      {
        "x": "boat",
        "y": 38
      },
      {
        "x": "train",
        "y": 67
      },
      {
        "x": "subway",
        "y": 93
      },
      {
        "x": "bus",
        "y": 130
      },
      {
        "x": "car",
        "y": 37
      },
      {
        "x": "moto",
        "y": 35
      },
      {
        "x": "bicycle",
        "y": 105
      },
      {
        "x": "horse",
        "y": 298
      },
      {
        "x": "skateboard",
        "y": 120
      },
      {
        "x": "others",
        "y": 22
      }
    ]
  },
  {
    "id": "france",
    "data": [
      {
        "x": "plane",
        "y": 145
      },
      {
        "x": "helicopter",
        "y": 202
      },
     
      {
        "x": "subway",
        "y": 204
      },
      {
        "x": "bus",
        "y": 263
      },
      {
        "x": "car",
        "y": 33
      },
      {
        "x": "moto",
        "y": 41
      },
      {
        "x": "bicycle",
        "y": 165
      },
      {
        "x": "horse",
        "y": 205
      },
      {
        "x": "skateboard",
        "y": 183
      },
      {
        "x": "others",
        "y": 198
      }
    ]
  },
  {
    "id": "us",
    "data": [
      {
        "x": "plane",
        "y": 27
      },
      {
        "x": "helicopter",
        "y": 51
      },
      {
        "x": "boat",
        "y": 185
      },
      {
        "x": "train",
        "y": 137
      },
      {
        "x": "subway",
        "y": 211
      },
      {
        "x": "bus",
        "y": 6
      },
      {
        "x": "car",
        "y": 219
      },
      {
        "x": "moto",
        "y": 38
      },
      {
        "x": "bicycle",
        "y": 215
      },
      {
        "x": "horse",
        "y": 165
      },
      {
        "x": "skateboard",
        "y": 108
      },
      {
        "x": "others",
        "y": 109
      }
    ]
  },
  {
    "id": "germany",
    "data": [
      {
        "x": "plane",
        "y": 230
      },
      {
        "x": "helicopter",
        "y": 176
      },
      {
        "x": "boat",
        "y": 154
      },
      {
        "x": "train",
        "y": 184
      },
      {
        "x": "subway",
        "y": 119
      },
      {
        "x": "bus",
        "y": 20
      },
      {
        "x": "car",
        "y": 118
      },
      {
        "x": "moto",
        "y": 179
      },
      {
        "x": "bicycle",
        "y": 266
      },
      {
        "x": "horse",
        "y": 130
      },
      {
        "x": "skateboard",
        "y": 217
      },
      {
        "x": "others",
        "y": 9
      }
    ]
  },
  {
    "id": "norway",
    "data": [
      {
        "x": "plane",
        "y": 87
      },
      {
        "x": "helicopter",
        "y": 211
      },
      {
        "x": "boat",
        "y": 224
      },
      {
        "x": "train",
        "y": 233
      },
      {
        "x": "subway",
        "y": 35
      },
      {
        "x": "bus",
        "y": 159
      },
      {
        "x": "car",
        "y": 231
      },
      {
        "x": "moto",
        "y": 180
      },
      {
        "x": "bicycle",
        "y": 189
      },
      {
        "x": "horse",
        "y": 65
      },
      {
        "x": "skateboard",
        "y": 43
      },
      {
        "x": "others",
        "y": 267
      }
    ]
  }
]
  return (
     <Box height={isdashboard?"280px":responsiveHeight}  mx={"auto"} width={boxWidth}    maxWidth="100vw"
  overflow="hidden"  >

          <ResponsiveLine /* or Line for fixed dimensions */
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
            "strokeWidth":0
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
            "fill": "#333333",
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
            "outlineColor": "#ffffff",
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
        margin={responsiveMargin}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisBottom={{ legend: 'transportation', legendOffset: 36 }}
        axisLeft={{ legend: 'count', legendOffset: -40 }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: 'circle'
            }
        ]}
    />
     </Box>
  )
}

export default LineCart