import { AppBar, Typography, Stack, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <AppBar
      position='static'
      sx={{
        width: "100%",
        height: 65,
        background: "#030f18",
        padding: "2px 65px",
      }}>
      <Toolbar>
        <Typography variant='h4' sx={{ flexGrow: 1, fontWeight: 600 }}>
          Event-O
        </Typography>

        <Stack direction={"row"} gap={1}>
          <Button variant='inherit'>Home</Button>
          <Button variant='inherit'>About</Button>
          <Button variant='inherit'>Event</Button>
        </Stack>
        <Stack width={"20%"} direction={"row"} gap={1}>
          <Link to='/login'>
            <Button
              variant='contained'
              sx={{
                background: "#ffffff !important",
                color: "#030f18",
                fontWeight: 600,
                borderRadius: 4,
              }}>
              login
            </Button>
          </Link>
          <Button
            variant='contained'
            sx={{
              background: "#03a075 !important",
              fontWeight: 600,
              borderRadius: 4,
            }}>
            Register
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
