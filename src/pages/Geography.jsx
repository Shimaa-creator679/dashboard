import { Box, useTheme } from '@mui/material'
import { ResponsiveChoropleth } from '@nivo/geo'
import { geo } from '../components/geo'



 const data=[
  {
    "id": "AFG",
    "value": 499000
  },
  {
    "id": "AGO",
    "value": 743791
  },
  {
    "id": "ALB",
    "value": 293115
  },
  {
    "id": "ARE",
    "value": 147985
  },
  {
    "id": "ARG",
    "value": 934535
  },
  {
    "id": "ARM",
    "value": 256209
  },
  {
    "id": "ATA",
    "value": 720526
  },
  {
    "id": "ATF",
    "value": 806321
  },
  {
    "id": "AUT",
    "value": 529651
  },
  {
    "id": "AZE",
    "value": 788970
  },
  {
    "id": "BDI",
    "value": 410675
  },
  {
    "id": "BEL",
    "value": 482851
  },
  {
    "id": "BEN",
    "value": 398735
  },
  {
    "id": "BFA",
    "value": 809718
  },
  {
    "id": "BGD",
    "value": 949320
  },
  {
    "id": "BGR",
    "value": 690130
  },
  {
    "id": "BHS",
    "value": 521148
  },
  {
    "id": "BIH",
    "value": 152572
  },
]

const Geography = ({height}) => {

    const theme=useTheme();
  return (
     <Box height={height}  mx={"auto"} width={"100%"}  >
     <ResponsiveChoropleth /* or Choropleth for fixed dimensions */
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
        features={geo.features}
        margin={{ top: 0, right: 40, bottom: 0, left: 40 }}
        colors="spectral"
        domain={[0, 1000000]}
        unknownColor="#d3cdf2"
        label="properties.name"
        valueFormat=".2s"
      
        graticuleLineColor="#dddddd"
        borderColor={{ theme: 'background' }}
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#444444',
                itemOpacity: 0.85,
                symbolSize: 18
            }
        ]}
    />
     </Box>
  )
}

export default Geography