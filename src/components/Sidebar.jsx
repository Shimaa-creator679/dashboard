import { useTheme } from "@emotion/react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupIcon from '@mui/icons-material/Group';
import MuiDrawer from "@mui/material/Drawer";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Avatar } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import BarChartIcon from '@mui/icons-material/BarChart';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import TimelineIcon from '@mui/icons-material/Timeline';
import MyLocationIcon from '@mui/icons-material/MyLocation';

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Array1 = [
  {
    text: "Dashboard",
    icon: <HomeOutlinedIcon />,
    path: "/",
  },
  {
    text: "MAnageteam",
    icon: <GroupIcon />,
    path: "/team",
  },
  {
    text: "contacts information",
    icon: <ContactPageIcon />,
    path: "/contacts",
  },
  {
    text: "invoices balances",
    icon: <InsertDriveFileIcon />,
    path: "/invoices",
  },
];

const Array2 = [
  {
    text: "Profile",
    icon: <PersonRemoveIcon />,
    path: "/form",
  },
  {
    text: "calender",
    icon: <CalendarMonthIcon />,
    path: "/calender",
  },
  {
    text: "faq page",
    icon: <LiveHelpIcon />,
    path: "/Faq",
  },
];

const Array3 = [
  {
    text: "BAr chart",
    icon: <BarChartIcon />,
    path: "/barchart",
  },
  {
    text: "pie",
    icon: <DonutLargeIcon />,
    path: "/pie",
  },
  {
    text: "line",
    icon: <TimelineIcon />,
    path: "/line",
  },
  {
    text: "geography",
    icon: <MyLocationIcon />,
    path: "/geography",
  },
];

const Sidebar = ({ open, handleDrawerClose }) => {
  const theme = useTheme();

  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        height: "100vh",
        overflow: "hidden",
      }}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>


      <Divider />


      <Avatar
        sx={{ mr: "auto", ml: "auto", my: 2 }}
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
      />


      <Typography
        align="center"
        variant="button"
        component="h2"
        sx={{ fontSize: open ? "17" : 0, transition: ".5s" }}>
        h1. Heading
      </Typography>


      <Typography
        align="center"
        variant="button"
        component="h2"
        sx={{
          fontSize: open ? "17" : 0,
          transition: ".5s",
          color: theme.palette.info.main,
        }}>
        h1. Heading
      </Typography>


      <Divider />

      <List>
        {Array1.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{ display: "block", color: "inherit" }}
            component={Link}
            to={item.path}>
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  minWidth: 48,
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "dark"
                        ? grey[300]
                        : grey[200]
                      : "inherit",
                  borderRadius: open ? "0" : "50%",
            width: open ? "100%" : 48,
                  height: 48,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}>
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}>
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array2.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{ display: "block", color: "inherit" }}
            component={Link}
            to={item.path}>
            <ListItemButton
              sx={[
                {
                 Height: 48,
                 Width: 48,
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "dark"
                        ? grey[300]
                        : grey[200]
                      : "inherit",
                  borderRadius: open ? "0" : "24px",
            width: open ? "100%" : 48,
                  height: 48,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}>
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}>
                {}
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array3.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{ display: "block", color: "inherit" }}
            component={Link}
            to={item.path}>
            <ListItemButton
              sx={[
                {

             minHeight: 48,
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "dark"
                        ? grey[300]
                        : grey[200]
                      : "inherit",
                  borderRadius: open ? "0" : "50%",
                  width: open ? "100%" : 48,
                  height: 48,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}>
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}>
                {}
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />

            </ListItemButton>

          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
