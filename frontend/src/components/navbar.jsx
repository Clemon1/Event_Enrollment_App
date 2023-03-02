import {
  AppBar,
  Typography,
  Stack,
  Toolbar,
  Button,
  TextField,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LogOut, currentUSer } from "../features/authSlice";
import { useState } from "react";

const Navbar = () => {
  const user = useSelector(currentUSer);
  const dispatch = useDispatch();
  const handlelogOut = () => {
    dispatch(LogOut());
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position='fixed'
      sx={{
        width: "100%",
        height: 65,
        top: 0,
        zIndex: 300,
        background: "#030f18",
        padding: "2px 65px",
      }}>
      <Toolbar>
        <Typography
          variant='h4'
          sx={{
            flexGrow: 1,
            fontWeight: 600,
            color: "#edf7ff",
          }}>
          <Link to={"/"} style={{ textDecoration: "none", color: "#edf7ff" }}>
            Event-O
          </Link>
        </Typography>
        {user ? (
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{
              width: ["100%", "100%", "60%", "80%"],
              background: ["#04263A", "#04263A", "inherit"],
              position: ["absolute", "absolute", "static"],
              top: 60,
              zIndex: 100,
              padding: [2, 4],
              transform: ["translateX(-550px)", "translateX(-905px)", "unset"],
              left: 0,
              flexDirection: ["column", "column", "row", "row"],
              height: ["fit-content", "fit-content", "4vh"],
              gap: 5,
            }}>
            <Stack direction={"row"} width={"fit-content"} height={"7vh"}>
              <TextField
                id='filled-basic1'
                placeholder='Search...'
                color='primary.light'
                sx={{
                  width: 550,
                }}
                variant='filled'
              />
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={2}>
              <Typography variant='body1' color={"primary.light"}>
                {user.user.email}
              </Typography>
              <Button
                onClick={handlelogOut}
                variant='contained'
                sx={{
                  background: "#edf7ff !important",
                  color: "#030f18",
                  padding: "6px 6px",
                  height: "7vh",
                  fontWeight: 500,
                  borderRadius: 2,
                }}>
                logOut
              </Button>
            </Stack>
          </Stack>
        ) : (
          <Stack
            sx={{
              width: ["100%", "100%", "fit-content"],
              background: ["#04263A", "#04263A", "inherit"],
              position: ["absolute", "absolute", "static"],
              top: 60,
              zIndex: 100,
              padding: [2, 4],
              transform: ["translateX(-550px)", "translateX(-905px)", "unset"],
              left: 0,
              flexDirection: ["column", "column", "row", "row"],
              height: ["fit-content", "fit-content", "fit-content"],
              gap: 2,
            }}>
            <Link to='/login' style={{ textDecoration: "none" }}>
              <Button
                variant='contained'
                sx={{
                  background: "#edf7ff !important",
                  color: "#030f18",
                  width: "100%",
                  fontWeight: 600,
                  borderRadius: 4,
                }}>
                login
              </Button>
            </Link>
            <Link to='/register' style={{ textDecoration: "none" }}>
              <Button
                variant='contained'
                sx={{
                  background: "#03a075 !important",
                  fontWeight: 600,
                  borderRadius: 4,
                }}>
                Register
              </Button>
            </Link>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
