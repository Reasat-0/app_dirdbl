import React, { useEffect, useState } from "react";
import logo from "@/public/images/dbl_go.png";
import userImg from "@/public/images/user-placeholder.png";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HambegurIcon from "@/app/newComponetns/Icons/HambegurIcon";
import { DTypography } from "@/app/utils/imports";
import { signInDir } from "@/app/utils/moduleDirectories";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/app/Redux/features/authSlice";
const Nav = ({ drawerToggler }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.persistedReducer);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    dispatch(logOut());
    router.push(signInDir);
  };

  return (
    <AppBar
      sx={{
        background: "#fff",
        boxShadow: "none",
        borderBottom: "1px solid #E8E6E6",
        minHeight: "80px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container
        sx={{
          maxWidth: {
            xxs: "300px",
            xs: "390px",
            sm: "540px",
            md: "680px",
            cmd: "800px",
            lg: "900px",
            xl: "1100px",
            xxl: "1200px",
            xxxl: "1400px",
          },
          // minHeight: "calc( 100vh - 80px )",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Toolbar
          sx={{
            minHeight: "80px",
            minWidth: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={drawerToggler}
            sx={{ mr: 2, width: "45px", display: { xl: "none" } }}
          >
            <HambegurIcon />
          </IconButton>
          <Box>
            <img src={logo.src} alt="fdfd" />
          </Box>
          <div>
            <>
              {userData?.isLoggedIn && (
                <>
                  <Stack direction={"row"} spacing={5}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <DTypography
                        variant={"medium2Bolder"}
                        textAccent={"dark"}
                        text={`Hello, ${userData?.userName || "Default User"}`}
                        style={{
                          textTransform: "capitalize",
                          marginRight: "10px",
                        }}
                      />
                    </Box>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <Box
                        sx={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid red",
                        }}
                      >
                        <img
                          style={{ width: "100%", borderRadius: "50%" }}
                          src={userImg.src}
                          alt=""
                        />
                      </Box>
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem> */}
                      <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                    </Menu>
                  </Stack>
                </>
              )}
            </>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
