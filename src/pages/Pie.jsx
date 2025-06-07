import { ResponsivePie } from '@nivo/pie';
import { Box, useTheme, useMediaQuery } from '@mui/material';



const data = [
  {
    id: 'javascript',
    label: 'JavaScript',
    value: 29,
    color: 'hsl(205, 70%, 50%)',
  },
  {
    id: 'python',
    label: 'Python',
    value: 23,
    color: 'hsl(100, 70%, 50%)',
  },
  {
    id: 'java',
    label: 'Java',
    value: 17,
    color: 'hsl(300, 70%, 50%)',
  },
  {
    id: 'php',
    label: 'PHP',
    value: 13,
    color: 'hsl(30, 70%, 50%)',
  },
  {
    id: 'c++',
    label: 'C++',
    value: 18,
    color: 'hsl(10, 70%, 50%)',
  },
];


const Pie = ({ legend, arc, height, enableArcLabels }) => {
  const theme = useTheme();

  // breakpoints دقيقة
  const isMobile = useMediaQuery('(max-width:400px)');
  const isTablet = useMediaQuery('(min-width:401px) and (max-width:900px)');

  // height ديناميكي حسب نوع الجهاز
  const chartHeight = isMobile ? 220 : isTablet ? 320 : height || 400;

  // margin أخف للموبايل
  const chartMargin = isMobile
    ? { top: 20, right: 10, bottom: 40, left: 10 }
    : isTablet
    ? { top: 30, right: 50, bottom: 50, left: 50 }
    : { top: 40, right: 100, bottom: 80, left: 100 };

  return (


    
    <Box
      mx="auto"
      sx={{
        width: isMobile ? '95%' : isTablet ? '90%' : '80%',
        height: chartHeight,
      }}
    >
      <ResponsivePie

     
        data={data}
        margin={chartMargin}
         
theme={{

  text: {
    fontSize: 11,
    fill: "#333333",
    outlineWidth: 0,
    outlineColor: "#ffffff"
  },
  axis: {
    domain: {
      line: {
        stroke: "#777777",
        strokeWidth: 1
      }
    },
    legend: {
      text: {
        fontSize: 12,
        fill: "#333333",
        outlineWidth: 0,
        outlineColor: "#ffffff"
      }
    },
    ticks: {
      line: {
        stroke: "#777777",
        strokeWidth: 1
      },
      text: {
        fontSize: 11,
        fill: "#333333",
        outlineWidth: 0,
        outlineColor: "#ffffff"
      }
    }
  },
  grid: {
    line: {
      stroke: "#dddddd",
      strokeWidth: 1
    }
  },
  legends: {
    title: {
      text: {
        fontSize: 11,
        fill: "#333333",
        outlineWidth: 0,
        outlineColor: "#ffffff"
      }
    },
    text: {
      fontSize: 11,
      fill: "#333333",
      outlineWidth: 0,
      outlineColor: "#ffffff"
    },
    ticks: {
      line: {},
      text: {
        fontSize: 10,
        fill: "#333333",
        outlineWidth: 0,
        outlineColor: "#ffffff"
      }
    }
  },
  annotations: {
    text: {
      fontSize: 13,
      fill: "#333333",
      outlineWidth: 2,
      outlineColor: "#ffffff",
      outlineOpacity: 1
    },
    link: {
      stroke: "#000000",
      strokeWidth: 1,
      outlineWidth: 2,
      outlineColor: "#ffffff",
      outlineOpacity: 1
    },
    outline: {
      stroke: "#000000",
      strokeWidth: 2,
      outlineWidth: 2,
      outlineColor: "#ffffff",
      outlineOpacity: 1
    },
    symbol: {
      fill: "#000000",
      outlineWidth: 2,
      outlineColor: "#ffffff",
      outlineOpacity: 1
    }
  },
  tooltip: {
    wrapper: {},
    container: {
      background: "#ffffff",
      color: theme.palette.secondary.main,
      fontSize: 12
    },
    basic: {},
    chip: {},
    table: {},
    tableCell: {},
    tableCellValue: {}
  }
}}


        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={enableArcLabels}
        enableArcLinkLabels={isMobile === false} // لا تعرض روابط الأقواس في الشاشات الضيقة
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={
          legend && !isMobile
            ? [
                {
                  anchor: 'bottom',
                  direction: 'row',
                  justify: false,
                  translateX: 5,
                  translateY: 40,
                  itemsSpacing: 20,
                  itemWidth: 40,
                  itemHeight: 18,
                  itemTextColor: "theme.palette.text.primary",
                  itemDirection: 'left-to-right',
                  symbolSize: 18,
                  symbolShape: 'circle',
                },
              ]
            : undefined
        }
      />
    </Box>
  );
};
export default Pie;