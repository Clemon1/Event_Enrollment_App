import { AppBar, Typography, Stack, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
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
          <Button variant='inherit'>Home</Button>
          <Button variant='inherit'>About</Button>
          <Button variant='inherit'>Event</Button>

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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
