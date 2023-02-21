import { AppBar, Typography, Stack, Toolbar, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position='static'
      sx={{
        width: "100%",
        height: 65,
        background: "#030f18",
        padding: "2px 28px",
      }}>
      <Toolbar>
        <Typography variant='h5' sx={{ flexGrow: 1, fontWeight: 600 }}>
          Event-O
        </Typography>

        <Stack direction={"row"} gap={2}>
          <Button variant='inherit'>Home</Button>
          <Button variant='inherit'>About</Button>
          <Button variant='inherit'>Event</Button>
        </Stack>
        <Stack direction={"row"}>
          <Button variant='inherit'>login</Button>
          <Button
            variant='contained'
            sx={{
              background: "#03a075 !important",
              fontWeight: 500,
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
