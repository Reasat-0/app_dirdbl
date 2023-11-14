"use client";

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import colorPalette, { secondary } from "@/app/theme/colors";
import { useRouter } from "next/navigation";

import Nav from "@/app/newComponetns/Nav";

// import { sideBarItems } from "@/app/utils/useDashboard";

import useDashboard from "@/app/utils/useDashboard";

import { DTypography } from "@/app/utils/imports";
import { Stack } from "@mui/material";

import LogoutIcon from "../Icons/LogoutIcon";
import { signInDir } from "@/app/utils/moduleDirectories";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/app/Redux/features/authSlice";

const drawerWidth = 280;

function ResponsiveDrawer({ children }, props) {
  const t = useTranslations("Index");
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.persistedReducer);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [active, setActive] = React.useState("Home");
  const sideBarItems = useDashboard();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (activeTab, href) => {
    setActive(activeTab);
    // router.push("/sign-in");

    console.log(href);
    router.replace(href);
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      {/* {isLoggedIn === true && ( */}
      {userData?.isLoggedIn && (
        <>
          <Stack direction={"row"} sx={{ padding: "10px" }}>
            <ListItem
              disablePadding
              onClick={() => {
                dispatch(logOut());
                router.push(signInDir);
              }}
              sx={{
                "& svg": {
                  stroke: "none",
                  width: "25px",
                  "& path": {
                    fill: secondary[300],
                  },
                },
              }}
            >
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    color: "#443536",
                    width: "1.25rem",
                    height: "1.25rem",
                  }}
                >
                  <LogoutIcon />
                </ListItemIcon>
                {/* <ListItemText primary={item} /> */}
                <DTypography
                  variant="mediumBold"
                  textAccent="bold"
                  text={t("common.logOut")}
                />
              </ListItemButton>
            </ListItem>
          </Stack>
          {/* )} */}

          <Divider />
        </>
      )}
      <List>
        {sideBarItems.map(
          (item, index) =>
            !item.hidden && (
              <React.Fragment key={index}>
                {item.header && (
                  <DTypography
                    textAccent={"light"}
                    variant={"smallNormal"}
                    text={item.header}
                    style={{
                      marginTop: "1.5rem",
                      marginBottom: "1rem",
                      padding: "5px 16px 5px 30px",
                    }}
                  />
                )}
                <ListItem
                  key={index}
                  disablePadding
                  onClick={() => handleNavigation(item.title, item.href)}
                  sx={{
                    marginBottom: "1rem",
                    background:
                      active === item.title
                        ? colorPalette.palette.primaryGradient
                        : "",
                    "& svg": {
                      stroke: "none",
                      width: "25px",
                      "& path": {
                        fill: active === item.title ? "#fff" : secondary[300],
                      },
                    },
                  }}
                >
                  <ListItemButton sx={{ padding: "8px 16px 8px 30px" }}>
                    <ListItemIcon
                      sx={{
                        color:
                          active === item.title
                            ? "#fff"
                            : colorPalette.palette.accent.dark,
                        width: "1.25rem",
                        // height: "1.25rem",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    {/* <ListItemText primary={item} /> */}
                    <DTypography
                      variant="mediumBold"
                      textAccent="bold"
                      text={item.title}
                      style={{
                        color: active === item.title ? "white" : "",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </React.Fragment>
            )
        )}
      </List>
      {/* <Divider /> */}
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Account /> : <Account />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {/* <CssBaseline /> */}
      {/* Top Navbar */}
      <Nav drawerToggler={handleDrawerToggle} />
      <Stack direction={"row"}>
        <Box
          component="nav"
          sx={{
            width: { xl: drawerWidth },
            flexShrink: { xl: 0 },
            background: "#fff",
            padding: "0",
            marginTop: "5rem",
            minHeight: "calc( 100vh - 80px )",
            display: {
              xl: "block",
              xxs: "none",
            },
          }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { lg: "block", xl: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                // width: drawerWidth,
                // position: "unset",
                borderRight: "unset!important",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { lg: "none", xl: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                // width: drawerWidth,
                position: "unset",
                borderRight: "unset",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            // flexGrow: 1,
            width: { xxs: "100%", xl: `calc(100% - ${drawerWidth}px)` },
            margin: {
              // xl: "5rem 1.875rem",
              // md: "2.5rem 1.25rem",
              // xxs: "7.5rem 0 1.25rem 0 ",
              xl: "130px 30px 80px 30px",
              md: "100px 1.25rem",
              xxs: "100px 0 1.25rem 0 ",
            },
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
            minHeight: "100%",
          }}
        >
          <Box sx={{ minWidth: "100%" }}>{children}</Box>
        </Box>
      </Stack>
    </>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
