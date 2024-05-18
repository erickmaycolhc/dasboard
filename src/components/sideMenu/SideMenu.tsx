import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import NextLink from "next/link";
import { useMediaQuery } from "@mui/material";
import css from "./SideMenu.module.css";

import EqualizerIcon from "@mui/icons-material/Equalizer";
import Person2Icon from "@mui/icons-material/Person2";
import { Settings } from "@mui/icons-material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { signOut } from "next-auth/react";

const drawerWidth = 240;
const openedMixin = (theme: Theme): CSSObject => ({
  //convimiento del open del drawer
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  //convimiento del close del drawer
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

const menuRouteList = ["data", "profile", "settings", ""];
const menuListTranslations = ["Data", "Profile", "Settings", "Sign Out"];
const menuListIcons = [
  <EqualizerIcon />,
  <Person2Icon />,
  <Settings />,
  <ExitToAppIcon />,
];

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideMenu = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const mobileCheck = useMediaQuery("(min-width: 600px)");
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemButtonClick = (text: string) => {
    text === "Sign Out" ? signOut() : null;
    handleDrawerClose();
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        [`& .MuiDrawer-paper`]: {
          top: mobileCheck ? 64 : 57,
        },
      }}
    >
      <div className={css.drawerHeader}>
        <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <Divider />
      <List>
        {menuListTranslations.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <NextLink
              className={css.link}
              href={`/dashboard/${menuRouteList[index]}`}
            >
              <ListItemButton
                onClick={() => handleListItemButtonClick(text)}
                title={text}
                aria-label={text}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {menuListIcons[index]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    color: theme.palette.text.primary,
                    opacity: open ? 1 : 0,
                  }}
                />
              </ListItemButton>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideMenu;
